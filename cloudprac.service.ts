import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CloudpracService {
  awsurl: string;
  gcpurl : string;
  azureurl: string;

  constructor(private httpClient: HttpClient) { 
    this.awsurl = "http://localhost:3000/AWS";
    this.gcpurl = "http://localhost:3000/GCP";
    this.azureurl = "http://localhost:3000/Azure";
  }

  getAWSUrl(){
    return this.httpClient.get(this.awsurl);
  }
  
  getGCPUrl(){
    return this.httpClient.get(this.gcpurl);
  }

  getAzureUrl(){
    return this.httpClient.get(this.azureurl);
  }
}
