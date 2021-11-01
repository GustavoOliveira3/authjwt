import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';
import jwt from 'jsonwebtoken';

class AuthController{
    async authenticate(req: Request, res: Response){
        const repository = getRepository(User);
        const { email, password } = req.body;

        const user = await repository.findOne({ where: { email } });

        if(!user){
            return res.send(401);
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if(!isValidPassword){
            return res.sendStatus(401);
        }
        else{
            delete user.password;
            const token = jwt.sign({ id: user.id }, '', { expiresIn: '1d' }); // this empty string is where you will put your secret key
            return res.json({ user, token });
        }
    }
}

export default new AuthController();