const mongoose= require("mongoose")

let TodoSchema = new mongoose.Schema({
  description: { type: String },
  done: { type: Boolean }
},{timestamps: true})


module.exports = mongoose.model('Todo', TodoSchema)