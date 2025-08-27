import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Machine } from '../models/machine.model';

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  //  URL e a porta
  private readonly apiUrl = 'https://localhost:7123/api/machines';

  constructor(private http: HttpClient) { }

  getMachines(status?: string): Observable<Machine[]> {
    let url = this.apiUrl;
    if (status) {
      url += `?status=${status}`;
    }
    return this.http.get<Machine[]>(url);
  }

  getMachineById(id: string): Observable<Machine> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Machine>(url);
  }

  createMachine(machineData: Omit<Machine, 'id'>): Observable<Machine> {
    return this.http.post<Machine>(this.apiUrl, machineData);
  }
}
