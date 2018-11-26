import { Wellbeing } from "../shared/wellbeing.model";


export class Monomeal {
    public name: string;
    public description: string;
    public imagePath: string;
    public wellbeing: Wellbeing[];

    constructor(name: string, desc: string, imgPath: string, wellbeing: Wellbeing[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imgPath;
        this.wellbeing = wellbeing;
    }
}