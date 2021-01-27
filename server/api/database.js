const mysql = require('mysql')

function query(grammar) {
  const connection = mysql.createConnection({
    host: '122.51.127.114',
    port: 4000,
    user: 'root',
    password: 'ly82798835',
    database: 'test'
  })

  connection.connect((err) => {
    if (err) throw err
    console.log('connected as id ' + connection.threadId)
  })

  connection.query(grammar, (err, result) => {
    if (err) throw err
    console.log(result)
  })

  connection.end((err) => {
    if (err) throw err
    console.log('close connection success')
  })
}

module.exports = query