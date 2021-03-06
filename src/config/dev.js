const host = process.env.DB_HOST || 'localhost';

module.exports = {
  server: {
    port: 9000
  },
  database: {
    url: `mongodb://${host}/node_red`,
    properties: {
      useMongoClient: true
    }
  },
  key: {
    privateKey: '37LvDSm4XvjYOh9Y',
    tokenExpireInMinutes: 1440
  },
  pagination: {
    defaultPage: 1,
    defaultLimit: 10
  },
  mqtt:{
    host: 'm12.cloudmqtt.com',
    username: 'olcetaiv',
    password: 'wvBDfj4Qb8gH',
    port: 11010
  }
};
