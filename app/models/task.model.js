module.exports= (sequelize, Sequelize) => {
    const Task = sequelize.define("task",{
        task_name:{
            type: Sequelize.STRING
        },
        description:{
            type: Sequelize.STRING
        }
    });
    return Task;
};