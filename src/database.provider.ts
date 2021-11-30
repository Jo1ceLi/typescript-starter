import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mongodb',
        url: 'mongodb://0.0.0.0:27017/',
        entities: ['/src/models/**.entity.ts'],
        synchronize: true,
        useNewUrlParser: true,
        logging: true,
      }),
  },
];
