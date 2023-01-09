import { Component } from '@angular/core';
import { CloudpracService } from '../cloudprac.service';


@Component({
  selector: 'app-cloudprac',
  templateUrl: './cloudprac.component.html',
  styleUrls: ['./cloudprac.component.css']
})
export class CloudpracComponent {
  cloudD :any=[];
  constructor(private cloudpracService: CloudpracService){
  }

  getAWSData(){
    return this.cloudpracService.getAWSUrl().subscribe((data) =>{
      console.log(data);
      this.cloudD = data;
    });
  }

  getGCPData(){
    return this.cloudpracService.getGCPUrl().subscribe((data) =>{
      console.log(data);
      this.cloudD = data;
    });
  }

  getAzureData(){
    return this.cloudpracService.getAzureUrl().subscribe((data) =>{
      console.log(data);
      this.cloudD = data;
    });
  }

}
