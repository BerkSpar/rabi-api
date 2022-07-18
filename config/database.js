module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-54-80-123-146.compute-1.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'deia6p3ngltuck'),
      user: env('DATABASE_USERNAME', 'kscgaivderdkqt'),
      password: env('DATABASE_PASSWORD', 'd87b9354e28442ab2c801ac311a0b9a7f4173148ad89cc46fe3e28be42985983'),
      ssl: { rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), },
    },
  },
});
