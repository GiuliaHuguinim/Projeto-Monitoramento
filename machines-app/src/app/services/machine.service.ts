import { Injectable } from '@angular/core';
import { Machine } from '../models/machine.model';

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  private machines: Machine[] = [
    {
      id: '1',
      name: 'Máquina de Corte CNC',
      location: 'Setor A - Linha 1',
      status: 'Ativo'
    },
    {
      id: '2',
      name: 'Prensa Hidráulica',
      location: 'Setor B - Linha 2',
      status: 'Manutenção'
    },
    {
      id: '3',
      name: 'Torno Automático',
      location: 'Setor C - Linha 3',
      status: 'Ativo'
    }
  ];

  getMachines(): Machine[] {
    return this.machines;
  }

  getMachineById(id: string): Machine | undefined {
    return this.machines.find(machine => machine.id === id);
  }

  addMachine(machine: Machine): void {
    this.machines.push(machine);
  }

  updateMachine(machine: Machine): void {
    const index = this.machines.findIndex(m => m.id === machine.id);
    if (index !== -1) {
      this.machines[index] = machine;
    }
  }

  deleteMachine(id: string): void {
    this.machines = this.machines.filter(machine => machine.id !== id);
  }
}
