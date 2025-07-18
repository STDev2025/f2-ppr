export interface Aportacion {
  anio: number;
  mensualidades: number[]; // [enero, febrero, ..., diciembre]
  aporteTotalAnual?: number;
  ingresoAnualEstimado?: number;
}
