import { Role } from "../top-bar/state/user-state";

export interface user {
  name: string;
  image: string;
  password: string;
  email: string;
  road: string;
  house: string;
  post: string;
  role: Role;
  active:boolean;
}

export const userInfo: user[] = [
  {
    name: 'farhad',
    image: '',
    email: 'farhadyan@gmail.com',
    password: 'a',
    road: 'vest',
    house: '11',
    post: '2700',
    role:'user',
    active:true
  },
  {
    name: 'ayan',
    image: '',
    email: 'farhadyan@gmail.com',
    password: 'b',
    road: 'øst',
    house: '12',
    post: '2700',
    role:'user',
    active:true

  },
  {
    name: 'avyaan',
    image: '',
    email: 'avy.aya1508@gmail.com',
    password: 'c',
    road: 'nord',
    house: '12',
    post: '2700',
    role:'user',
    active:false

  },
  {
    name: 'Ahmed',
    image: '',
    email: 'farhadyan@gmail.com',
    password: 'a',
    road: 'vest',
    house: '11',
    post: '2700',
    role:'admin',
    active:true
  }

];
