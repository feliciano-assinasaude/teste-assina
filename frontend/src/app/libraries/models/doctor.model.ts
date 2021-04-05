import { Specialty } from './specialty';

export class Doctor {
  constructor(
    public id: number,
    public nome: string,
    public especialidade: Specialty
  ) {}
}
