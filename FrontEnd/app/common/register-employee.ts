import { Specialization } from '../enums/specialization.enum';
import { Role } from '../enums/role.enum';
import { Gender } from '../enums/gender.enum';

export class RegisterEmployee {

    id: number;
    firstName: string;
    lastName:string;
    age:number;
    email: string;
    gender:Gender;
    phone: number;
    role:Role;
    specialization: Specialization;

}
