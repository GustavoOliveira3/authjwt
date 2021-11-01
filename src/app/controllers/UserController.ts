import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';

class UserController{
    async index(req: Request, res: Response){
        return res.send({ userId: req.userId });
    }  

    async store(req: Request, res: Response){
        const repository = getRepository(User);
        
        const { email, password } = req.body;

        const userExists = await repository.findOne({ where: { email } });

        if(userExists){
            res.sendStatus(409);
        }else{
            const user = repository.create({ email, password });
            await repository.save(user);
            return res.json(user);
        }
    }
}

export default new UserController();