import express from "express";
import { login, logout, register, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router =  express.Router();
router.route("/register").post(register);
router.route("/Login").post(login);
router.route("/Logout").get(logout);
router.route("/profile/update").post(isAuthenticated,updateProfile);

export default router;
