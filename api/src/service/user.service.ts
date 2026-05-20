import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService{
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService){}
    async Signup(user){
       try{
         const inset = await this.prisma.user.create({
            data:{
                name: user.nome,
                email: user.email,
                password: user.senha,
                idade: user.dataNascimento
            }
            });
            return inset;
       }catch(error){
            console.log('Error creating user:', error);
            throw new Error('Failed to create user');
       }
    }
    async Signin(user){
        try{
            const found = await this.prisma.user.findUnique({
                where:{
                    email: user.email
                }
            });
            if(!found){
                throw new Error('User not found');
            }
            if(found.password !== user.senha){
                throw new Error('Invalid password');
            }
            const token = this.jwt.sign({id: found.id, email: found.email});
            return {token};
        }catch(error){
            console.log('Error signing in:', error);
            throw new Error('Failed to sign in');
        }
    }
}