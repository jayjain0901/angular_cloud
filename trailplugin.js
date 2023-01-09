module.exports = function(){
      this.add( {component: 'cloudprac',by:'AWS'},(args, res )=>{
            const cloudData = this.make('sample');
            cloudData.list$({platform : 'AWS'}, (err,data)=>{
                  if (err){
                        console.log(err);    
                  }
                  else{
                        console.log(data);
                        res(null,{awsResult : data});
                  }
            })
      } );

      this.add( {component: 'cloudprac',by:'GCP'},(args, res )=>{
            const cloudData = this.make('sample');
            cloudData.list$({platform : 'GCP'}, (err,data)=>{
                  if (err){
                        console.log(err);                       
                  }
                  else{
                        console.log(data);
                        res(null,{gcpResult:data})
                  }
            })
      } );

      this.add( {component: 'cloudprac',by:'Azure'},(args, res )=>{
            const cloudData = this.make('sample');
            cloudData.list$({platform : 'Azure'}, (err,data)=>{
                  if (err){
                        console.log(err);
                  }
                  else{
                        console.log(data);
                        res(null,{azureResult:data});
                  }
            })
      } );
}