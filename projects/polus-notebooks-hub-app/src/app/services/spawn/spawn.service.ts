import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpawnService {
  
  apiURL: string;

  constructor(private httpClient: HttpClient) {}

  public spawnServer(file: string) {

    const requestStructure = {
                              "profile": "Streamlit Dashboard Variable App",
                              "dashboard": file + ".py"
                              };

    return this.httpClient.post<any>(
      'http://127.0.0.1:8002/spawnDashboard',
      requestStructure
    );
    
    // service call directly to Jupyterhub
    // this.apiURL = "http://192.168.99.170:31836/hub/api/users/admin/server";
    // let headers = { headers: new HttpHeaders().set('Authorization', 'token 4d4247aa16dd464cbc25140e535e7c61')}
    // return this.httpClient.post<any>(this.apiURL, requestStructure, headers);

  }

}
