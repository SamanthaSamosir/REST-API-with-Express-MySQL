module.exports=app=>{
    const tasks=require("../controllers/task.controller.js");

    var router=require("express").Router();

    //Create a new Task
    router.post("/", tasks.create);

    //Update a Task by id
    router.put("/:id", tasks.update);

    //Delete a Task by id
    router.delete("/:id", tasks.delete);

    //Show all Tasks
    //router.get("/", tasks.show);

    //Show Task by id
    //router.get("/:id", tasks.show);

    app.use('/api/tasks', router);
};