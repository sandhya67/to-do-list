const { Client } =require('pg');
const client =new Client({
   user:'postgres',
   database: 'listitems',
   host: 'localhost',
   port: 5432,
   password: 'Sandhya@589'
});

// const port= 2000;

client.connect().then(res =>{
   console.log('PostgreSql connected')
}).catch(err =>{
   console.log('Error while connecting to database',err)
});

module.exports = client;