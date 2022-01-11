exports = async function(arg){
  var userId = context.user.id.toString();
  const userBills = context.services.get("mongodb-atlas").db("iot-saas").collection("user_bills");

  var result = await userBills.find({"userId": userId}).toArray();
  
  return JSON.stringify(result);
  
};