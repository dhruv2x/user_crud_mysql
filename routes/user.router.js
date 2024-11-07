const router = require("express").Router();
const {
    createUser,
    fetchUser,
    fetchUserbyEmail,
    updateUser,
    deleteUser,
  } = require("../controller/user.controller");
router.post("/", createUser);
router.get("/", fetchUser);
router.get("/:email", fetchUserbyEmail);
router.patch("/", updateUser);
router.delete("/", deleteUser);
module.exports = router;