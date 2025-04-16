import { Router } from "express";
import { getUsers } from "../handlers/users";

const router = Router();

router.get('/info', getUsers);




export default router