const path = require('path');

module.exports = ({ env }) => ({
  connection : {
    client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', 'aws-0-us-west-1.pooler.supabase.com'),
        port: env('DATABASE_PORT', 6543),
        database: env('DATABASE_NAME', 'postgres'),
        user: env('DATABASE_USERNAME', 'postgres.opcijpqrhxrvuqaslduw'),
        password: env('DATABASE_PASSWORD', 'mermeladita99'),
        ssl: env.bool('DATABASE_SSL', false)
      },
      useNullAsDefaut: true 
    },
  });
