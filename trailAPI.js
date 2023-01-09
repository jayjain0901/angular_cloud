var seneca = require('seneca')();
var cors = require('cors');
var express  = require('express');
var app = express();
var trans = require('seneca-transport');


app.use(cors());
seneca.quiet();
seneca.client(3500)
app.get('/', (req, res)=>{
      res.send("working")
});

app.get('/AWS', (req, res)=>{
      seneca.act({component: 'cloudprac',by:'AWS'},(err, result)=>{
            if (err) {
                  console.log(err);
                  res.status(404).send("error")
            }
            else{
                  res.status(200).send(result.awsResult)
            }
      });
});

app.get('/GCP', (req, res)=>{
      seneca.act({component: 'cloudprac',by:'GCP'},(err, result)=>{
            if (err) {
                  console.log(err);
                  res.status(404).send("error")
            }
            else{
                  res.status(200).send(result.gcpResult)
            }
      });
});

app.get('/Azure', (req, res)=>{
      seneca.act({component: 'cloudprac',by:'Azure'},(err, result)=>{
            if (err) {
                  console.log(err);
                  res.status(404).send("error")
            }
            else{
                  res.status(200).send(result.azureResult)
            }
      });
});

      
app.listen(3000,'127.0.0.1', ()=>{
      console.log("listening on  port 3000 ...");
})

