import model from "../models";

export default {
  agregar: async (req, res, next) => {
    try {
      const { nombre, precio, idpersona } = req.body;

      const articulos = new model.Articulo({
        nombre,
        precio,
        idpersona,
      });

      const registro = await articulos.save();
      res.status(200).json(registro);
      console.log(req.body);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un error al guardar los datos",
      });

      next(e);
    }
  },

  listarArticulos: async (req, res, next) => {
    try {
        const articulos= await model.Articulo.find({persona: req.params.id}).populate({path: 'persona'});
        console.log(articulos);
        res.json(articulos);
        
    } catch (error) {
        res.status().send({
            message:"ocurrio un error al consultar"
        });
        next(error);
    }
  },
};
