export interface SuccessRegisterResponse{
    message: string,
    user:UserResponse ,
    token:string 
}
export interface FailedRegisterResponse{
    statusMsg: string,
    message: string
}
export interface UserResponse{
 name:string ,
 email: string,
role:string
}