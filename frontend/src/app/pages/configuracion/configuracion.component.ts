import { Component } from '@angular/core';
import { PprFormComponent } from '../../components/ppr-form/ppr-form.component';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [PprFormComponent],
  template: '<app-ppr-form></app-ppr-form>'
})
export class ConfiguracionComponent {}
