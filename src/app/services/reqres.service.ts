import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReqresService {

  constructor(private httpClient: HttpClient) { }

  post(url: string, obj: Object) {
    return this.httpClient.post(url, obj);
  }
}
