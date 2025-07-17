export interface PprPlan {
  id: string;
  compania: string;
  portafolio: string;
  fechaInicio: Date;
  fechaFinEstimada: Date;
  estatus: 'activo' | 'pausado' | 'finalizado';
}
