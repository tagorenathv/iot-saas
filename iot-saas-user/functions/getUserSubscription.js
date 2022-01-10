exports = async function(arg){
  var userId = context.user.id.toString();
    
    const userDeviceSubscription = context.services.get("mongodb-atlas").db("iot-saas").collection("user_device_subscriptions");

    var result = await userDeviceSubscription.find({"userId": userId}).toArray();
    return JSON.stringify(result);
};
