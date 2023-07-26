var config = {
  development: {
    //url to be used in link generation
    url: "http://localhost:8080",

    //mongodb connection settings
    database: {
      host: "127.0.0.1",
      port: "27017",
      db: "uitouxVechicle",
      params: "",
    },

    //server details
    server: {
      host: "127.0.0.1",
      port: "8080",
    },

    secret: "UITOUX_SECRET_KEY",
  },
  production: {
    //url to be used in link generation image upload
    url: "",

    //mongodb connection settings
    database: {
      host: "172.31.34.10",
      port: "27017",
      db: "uitouxVechicle",
      params: "",
    },

    //server details
    server: {
      host: "127.0.0.1",
      port: "8080",
    },

    secret: "UITOUX_SECRET_KEY",
  },
};

module.exports = config;
