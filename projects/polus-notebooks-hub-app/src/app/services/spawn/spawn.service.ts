import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpawnService {
  
  apiURL: string;

  constructor(private httpClient: HttpClient) {}

  public spawnServer(file: string, email: string) {

    const requestStructure = {
                              "profile": "Streamlit Dashboard Variable App",
                              "dashboard": file,
                              "email": email
                              };

    return this.httpClient.post<any>(
      'https://polus-notebooks-hub-backend.ci.aws.labshare.org/spawnDashboard',
      requestStructure
    );

    // this.apiURL = "http://192.168.99.170:31836/hub/api/users/admin/server";
    // let headers = { headers: new HttpHeaders().set('Authorization', 'token 4d4247aa16dd464cbc25140e535e7c61')}
    // return this.httpClient.post<any>(this.apiURL, requestStructure, headers);

  }

}
