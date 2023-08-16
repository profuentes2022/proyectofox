const bodyParser = require("body-parser");
const express =require("express");
const mysql=require ("mysql");
const bodyParse=require("body-parser")
const cors=require("cors");
const app=express();
app.use(bodyParse.urlencoded({extended:false}));
app.use(bodyParse.json());
app.use(cors({origin:'*'}));

const config={
host:'bwesvytlgr2xmrmbfmm5-mysql.services.clever-cloud.com',
user:'ut0fvej3gvvbvt5j',
password:'8UOyZkaMNUFHo87VQRhf',
database:'bwesvytlgr2xmrmbfmm5'
}




const pool= mysql.createPool(config);

app.post("/alumnos",(req,res)=>{
 
   let nombre=req.body.nombre;
   let grado=req.body.grado;
   let seccion=req.body.seccion
   let aciento =req.body.aciento;
   let fecha =req.body.fecha;
   let  entrada =req.body.entrada;
   let  salida =req.body.salida;

pool.query(`INSERT INTO alumnos (nombre, grado, seccion, aciento, fecha, entrada, salida) VALUES ('${nombre}','${grado}','${seccion}','${aciento}','${fecha}','${entrada}','${salida}')`,(err,result)=>{
if (err){
}
res.send("ok");
})


})

app.get("/alumnos",(req,res)=>{
let alumno = req.query.codigo;


pool.query(`select * from alumnos where codigo =${alumno}` ,(err,result)=>{
    if (err){
    }
    res.send(result);
    })


});





app.get("/",(req,res)=>{

})




app.listen(5555,()=>{
    console.log("servidor activo ");
})
