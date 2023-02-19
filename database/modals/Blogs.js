const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogsSchema = new Schema({
  name: String,
  id: Number,
  title: String,
  category: String,
  subCategory: Array,
  description: Array,
  authorName: String,
  authorAvatar: String,
  createdAt: String,
  cover: String

});

const BlogsModel = new mongoose.model("blog", blogsSchema);

module.exports = BlogsModel;

