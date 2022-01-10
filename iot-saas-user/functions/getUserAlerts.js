exports = async function(arg){
  var userId = context.user.id.toString();
  const alerts = context.services.get("mongodb-atlas").db("iot-saas").collection("alerts");
  
  var result = await alerts.find({"userId": userId}).toArray();
    
  return JSON.stringify(result);
};
