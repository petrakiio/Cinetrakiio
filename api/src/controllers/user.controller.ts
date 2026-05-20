import {Get, Post, Body, Controller} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserCadastro,UserLogin } from 'src/models/userModel';

@Controller('user')
export class UserController{
    constructor(private userService: UserService){}
    @Post('signup')
    async Signup(user:UserCadastro){
        return this.userService.Signup(user);
    }
    @Post('signin')
    async Signin(user:UserLogin){
        return this.userService.Signin(user);
    }
}