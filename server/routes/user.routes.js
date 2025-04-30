import express from "express";
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user.js";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";
import { uploadProfilePicture } from "../controllers/user.js"
import multer from "multer";

const router = express.Router()


const storage = multer.memoryStorage(); // or use diskStorage for file system
const upload = multer({ storage })


router.post("/:id/", upload.single('image'), uploadProfilePicture)

router.get("/", verifyAdmin, getAllUsers)
router.get("/:id", verifyUser, getUser)
router.patch("/:id", verifyUser, updateUser)
router.delete("/:id", verifyUser, deleteUser)

export default router