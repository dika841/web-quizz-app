export type TLoginRequest = {
    id:string;
    username: string;
    password: string;
    isAuthenticated : boolean;
}

export type TRegisterRequest = {
    id:string;
    email: string;
    username: string;
    password: string;
};