export interface Usuario {
    id: string;
    nombre: string;
    email: string;
    password: string;
    token: string;
    imageUrl?: string;
}
/*CREAT EXPORACION PARA E INIICA DE SION */
export type LoginCredenciales = {
    email: string;
    password: string;
}

export type LoginRegistrar = {
    email: string;
    nombre: string;
    password: string;
}