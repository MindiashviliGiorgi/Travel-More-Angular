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
export interface UserHotel {
  name : string;
  location : string;
  stars : string;
  amount : string;
  image : string;
}