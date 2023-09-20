const exp = require('express');
const express_server = exp()

const mysql = require("mysql");

const bodyparser = require('body-parser');
express_server.use(bodyparser.json());

//allow access to cors
const cors = require("cors");

express_server.use(cors());

express_server.use(function (req, res, next)
  {
  
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials","true");
    next();
  });


//-----------------------------------------------
//establish the database connection 
const db = mysql.createConnection
({

    host: "localhost",
    database: 'bank_system',
    user: 'sqluser',
    password: 'password'

});

db.connect(function(error)
{
    if(error)
    {
        console.log("errorrrrrr")

    }
    else
    {
        console.log("success");
    }
})

//------------------------------------------------
//assign backend port
express_server.listen(4000 , function check(error)
{
    if(error)
    {
        console.log("errorrrrrr in listen")

    }
    else
    {
        console.log("success in listen");
    }
})


//-------------------------------------------------
//get customers names

express_server.get
("/api/customersnames" , (req,res)=>
{
        
        var sql_query = `select customer_name from customer`;
        // console.log("(names)"+sql_query);
        db.query(sql_query, (err,result) => 
        {
            if(err) 
            {
                res.send({status: false ,message :"failed names"})
            }
            else if(result.length>0)
            {
                res.send({status:true ,data:result})
            }
            else
            {
                res.send({status: false ,message :"data not found names!"})
            }
        })
})



//--------------------------------------------------
//get all customers info
express_server.get("/api/customersinfo" , (req,res)=>
{

        var sql_query = "select * from customer";
        // console.log("(allcustomers)"+sql_query);
        db.query(sql_query, (err,result) =>
         {
            if(err) 
            {
                res.send({status: false ,message :"failed all"})
            }
            else if(result.length>0)
            {
                res.send({status:true ,data:result})
            }
            else
            {
                res.send({status: false ,message :"data not found all!"})
            }
        })
})


//----------------------------------------------------
//get one customer info by name

express_server.get
("/api/:id" , (req,res)=>
{
        var custid = req.params.id;
        var sql_query = `select * from customer where customer_name = "${custid}"` ;
        // console.log("(onecustomer)"+sql_query)
      
        db.query(sql_query, (err,result) => 
        {
            if(err) 
            {
                res.send({status: false ,message :"failed one"})
            }
            else if(result.length>0)
            {
             
                res.send({status:true ,data:result})
            }
            else
            {
                res.send({status: false ,message :"data not found one!"})
            }
        })
})



//----------------------------------------------------------------------
//get balance of first customer by name
var f_id ="";
express_server.get
("/api/balance/first/:id" , (req,res)=>
{
        f_id = req.params.id;
        var sql_query = `select customer_current_balance from customer where customer_name = "${f_id}"` ;
        // console.log("(f_balance)"+sql_query);
        db.query(sql_query, (err,result) => 
        {
            if(err) 
            {
                res.send({status: false ,message :"failed f_balance"})
            }
            else if(result.length>0)
            {
               
                res.send({status:true ,data:result})
            }
            else
            {
                res.send({status: false ,message :"data not found f_balance!"})
            }
        })
})


//----------------------------------------------------------------------
//get balance of second customer by name
var s_id ="";
express_server.get
("/api/balance/second/:id" , (req,res)=>
{
        s_id = req.params.id;
        var sql_query = `select customer_current_balance from customer where customer_name = "${s_id}"` ;
        // console.log("(s_balance)"+sql_query);
        db.query(sql_query, (err,result) => 
        {
            if(err) 
            {
                res.send({status: false ,message :"failed s_balance"})
            }
            else if(result.length>0)
            {
               
                res.send({status:true ,data:result})
            }
            else
            {
                res.send({status: false ,message :"data not found s_balance!"})
            }
        })
})


//-------------------------------------------------------------
//update first coutomer's money

express_server.put("/api/balance/first/update" , (req,res)=>
{
    
   
    var amountfirst = req.body.texttamount;
    console.log("amount equal -f = "+amountfirst)

    var sql_query_one = `update customer set customer_current_balance=customer_current_balance - ${amountfirst} where customer_name = "${f_id}"`;
   
    console.log("tranformation-f"+sql_query_one)
    db.query(sql_query_one, (err,result) =>
     {
        if(err) 
            {
                res.send({status: false ,message :"failed f_update"})
            }
            else if(result.length>0)
            {
               
                res.send({status:true ,message : "success f_update"})
            }
            else
            {
                res.send({status: false ,message :"data not found f_update!"})
            }
    })

    
})



//-------------------------------------------------------------
//update second coutomer's money

express_server.put("/api/balance/second/update" , (req,res)=>
{
    
 
    var amountsecond = req.body.texttamount;
    // console.log("amount equal -f = "+amountsecond)

    var sql_query_second = `update customer set customer_current_balance=customer_current_balance + ${amountsecond} where customer_name = "${s_id}"`;
    // console.log("tranformation-s"+sql_query_second)

    db.query(sql_query_second, (err,result) =>
    {
        if(err) 
        {
            res.send({status: false ,message :"failed s_update"})
        }
        else if(result.length>0)
        {
           
            res.send({status:true ,message : "success s_update"})
        }
        else
        {
            res.send({status: false ,message :"data not found s_update!"})
        }
   })
})



//-------------------------------------------------------------
//transformation table

express_server.post("/api/transformationtable" , (req,res)=>
{
    var a = req.body.selectedfirst;
    var b = req.body.selectedsecond;
    var c = req.body.texttamount;
    var sql_query = `insert into transformation_table(first_customer_name,second_customer_name,amount_of_transformed_money) value('${a}' ,'${b}',${c})`;
    // console.log("tranformation_table"+sql_query)

    db.query(sql_query, (err,result) =>
    {
        if(err) 
        {
            res.send({status: false ,message :"failed insert"})
        }
     
        else
        {
            res.send({status:true ,message : "success insert"})
        }
   })
})


//--------------------------------------------------
//get all customers info after transformation
express_server.get("/api/transformationtable/customersinfoaftertrans" , (req,res)=>
{

        var sql_query = `select * from transformation_table`;
        // console.log("(allcustomers)"+sql_query);
        db.query(sql_query, (err,result) =>
         {
            if(err) 
            {
                res.send({status: false ,message :"failed all after"})
            }
            else if(result.length>0)
            {
                res.send({status:true ,data:result})
            }
            else
            {
                res.send({status: false ,message :"data not found all after!"})
            }
        })
})
