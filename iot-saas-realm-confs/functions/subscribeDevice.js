exports = async function(arg){
  var userId = context.user.id.toString();
  const userDeviceSubscription = context.services.get("mongodb-atlas").db("iot-saas").collection("user_device_subscriptions");
  const userDeviceUsage = context.services.get("mongodb-atlas").db("iot-saas").collection("user_device_usage");

  var today = new Date();
  var monthYear = ( today.getMonth() + 1 ) + "/" + today.getFullYear();
  var todayDateString = today.toLocaleDateString("en-US");

  await userDeviceUsage.insertOne({"userId": userId, "deviceId": arg, "date": todayDateString, "monthYear": monthYear});
  await userDeviceSubscription.insertOne({"userId": userId,"deviceId": arg, "suspended": false});
  return {"message": "subscription added"};
};
