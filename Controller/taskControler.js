const Task = require('../Model/taskModel');

exports.addTask = async (title) => {
    const newTask = new Task({ title });
    await newTask.save();
    console.log("Task added successfully!");
};

exports.listTasks = async () => {
    const tasks = await Task.find();
    console.log("\nCurrent Tasks:");
    tasks.forEach(task => {
        console.log(`${task._id}. ${task.title} [${task.status}]`);
    });
};

exports.updateTaskStatus = async (taskId, newStatus) => {
    const task = await Task.findById(taskId);
    if (task) {
        task.status = newStatus;
        await task.save();
        console.log("Task updated successfully!");
    } else {
        console.log("Task not found!");
    }
};

exports.deleteTask = async (taskId) => {
    const result = await Task.findByIdAndDelete(taskId);
    if (result) {
        console.log("Task deleted successfully!");
    } else {
        console.log("Task not found!");
    }
};

