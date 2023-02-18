const mysql = require('mysql');

/**
 *
 * this script will connect to our database.
 * set SQL to be accessible from anywhere.
 *
 * */


const connection = mysql.createConnection({
    host: '130.225.170.71',
    user: 'root1',
    password: 'Rootroot1@',
    database: 'WebPage',
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ', err);
        return;
    }
    console.log('Connected to database.');
});