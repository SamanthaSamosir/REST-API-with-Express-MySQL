module.exports= {
    HOST:"108.136.232.253",
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