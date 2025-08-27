import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Machine } from '../../models/machine.model';
import { MachineService } from '../../services/machine.service';

@Component({
  selector: 'app-machine-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './machine-details.html'
})
export class MachineDetails implements OnInit {
  machine: Machine | undefined;

  constructor(
    private machineService: MachineService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.machine = this.machineService.getMachineById(id);
    }
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
