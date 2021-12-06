export interface IIndicator{
    id: number;
    unitId: number;
    unitIndicator: IUnitDtoIndicator;
    unitIndicatorId: number;
}

export interface IUnitDtoIndicator {
    id: number;
    name: string;
    shortName: string;
    type: number;
}

export interface IUnitIndicator {
    id: number;
    name: string;
    shortName: string;
    type: number;
    potential: number;
    du: number;
}
