const router = require("express").Router();
const { checkToken } = require("../auth/token_validation");
const {
    createUser,
    fetchUser,
    fetchUserbyEmail,
    updateUser,
    deleteUser,
    login,
  } = require("../controller/user.controller");
router.post("/", createUser);
router.post("/login", login);
router.get("/",checkToken, fetchUser);
router.get("/:email", checkToken,fetchUserbyEmail);
router.patch("/",checkToken, updateUser);
router.delete("/",checkToken, deleteUser);
module.exports = router;