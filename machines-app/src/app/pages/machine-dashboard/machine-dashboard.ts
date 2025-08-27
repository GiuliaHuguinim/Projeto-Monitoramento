import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Machine } from '../../models/machine.model';
import { MachineService } from '../../services/machine.service';

@Component({
  selector: 'app-machine-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './machine-dashboard.html'
})
export class MachineDashboard implements OnInit {
  machines: Machine[] = [];

  constructor(private machineService: MachineService) {}

  ngOnInit(): void {
    this.loadMachines();
  }

  loadMachines(): void {
    this.machines = this.machineService.getMachines();
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Ativo':
        return 'status-ativo';
      case 'Manutenção':
        return 'status-manutencao';
      case 'Inativo':
        return 'status-inativo';
      default:
        return 'status-default';
    }
  }
}
