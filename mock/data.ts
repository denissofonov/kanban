import { v4 as uuid } from "uuid"
import { IColumn } from "../src/types/column"
import { IStatus, ITag } from "../src/types"
import { ITask } from "../src/types/task"
import { subtractRandomTimeFromDate } from "../src/helpers/date"

const tags: ITag[] = [
    {
        'id': uuid(),
        'name': 'Полезное',
        'color': '#4db887'
    },
]

const statuses: IStatus[] = [
    {
        'id': uuid(),
        'name': 'В очереди'
    },
    {
        'id': uuid(),
        'name': 'В процессе'
    },
    {
        'id': uuid(),
        'name': 'На паузе'
    },
    {
        'id': uuid(),
        'name': 'Готово'
    }
]

const dates: string[] = []

for (let i = 0; i < 4; i++) {
    dates.push(subtractRandomTimeFromDate());
}

const tasks: ITask[] = [
    {
        id: uuid(),
        name: 'Покушать',
        description: 'Сделать что-то вкусное и полезное',
        deadline: subtractRandomTimeFromDate(dates[0], true),
        createdAt: dates[0],
        updatedAt: null,
        updatedStatusAt: null,
        status: statuses[0].name,
        tags: [tags[0].name]
    },
    {
        id: uuid(),
        name: 'Сменить работу',
        description: 'Открыть hh и поскроллить вакансии',
        deadline: null,
        createdAt: dates[1],
        updatedAt: null,
        updatedStatusAt: null,
        status: statuses[0].name,
        tags: []
    },
    {
        id: uuid(),
        name: 'Сделать канбан',
        description: 'Создать приложку для поиска работы',
        deadline: null,
        createdAt: dates[2],
        updatedAt: null,
        updatedStatusAt: null,
        status: statuses[1].name,
        tags: []
    },
    {
        id: uuid(),
        name: 'Посидеть в кресле',
        description: 'Кайфануть развалившись в кресле',
        deadline: subtractRandomTimeFromDate(dates[3], true),
        createdAt: dates[3],
        updatedAt: null,
        updatedStatusAt: null,
        status: statuses[1].name,
        tags: []
    },
]

const columns: IColumn[] = [
    {
        id: uuid(),
        name: statuses[0].name,
        order: 1,
        statusColor: 'rgba(116,123,255,0.52)',
        statusIcon: 'clock'
    },
    {
        id: uuid(),
        name: statuses[1].name,
        order: 2,
        statusColor: 'rgba(47,177,38,0.49)',
        statusIcon: 'clock'
    },
    {
        id: uuid(),
        name: statuses[2].name,
        order: 3,
        statusColor: '#a5a5a5',
        statusIcon: 'clock'
    },
    {
        id: uuid(),
        name: statuses[3].name,
        order: 4,
        statusColor: '#a5a5a5',
        statusIcon: 'clock'
    }
];

export default { columns, tasks, statuses, tags }
