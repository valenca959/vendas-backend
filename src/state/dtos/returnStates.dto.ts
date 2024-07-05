import { StateEntity } from "../entities/state.entity";

export class ReturnStatesDto {
    name: string;

    constructor(state: StateEntity) {
        this.name = state.name;
    }
}