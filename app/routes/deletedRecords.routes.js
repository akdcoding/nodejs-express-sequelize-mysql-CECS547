module.exports = app => {
    const deletedRecords = require("../controllers/deletedRecords.controller.js");
  
    var router = require("express").Router();
  
    router.get("/getDeletedRecords", deletedRecords.findAll);
    router.post("/", deletedRecords.create);
  
    app.use('/api/deletedRecords', router);
  };
  