exports = async function() {
  const database = context.services.get("mongodb-atlas").db("iot-saas");
  const userDeviceSubscriptions = database.collection("user_device_subscriptions");
  const userDeviceUsage = database.collection("user_device_usage");
  
  var result = await userDeviceSubscriptions.find({"suspended": false}, {"userId": 1, "deviceId": 1}).toArray();
  var today = new Date();
  var monthYear = ( today.getMonth() + 1 ) + "/" + today.getFullYear();
  var todayDateString = today.toLocaleDateString("en-US");

  var userDeviceUsageRecords = [];
  for(const record of result) {
    userDeviceUsageRecords.push({"userId": record['userId'], "deviceId": record['deviceId'], "date": todayDateString, "monthYear": monthYear});
  }
  
  userDeviceUsage.insertMany(userDeviceUsageRecords);
  console.log("userDeviceUsageRecords size: " + userDeviceUsageRecords.length);
  return true;
};
