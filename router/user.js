const User = require("../module/module");
const { Router } = require("express");
const router = Router();

router.get("/", async (req, res) => {
  const users = await User.find();
   res.status(200)
  await res.send(users)
});

router.post("/", async (req, res) => {
  const { name, age } = req.body;
  await User.create({ name, age });
   res.status(201)
  res.send("Malumot saqlandi!!")
});

router.delete("/:id", async (req, res) => {
  const user = req.params.id
  await User.findByIdAndDelete(user);
   res.status(202)
  res.send("Ma'lumot o'chirildi")
})

router.put("/", async (req, res) => {
  const { name, age, id } = req.body;
  await User.findByIdAndUpdate(id, { name, age })
   res.status(201)
  console.log("o'zgartirildi");
});

module.exports = router;
