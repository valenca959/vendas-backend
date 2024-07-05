import { CityEntity } from "../entities/city.entity";
import { ReturnStatesDto } from "src/state/dtos/returnStates.dto";

export class ReturnCityDto {
    name: string;
    state: ReturnStatesDto;
    constructor(city: CityEntity) {
        this.name = city.name;
        this.state = city.state ? new ReturnStatesDto(city.state) : undefined;
    }
}