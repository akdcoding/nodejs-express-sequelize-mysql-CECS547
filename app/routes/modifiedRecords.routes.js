module.exports = app => {
    const modifiedRecords = require("../controllers/modifiedRecords.controller.js");
  
    var router = require("express").Router();
  
    router.get("/:id", modifiedRecords.findAll);
    router.post("/", modifiedRecords.create);
  
    app.use('/api/modifiedRecords', router);
  };
  