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
                              }


    // return this.httpClient.get<any> ("http://192.168.99.135:32692/hub/api/users/admin/server",header);

    return this.httpClient.post<any>(
      'http://127.0.0.1:8002/spawnDashboard',
      requestStructure
    );
  }
}
