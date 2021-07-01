import model from '../models';

export default {
    agregar: async(req, res, next)=>{
        try{
            const {nombre, apellidos, direccion}=req.body;

            const personas= new model.Persona({
                nombre,
                apellidos,
                direccion
            });

            const registro = await personas.save();
            res.status(200).json(registro);
            console.log(req.body);
        }catch(e){
            res.status(500).send({
                message: "Ocurrio un error al guardar los datos"
            });

            next(e);
        }
    },

    consultar: async(req,res, next)=>{
    try {
        const personas= await model.Persona.find();
        console.log(personas);
        res.json(personas);
    } catch (error) {
        res.status(500).send({
            message: "Ocurrio un error al consultar"
        });

        next(error);
    }
    }
}
