import { Injectable, signal } from '@angular/core';
import { PprPlan } from '../models/ppr-plan.model';

@Injectable({ providedIn: 'root' })
export class PprService {
  private plan = signal<PprPlan | null>(null);

  getPlan() {
    return this.plan.asReadonly();
  }

  updatePlan(data: PprPlan) {
    this.plan.set(data);
  }
}
