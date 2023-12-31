import express from "express"
const router = express.Router();

import { signin, signup } from "../controllers/user.js"

router.route("/signin").post(signin);
router.route("/signup").post(signup);

export default router;
