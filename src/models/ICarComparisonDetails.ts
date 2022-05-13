export interface ICarComparisonDetails{
    cost:string;
    specifications:ISpecification;
    exterior:IExterior;
    interior:IInterior;
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
interface IExterior{
    color:string;
    image:string;
    length:string;
    width:string;
}
interface IInterior{
    color:string;
    image1:string;
    image2:string;
    text:[];
}