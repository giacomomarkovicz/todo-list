const mongoose = require("../database");

const TodoSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    deadline: String,
    done: Boolean
  },
  {
    timestamps: true
  }
);

const todo = mongoose.model("Todo", TodoSchema);

module.exports = todo;
