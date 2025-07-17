import { Injectable, computed, signal } from '@angular/core';
import { Aportacion } from '../models/aportacion.model';

@Injectable({ providedIn: 'root' })
export class AportacionesService {
  private aportaciones = signal<Aportacion[]>([]);

  getAportaciones() {
    return this.aportaciones.asReadonly();
  }

  updateMes(anio: number, mesIndex: number, monto: number) {
    const list = this.aportaciones();
    const ap = list.find(a => a.anio === anio);
    if (!ap) {
      const newAportacion: Aportacion = {
        anio,
        mensualidades: Array(12).fill(0)
      };
      newAportacion.mensualidades[mesIndex] = monto;
      this.aportaciones.set([...list, newAportacion]);
    } else {
      ap.mensualidades[mesIndex] = monto;
      this.aportaciones.set([...list]);
    }
  }

  calcularDeduccion(anio: number) {
    const aportacion = this.aportaciones().find(a => a.anio === anio);
    return aportacion?.aporteTotalAnual ??
      aportacion?.mensualidades.reduce((s, v) => s + v, 0) ?? 0;
  }
}
