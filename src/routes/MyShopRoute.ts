import express from 'express';
const router = express.Router();
import multer from 'multer';
import ShopController from '../controllers/ShopController';
const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits:{
        fileSize: 5*1024*1024,
    },
});
router.post("/",upload.single("imageFile"),ShopController.createMyShop);
export default router;