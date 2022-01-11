exports = async function(arg){
  var userId = context.user.id.toString();
  const userBills = context.services.get("mongodb-atlas").db("iot-saas").collection("user_bills");
  const result = await userBills.updateOne({'_id': new BSON.ObjectId(arg)}, {'$set': {'paid': true}});
  return JSON.stringify(result);
};
