const express=require('express');
const app= express();
const bodyParser =require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req,res){
    res.sendFile(__dirname+"/index.html");
    //res.send(__dirname);
});
app.post('/', (req,res)=>{
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result=num1+num2;
    res.send("The Result is: "+result);

});
app.get('/bmicalculator', (req,res)=>{
    res.sendFile(__dirname+"/bmiCalculator.html");
});
app.post('/bmiCalculator', function(req,res){
        //res.send("Working!!!");
        var weight=Number(req.body.weight);
        var height=Number(req.body.height);
        height=height/100;
        height=Math.pow(height,2);
        var result1=Math.round(weight/height);
        res.send("BMI is "+result1);
});

app.listen(3000, function(){
    console.log("Listening at port 3000...");
});