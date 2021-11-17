import { Connection } from 'mongoose';
import { TasksSchema } from './schemas/tasks.schema';

export const catsProviders = [
  {
    provide: 'TASKS_MODEL',
    useFactory: (connection: Connection) => connection.model('Tasks', TasksSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
