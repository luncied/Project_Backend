import dotenv from 'dotenv';
dotenv.config();
if (process.env.NODE_ENV !== 'production'){
  dotenv.config();
}
const user = `${process.env.DB_USER}`
const password = `${process.env.DB_PASSWORD}`

// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {

  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      database: 'products',
      // user: user,
      // password: password
      user: 'postgres',
      password: '73d1un46:5Q1'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  /* 
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  */
  /*
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
  */
};
