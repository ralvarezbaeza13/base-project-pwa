import { ActDomainM } from '../model/ActDomainM';

export interface CotizacionRepository {
  validarNochesMinimas(): Promise<Array<ActDomainM> | null>;
  validarNochesMaximas(): Promise<Array<ActDomainM> | null>;
  calcularCantidadDeNoches(): Promise<Array<ActDomainM> | null>;
  validarNoMaximoDeCuartos(): Promise<Array<ActDomainM> | null>;
}