import mongoose from "mongoose";

const { Schema } = mongoose;

const SchemaObject = {
    originalUrl: {
        type: String,
        required: true, // Fixed 'require' to 'required'
    },
    shortUrl: {
        type: String,
    },
};

const shortUrlSchema = new Schema(SchemaObject, { timestamps: true });

const ShortURL = mongoose.model("ShortURL", shortUrlSchema);

export default ShortURL;
