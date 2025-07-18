import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ppr-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ppr-form.component.html'
})
export class PprFormComponent {}
