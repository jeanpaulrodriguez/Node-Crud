import { Schema, model, version } from "mongoose";

const historialSchema = new Schema(
  {
    centro: {
      type: String,
    },
    diagnostico: {
      type: String,
    },
    indicacion: {
      type: String,
    },
    exequatur: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Historial", historialSchema);
