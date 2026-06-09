module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'sqlite')

  if (client === 'postgres') {
    return {
      connection: {
        client: 'postgres',
        connection: {
          connectionString: env('DATABASE_URL'),
          ssl: { rejectUnauthorized: false },
          schema: env('DATABASE_SCHEMA', 'public'),
        },
        pool: { min: 2, max: 10 },
        acquireConnectionTimeout: 60000,
      },
    }
  }

  return {
    connection: {
      client: 'sqlite',
      connection: {
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      useNullAsDefault: true,
      acquireConnectionTimeout: 60000,
    },
  }
}
