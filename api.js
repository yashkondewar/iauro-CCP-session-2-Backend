const dbConnect = require("./mongodb");
const mongodb = require("mongodb");
const express = require("express");
const app = express();
app.use(express.json());
app.get("/", async (req, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
  resp.send(data);
});
app.post("/", async (req, resp) => {
  // console.log(req.body)
  let data = await dbConnect();
  let result = data.insert(req.body);
  resp.send(result);
});
app.put("/:name", async (req, resp) => {
  let data = await dbConnect();
  let result = data.updateOne({ name: req.params.name }, { $set: req.body });
  console.log(req.body);
  resp.send({ result: "updated" });
});
app.delete("/:id", async (req, resp) => {
  console.log(req.params.id);
  const data = await dbConnect();
  const result = data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
  resp.send(result);
  resp.send("done");
});
app.listen(5000);
