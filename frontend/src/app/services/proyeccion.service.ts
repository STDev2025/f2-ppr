import { Injectable, signal } from '@angular/core';
import { Proyeccion } from '../models/proyeccion.model';

@Injectable({ providedIn: 'root' })
export class ProyeccionService {
  private proyecciones = signal<Proyeccion[]>([]);

  generarProyeccion(data: Proyeccion) {
    this.proyecciones.set([...this.proyecciones(), data]);
  }

  simularEscenario(proy: Proyeccion, tasa: number) {
    const valorFinal = proy.valorInicial * Math.pow(1 + tasa, 1);
    return { ...proy, valorFinal };
  }
}
