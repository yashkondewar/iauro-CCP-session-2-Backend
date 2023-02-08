const dbConnect = require("./mongodb");
const deleteData = async () => {
  let data = await dbConnect();
  let result = await data.deleteMany({ name: "Moto 40s" });
  console.warn(data);
  if (result.acknowledged) {
    console.log("Record Deleted");
  }
};
deleteData();
