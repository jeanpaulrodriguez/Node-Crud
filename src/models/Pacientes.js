import { Schema, model, version } from "mongoose";

const pacientesSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      
    },
    tipificacion: {
      type: String,
      required: true,
    },
    contacto: {
      type: String,
      required: true,
    },
    opciones: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Pacientes", pacientesSchema);
