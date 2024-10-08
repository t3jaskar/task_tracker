const readlineSync = require('readline-sync');
const taskControler = require('../Controller/taskControler');

// Menu to display options
function showMenu() {
    console.log("\nTask Tracker CLI");
    console.log("1. Add a new task");
    console.log("2. List all tasks");
    console.log("3. Update task status");
    console.log("4. Delete a task");
    console.log("5. Exit");
}

// CLI routes
async function taskRoutes() {
    let exit = false;

    while (!exit) {
        showMenu();
        const choice = readlineSync.question('Choose an option: ');

        switch (choice) {
            case '1': {
                const title = readlineSync.question('Enter task title: ');
                await taskControler.addTask(title);
                break;
            }
            case '2': {
                await taskControler.listTasks();
                break;
            }
            case '3': {
                const taskId = readlineSync.question('Enter task ID to update: ');
                const newStatus = readlineSync.question('Enter new status (pending/in-progress/completed): ');
                await taskControler.updateTaskStatus(taskId, newStatus);
                break;
            }
            case '4': {
                const taskId = readlineSync.question('Enter task ID to delete: ');
                await taskControler.deleteTask(taskId);
                break;
            }
            case '5':
                exit = true;
                console.log("Goodbye!");
                break;
            default:
                console.log("Invalid choice. Please try again.");
        }
    }
}

module.exports = taskRoutes;
