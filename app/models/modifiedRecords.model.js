module.exports = (sequelize, Sequelize) => {
    const DeletedRecords = sequelize.define("modifiedRecords", {
        tutorial_id: {
            type: Sequelize.INTEGER
        },
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
