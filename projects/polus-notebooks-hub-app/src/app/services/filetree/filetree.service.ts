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
    return this.httpClient.get<any>('http://127.0.0.1:8002/files');
  }
}
