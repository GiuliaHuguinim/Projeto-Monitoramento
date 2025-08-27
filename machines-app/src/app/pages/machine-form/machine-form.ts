import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Machine } from '../../models/machine.model';
import { MachineService } from '../../services/machine.service';

@Component({
  selector: 'app-machine-form',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './machine-form.html'
})
export class MachineForm {
  machine: Machine = {
    id: '',
    name: '',
    location: '',
    status: 'Ativo'
  };

  constructor(
    private machineService: MachineService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (this.machine.name && this.machine.location) {
      this.machine.id = Date.now().toString();
      this.machineService.addMachine(this.machine);
      this.router.navigate(['/dashboard']);
    }
  }
}
