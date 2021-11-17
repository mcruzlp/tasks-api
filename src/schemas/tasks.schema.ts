import * as mongoose from 'mongoose';

export const TasksSchema = new mongoose.Schema({
  title: String,
  description: String,
  done: Boolean,
});

