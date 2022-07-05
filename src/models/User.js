import { Schema, model, version } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      
    },
    email: {
      type: String,
     
    },
    password: {
      type: String,
      
    },
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

export default model("User", userSchema);
