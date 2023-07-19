export  interface LoginCredentials { username:string, password: string}

export interface IsErrorResponse{
  response: any;message:string; error?: string;
}