const { getAllUsers, getOneUser, createUser, updateUser, deleteUser } = require("../controller/users.controller");

const router = require(`express`).Router();


//users routes 
router.get("/", getAllUsers)
router.get("/:id", getOneUser)

//users routes -- Create
router.post("/", createUser)

//users routes -- Update
router.put("/:id", updateUser)

//users routes -- Update
router.delete("/:id", deleteUser)

// Users route


module.exports = router;