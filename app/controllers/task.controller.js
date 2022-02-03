const db = require("../models");
const Task = db.tasks;
const Op = db.Sequelize.Op;

// Create and Save a new Task
exports.create = (req, res) => {
    if(!req.body.task_name){
        res.status(400).send({
            message:"Content can not be empty!"
        });
        return;
    }

    //Create a Task
    const task= {
        task_name: req.body.task_name,
        description: req.body.description
    };

    //Save Task in db
    Task.create(task)
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Error occured while creating a Task!"
        });
    });

};

// Update a Task by id
exports.update = (req, res) => {
  const id=req.params.id;

  Task.update(req.body,{
      where:{id: id}
  })
  .then(num=>{
      if(num==1){
          res.send({
              message: "Task was updated successfully!" 
          });
      }
      else{
          res.send({
              message: `Cannot update a Task by id=${id}.`
          });
      }
  })
  .catch(err=>{
      res.status(500).send({
          message:"Error updating Task by id=" +id
      });
  });
};

// Delete a Task by id
exports.delete = (req, res) => {
    const id=req.params.id;

    Task.destroy({
        where:{id: id}
    })
    .then(num=>{
        if(num==1){
            res.send({
                message: "Task was deleted successfully!"
            });
        }
        else{
            res.send({
                message: `Cannot delete a Task by id=${id}.`
            });
        }
    })
    .catch(err=>{
        res.status(500).send({
            message:"Cannot delete a Task by id=" +id
        });
    });
};

// Show all Task
//exports.show = (req, res) => {
//};

// Show a Task by id
//exports.show = (req, res) => {
  //  const id=req.params.id;

    //Task.show(id)
    //.then(data=>{
    //    res.send(data);
    //})
    //.catch(err=>{
      //  res.status(500).send({
       //     message:"Error retrieve a Task by id=" +id
        //});
   // });
//};