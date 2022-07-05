import { Schema, model, version } from "mongoose";

const pacientesSchema = new Schema(
  {
    nombre: {
      type: String,
      
    },
    apellido: {
      type: String,
      
    },
    identificacion: {
      type: String,
      
    },
    genero: {
      type: String,
      
    },
    peso: {
      type: String,
      
    },
    estatura: {
      type: String,
      
    },
    tipificacion: {
      type: String,
      
    },
    telefono1: {
      type: String,
      
    },
    telefono2: {
      type: String,
    },
    correoelectronico: {
      type: String,
      
    },
    direccion: {
      type: String,
      
    },

/*    
    centro: {
      type: String,
    },
    diagnostico: {
      type: String
    },
    indicacion: {
      type: String
    },
    exequatur: {
      type: String
    },
    fecha: {
      type: String
    },

*/

    historial: [
      {
        type: Schema.Types.ObjectId,
        ref: "Historial"
      }
    ],
    roles: [
      {
        type: Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
    
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

/*
[{
  "_id": {
    "$oid": "62abc9980007fe4b06a2ae83"
  },
  "Nombres": "SuNombre",
  "Apellido": "SuApellido",
  "Identificación": "123-4567891-2",
  "TipoId": "Cédula",
  "FechaNacimiento": {
    "$date": {
      "$numberLong": "986097600000"
    }
  },
  "Sexo": "Masculino",
  "NumTel1": "8091237654",
  "NumTel2": "8091237654",
  "Email1": "sucorreo@Correo.com",
  "Email2": "sucorreo@Correo.com",
  "PesoLBS": 165.3,
  "EstaturaCM": 148.6,
  "TipoSangre": "O+",
  "Alergias": [
    "Aines",
    "Abejas",
    "Piña"
  ],
  "Cabeza": {
    "Observación": "Algo se ve",
    "Exequatur": "3X3qu4tUr",
    "createdAt": {
      "$date": {
        "$numberLong": "988689600000"
      }
    },
    "updatedAt": {
      "$date": {
        "$numberLong": "988689600000"
      }
    }
  }
}]

pacientes historial table
{{#if pacientes}}
  <table class="table table-bordered table-hover table-dark">
    
      <tr>
       <td colspan="7">
        {{pacientes.nombre}}{{pacientes.telefono1}}{{pacientes.telefono2}}
        <br>
        {{pacientes.tipificacion}}
        <br>
        {{pacientes.identificacion}}

       </td>
      </tr>
    

    <tbody>

      {{#each pacientes}}
        <tr>
          <td>Nombre Del Recinto</td>
          <td>Descripcion de lo que se hizo </td>
          <td>Que hacer</td>
          <td>Nombre y Ocupacion de la persona que hizo el chequeo</td>
          <td>Fecha en la que se hizo</td>
          <td>Docs</td>
          <td>

            <a
              href="/pacientes/{{pacientes._id}}/edit"
              class="btn btn-info mb-2"
            >Update</a>
          </td>
        </tr>

      {{/each}}

    </tbody>
  </table>

{{else}}

  <div class="text-center text-white">
    <h1>No Hay Historial de Pacientes</h1>
    <img src="" />
  </div>

{{/if}}


*/

export default model("Pacientes", pacientesSchema);
