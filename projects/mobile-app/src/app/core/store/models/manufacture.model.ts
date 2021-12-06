import {IUnit} from './unit.model';

export interface IManufacture {
    id: number;
    name: string;
    units: IUnit[];
}
