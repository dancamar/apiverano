import mongoose, {Schema} from "mongoose";

const Personas = new Schema({
    nombre: { type: String, maxlenght: 50, required: true },
    apellidos: String,
    direccion: String,
      createdAt:{
        type: Date, default: Date.now
    }
});

const Persona= mongoose.model('persona', Personas);

export default Persona;