import  express  from "express";
import UserController from "../controllers/UserController";
import { jwtCheck,jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";
const router=express.Router();
router.get("/",jwtCheck,jwtParse,UserController.getUser)
router.post("/",jwtCheck,UserController.createUser)
router.put(
    "/",
    jwtCheck,
    jwtParse,
    validateMyUserRequest,
    UserController.updateUser
  );
export default router