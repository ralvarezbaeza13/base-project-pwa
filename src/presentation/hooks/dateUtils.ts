/**
 * Añade un número específico de días a una fecha dada.
 * @param date - La fecha a la que se le añadirán los días.
 * @param days - El número de días a añadir.
 * @returns Una nueva fecha con los días añadidos.
 */
export const addDays = (date: Date, days: number): Date => {
    return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
  };
  
  /**
   * Calcula la diferencia en días entre dos fechas.
   * @param startDate - La fecha de inicio.
   * @param endDate - La fecha de fin.
   * @returns El número de días entre las dos fechas.
   */
  export const calculateDateDifference = (startDate: Date, endDate: Date): number => {
    return Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  };