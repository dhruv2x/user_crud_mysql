const {createPool} =require("mysql2");

const pool= createPool({
    port:process.env.DB_PORT,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.MYSQL_DB,
    connectionLimit:10
})

module.exports=pool;

// DB_PORT= mysql port number 
// APP_PORT=where your server is runnning 
// DB_HOST=mostly localhost
// DB_USER=username mostly root
// DB_PASS=user/root password
// MYSQL_DB=mysql database name