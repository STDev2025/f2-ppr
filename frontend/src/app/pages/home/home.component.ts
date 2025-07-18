import { Component } from '@angular/core';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DashboardComponent],
  template: '<app-dashboard></app-dashboard>'
})
export class HomeComponent {}
