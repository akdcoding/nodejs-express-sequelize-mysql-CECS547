module.exports = {
  HOST: "127.0.0.1",
  USER: "root",
  PASSWORD: "Akshada@21",
  DB: "tutorialsdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
