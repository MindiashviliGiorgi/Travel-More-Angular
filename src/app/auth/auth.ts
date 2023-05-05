export interface LoginForm {
  email : string;
  password : string;
}
export interface RegisterForm { 
  name : string;
  email : string;
  password : string;
  confirm_password : string;
}
export interface HotelForm {
  name : string;
  adress : string;
  image : string;
  payment : string;
  city : string;
  stars : number;
  info : string;
  id?: string;
}