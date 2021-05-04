import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class fileTreeService {
  apiURL: string;

  constructor(private httpClient: HttpClient) {}

  public getfileTree() {


    return this.httpClient.get<any>('https://polus-notebooks-hub-backend.ci.aws.labshare.org/files');

    // return this.httpClient.get<any>('http://192.168.99.170:31000/files');


  }
}
