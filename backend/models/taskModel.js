const db = require('../config/db');

exports.getAllTasks = (callback) => {
    const sql = 'SELECT * FROM tasks ORDER BY createdAt DESC';
    db.all(sql, [], callback);
};

exports.createTask = (task, callback) => {
    const sql = `
        INSERT INTO tasks (id, title, description, status, dueDate, createdAt, updatedAt)
        VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
    `;
    const values = [task.id, task.title, task.description || null, task.status, task.dueDate || null];
    db.run(sql, values, function (err) {
        callback(err, { id: task.id });
    });
};

exports.updateTask = (id, task, callback) => {
    const sql = `
        UPDATE tasks SET
            title = ?,
            description = ?,
            status = ?,
            dueDate = ?,
            updatedAt = CURRENT_TIMESTAMP
        WHERE id = ?
    `;
    const values = [task.title, task.description || null, task.status, task.dueDate || null, id];
    db.run(sql, values, callback);
};

exports.deleteTask = (id, callback) => {
    const sql = 'DELETE FROM tasks WHERE id = ?';
    db.run(sql, [id], callback);
};
