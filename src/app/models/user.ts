export enum UserRole{
    USR = 'usr',
    ADM = 'adm'
}

export interface User{
    id: number;
    name: string;
    lname: string;
    role: UserRole;
}