import express from "express"
import {GetHospital,Visitorregister,VisitorLogin,Contact}from '../Controllers/Visitor.js'

const routerr = express.Router();


routerr.post("/Visitor/Register",Visitorregister);
routerr.post("/Vistor/Login",VisitorLogin);
routerr.post('/Visitor/pincode', GetHospital);
routerr.post('/contact', Contact);


export default routerr;