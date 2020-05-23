import { Gender } from '../enums/gender.enum';
import { RoleEntity } from './role-entity';
import { SpecializationEntity } from './specialization-entity';

export class Employee {

    id: number;
    firstName: string;
    lastName:string;
    age:number;
    email: string;
    gender:Gender;
    phone: number;
    userId: number;
    password:string
    role:RoleEntity;
    specialization: SpecializationEntity;

}
