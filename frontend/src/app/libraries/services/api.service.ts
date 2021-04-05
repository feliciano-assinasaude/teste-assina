import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Schedule } from '../models/schedule.model';
import { Specialty } from '../models/specialty';
import { Doctor } from '../models/doctor.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getSchedules(): Observable<Schedule[]> {
    return this.http
      .get(`${this.baseUrl}/agendamento`)
      .pipe(
        map((response: { agendamentos: Schedule[] }) => response.agendamentos)
      );
  }

  public getOneSchedule(id: string): Observable<Schedule> {
    return this.http
      .get(`${this.baseUrl}/agendamento/${id}`)
      .pipe(map((response: Schedule) => response));
  }

  public getSpecialties(): Observable<Specialty[]> {
    return this.http
      .get(`${this.baseUrl}/especialidades`)
      .pipe(
        map(
          (response: { especialidades: Specialty[] }) => response.especialidades
        )
      );
  }

  public getDoctorBySpecialty(specialtyId: number): Observable<Doctor[]> {
    return this.http
      .get(`${this.baseUrl}/medicos/${specialtyId}`)
      .pipe(
        map((response: { medicos: Doctor[] }) => response.medicos as Doctor[])
      );
  }

  public createSchedule(params: {
    medico_id: number;
    data: string;
  }): Observable<number> {
    return this.http
      .post(`${this.baseUrl}/agendamento`, params)
      .pipe(map((response: number) => response));
  }
}
