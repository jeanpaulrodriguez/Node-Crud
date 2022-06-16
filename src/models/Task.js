import { Schema , model, version } from "mongoose";


const taskSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
    versionKey: false
}
);

export default model('Task', taskSchema);