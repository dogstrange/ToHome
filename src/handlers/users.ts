import axios from 'axios';
import { NextFunction, Request, Response } from 'express';
import { User } from '../types/user';
import { transformUsers } from '../tools/transformation';

export async function getUsers(
    req:Request,
    res: Response, 
    next: NextFunction)
    :Promise<any> {
    try{
        //ให้ type เป็น User ที่เราสร้าง
        // เพื่อให้หาข้อมูลได้ง่าย
        const response = await axios.get<{ users: User[] }>('https://dummyjson.com/users')
        // pass users array
        const out = transformUsers(response.data.users)
        return res.status(200).json({out})
    }catch(error){
        console.log(error)
        return res.status(500).json({error: "server error"})
    }
    
}