module.exports = (sequelize, Sequelize) => {
    const DeletedRecords = sequelize.define("deletedRecords", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return DeletedRecords;
  };
  