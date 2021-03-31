import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpawnService {
  apiURL: string;

  constructor(private httpClient: HttpClient) {}

  public spawnServer() {
    const header = {
      headers: new HttpHeaders().set('Authorization', 'token fcd1990e4ecb428295209595a8fd28d0')
    };

    const requestStructure = {profile: 'Streamlit Dashboard External App'};

    // return this.httpClient.get<any> ("http://192.168.99.135:32692/hub/api/users/admin/server",header);

    return this.httpClient.post<any>(
      'http://192.168.99.136:31970/hub/api/users/admin/server',
      requestStructure,
      header
    );
  }
}
