import { defineStore } from "pinia";
import mockData from "../../mock/data.ts";
import {IDraggableTasks, ITask} from "../types/task.ts";

export const useTasksStore = defineStore('tasksStore', {
    state: () => ({
        tasks: mockData.tasks,
        formattedTasks: null as null | IDraggableTasks[],
        currentSideTask: null as null | ITask,
    }),
})
