let express=require('express');
let app=express();
let emproutes=require('./routes/emp_route');
app.use("/api/emp",emproutes);

app.use("/api/emp",emproutes);
app.post("/addStudents",(req,res)=>{
    res.send("add student called");
});
app.get("/getStudents",(req,res)=>{
    res.send("get students called");
})
app.listen(3000,()=>{
    console.log("sever listening on port 3000");
})
let express=require('express');
let app=express();
let mongoose=require('mongoose');
let emproutes=require('./routes/emp_route');
let hrroutes=require('./routes/hr_route');
mongoose.connect("mongodb://localhost:27017/hrmanagement")
  .then(()=>console.log("db connected successfully"))
  .catch((err)=>console.log(err))

app.use(express.json()); // used to collect input from UI as JSON data

app.use("/api/emp",emproutes);
app.use("/api/hr",hrroutes);
//run the server
app.listen(3000,()=>{
    console.log("server listening on port 3000");
})