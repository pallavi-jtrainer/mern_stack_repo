import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Todo = new Schema({
    description: {type: String},
    priority: {type: String},
    completed: {type: Boolean}
});

// export default Todo;

export default mongoose.model('Todo', Todo);