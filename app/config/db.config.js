module.exports= {
    HOST:"3.1.213.152",
    USER:"root",
    PASSWORD:"mypass",
    DB: "myDB",
    dialect:"mysql",
    pool: {
        max:5,
        min:0,
        acquire:30000,
        idle:10000

    }
};