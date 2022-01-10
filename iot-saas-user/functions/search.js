exports = async function(arg){
    
  const devices = context.services.get("mongodb-atlas").db("iot-saas").collection("devices");
    
  var result = await devices.find({$text: {$search: arg}}).toArray();
  return JSON.stringify(result);
};
