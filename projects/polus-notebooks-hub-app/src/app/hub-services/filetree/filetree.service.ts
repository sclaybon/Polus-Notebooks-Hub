import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FiletreeService {
  apiURL: string;

  constructor(private httpClient: HttpClient) {
    this.apiURL = '/v1.24/containers/tljh-dev';
  }

  public getContainerFiletreeById() {
    return this.httpClient.get<any>(`${this.apiURL}/changes`);
  }
}
