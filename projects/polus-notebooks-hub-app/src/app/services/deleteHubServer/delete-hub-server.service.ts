import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteHubServerService {
  apiURL: string;

 

  constructor(private httpClient: HttpClient) {}

  public deleteHubServer() {

    // service call directly to Jupyterhub
    // const header = {
    //   headers: new HttpHeaders().set('Authorization', 'token 4d4247aa16dd464cbc25140e535e7c61')
    // };
    // return this.httpClient.delete<any>('http://192.168.99.170:31836/hub/api/users/admin/server',header);

    return this.httpClient.delete<any>('http://127.0.0.1:8002/stopDashboard');

  }
}
