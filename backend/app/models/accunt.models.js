const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountsSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role:{
        type: String,
        enum: ["User", "Admin"],
        default: "User",
    },
    isActive: {
        type: Boolean,
        default: true,
    },
},
{
    timestamps: true,
}

);

module.exports = mongoose.model("accounts", accountsSchema);



// const accounts = mongoose.model("accounts", accountsSchema);

// module.exports = accounts; 
