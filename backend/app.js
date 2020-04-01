const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
//create connection 
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'app-store'
});
//connect
db.connect((err)=>{
    if(err){
        throw err ;
    }
    console.log('mysql connected...');
});

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const cors = require('cors') ;
app.use(cors()) // Use this after the variable declaration



// insert member 1 
app.get('/addmember1', (req, res) => {
    let postData  = req.body;
    let sql = 'INSERT INTO gym SET ?';
    let query = db.query(sql, postData, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(JSON.stringify(results));
    });
});
 // insert member 2
app.post('/addmember2', (req, res) => {
    let member = {username: req.body.username, phone:req.body.phone,addrs:req.body.addrs,ph_date:req.body.ph_date,startDate:req.body.startDate,endDate:req.body.endDate};
    let sql = 'INSERT INTO gym SET ?';
    let query = db.query(sql, member, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
});

 // select all
 app.get('/select', (req, res) => {

     console.log("hello");
    let sql = 'SELECT * FROM gym';
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
       

        res.json({ res:result  });
    });
});

/*
    # Steps for adding 
        1) write the query for the insert google it and use the same style as select INSERT INTO 
        2) res.json
        3) in the UI find the submit  


*/
/*
app.post('/insert', (req,res) =>{
    let sql = `INSERT INTO gym WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.json('member inseted ');
    });
})
*/
// select single member 
app.get('/select/:id', (req, res) => {
    let sql = `SELECT * FROM gym WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('member by id ');
    });
});

// update member 
app.put('/update/:id', (req, res) => {
    let member = {};

    switch(req.body.type){
        case "username":
            console.log("username");
            member = {username: req.body.text};
            break;
        case "phone":
            console.log("phone");
            member = {phone: req.body.text};
            break;
        case "addrs":
            console.log("addrs");
            member = {addrs: req.body.text};
            break;
        case "ph_date":
            console.log("ph_date");
            member = {ph_date: req.body.text};
            break;
         case "startDate":
             console.log("startDate");
            member = {startDate: req.body.text};
             break;
         case "endDate":
             console.log("end date");
            member = {endDate: req.body.text};
             break;           
    }
    // let member = {username: req.body.username, phone:req.body.phone,startDate:req.body.startDate,endDate:req.body.endDate};
    let sql = `UPDATE gym SET ? WHERE id = ${req.params.id}` ;
    let query = db.query(sql, member, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.json({ res: result});
    });
});
// delete member 
app.delete('/delete/:id', (req, res) => {
    let sql = `DELETE FROM gym WHERE id = ${req.params.id}`; 
     let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.json({ res:result  });
    });
});
/*
app.get('/select', (req, res) => {
     
    console.log("hello");
   let sql = 'SELECT * FROM gym';
   let query = db.query(sql, (err, result) => {
       if(err) throw err;
       console.log(result);
      

       res.json({ res:result  });
   });
});
*/

 // find end date less week  not work yet
 app.get('/selectenddate', (req, res) => {
    let sql = 'SELECT * FROM gym WHERE endDate <= DATE_ADD(CURDATE(), INTERVAL 7 DAY)';
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.json({ res:result  });
    });
});

app.listen('5000',()=>{
    console.log('server started on port 5000');
});

