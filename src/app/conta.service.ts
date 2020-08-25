import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  contasUrl = "http://localhost:8080/conta"

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.contasUrl}`)
  }

  criar (contato:any) {
    return this.http.post(this.contasUrl, contato);
  }
}
