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

    // const header = {
    //   headers: new HttpHeaders().set('Authorization', 'token c91907c3f8d0441db3e1e054238877ce')
    // };
    // return this.httpClient.delete<any>('http://192.168.99.161:30358/hub/api/users/admin/server',header);

    return this.httpClient.delete<any>('http://127.0.0.1:8002/stopDashboard');

  }
}
