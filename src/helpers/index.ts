import {IDraggableTasks, ITask} from "../types/task.ts";
import {IColumn} from "../types/column.ts";

export function getSortedTasksByStatus(tasks: ITask[], columns: IColumn[]) {
    const sortedTasks: IDraggableTasks[] = [];
    columns.forEach((column: IColumn) => {
        if (!sortedTasks.find((item: IDraggableTasks) => item.status === column.name)) {
            sortedTasks.push({status: column.name, tasks: []})
        }
    })
    tasks.forEach((task: ITask) => {
        const existingStatus = sortedTasks.find((item: IDraggableTasks) => item.status === task.status)
        if (existingStatus) existingStatus.tasks.push(task)
    });
    return sortedTasks;
}
