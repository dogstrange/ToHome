"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = getUsers;
const axios_1 = __importDefault(require("axios"));
const transformation_1 = require("../tools/transformation");
function getUsers(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //ให้ type เป็น User ที่เราสร้าง
            // เพื่อให้หาข้อมูลได้ง่าย
            const response = yield axios_1.default.get('https://dummyjson.com/users');
            // pass users array
            const out = (0, transformation_1.transformUsers)(response.data.users);
            return res.status(200).json({ out });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ error: "server error" });
        }
    });
}
