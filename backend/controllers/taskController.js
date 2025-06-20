const taskModel = require('../models/taskModel');
const { v4: uuidv4 } = require('uuid');

exports.getAllTasks = (req, res) => {
    taskModel.getAllTasks((err, tasks) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(tasks);
    });
};

exports.createTask = (req, res) => {
    const { title, description, status, dueDate } = req.body;
    if (!title || !status) return res.status(400).json({ error: "Title and status are required" });

    const newTask = {
        id: uuidv4(),
        title,
        description,
        status,
        dueDate,
    };

    taskModel.createTask(newTask, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: "Task created successfully", taskId: result.id });
    });
};

exports.updateTask = (req, res) => {
    const { id } = req.params;
    const { title, description, status, dueDate } = req.body;

    taskModel.updateTask(id, { title, description, status, dueDate }, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Task updated successfully" });
    });
};

exports.deleteTask = (req, res) => {
    const { id } = req.params;
    taskModel.deleteTask(id, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Task deleted successfully" });
    });
};
