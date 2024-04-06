import {IStatus, ITag, Nullable} from "./index.ts";

export interface ITask {
    id: string,
    name: string,
    description: Nullable<string>,
    deadline: Nullable<string>,
    createdAt: string,
    updatedAt: Nullable<string>,
    updatedStatusAt: Nullable<string>,
    status: IStatus['name'],
    tags: ITag['name'][]
}

export enum TaskStatusEnum {
    Backlog = 'backlog',
    InProgress = 'in-progress',
    Review = 'review',
    Test = 'test',
    onPause = 'on-pause',
    Done = 'done',
}

export interface IDraggableTasks {
    status: IStatus['name'],
    tasks: ITask[]
}
