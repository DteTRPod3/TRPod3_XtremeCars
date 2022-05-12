export interface ICarDetails{
    cost:string;
    specification:ISpecification;
}
interface ISpecification{
    name:string;
    fuel_type:string;
    engine_cc:string;
    torque:string;
    acceleration:string;
    top_speed:string;
    variant:[];
    image:string;
}