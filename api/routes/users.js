import express from "express";
const router = express.Router();


import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
import { verifyToken,verifyUser,verifyAdmin } from "../utils/verifyToken.js";


router.get("/checkauthentication", verifyToken, (req, res, next) => { 
    res.send("hello user you are logged in")
})

router.get("/checkuser/:id", verifyUser, (req, res, next) => { 
    res.send("hello user ,you are logged in and you can delete your account")
})


router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => { 
    res.send("hello admin ,you are logged in and you can delete all accounts")
})

// update
router.put("/:id",verifyUser, updateUser)

//  delete
router.delete("/:id", verifyUser,deleteUser)


//   get 
router.get("/:id", verifyUser,getUser)
//  get all
router.get("/", verifyAdmin,getUsers)


export default router;