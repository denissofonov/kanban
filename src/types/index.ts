import {IColumn} from "./column.ts";

export interface IStatus {
    id: string,
    name: string,
}

export interface IData {
    data: IColumn[],
    statuses: IStatus[],
}

export type Nullable<T> = T | null;

export interface ITag {
    id: string,
    name: string,
    color: string,
}
