import { Doctor } from './doctor.model';

export class Schedule {
  constructor(public id: number, public data: Date, public medico: Doctor) {}
}
