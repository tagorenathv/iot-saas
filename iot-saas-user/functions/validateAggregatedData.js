exports = async function validateAggreatedData(changeEvent) {

  const fullDocument = JSON.parse(JSON.stringify(changeEvent.fullDocument));
  
  const devices = context.services.get('mongodb-atlas').db("iot-saas").collection("devices");
  var deviceDoc = await devices.findOne({ _id: new BSON.ObjectId(fullDocument["deviceId"])});
  var avg = fullDocument['avg'];
  
  if(avg >= deviceDoc['alertThresholdData']['thresholdMin'] && avg <= deviceDoc['alertThresholdData']['thresholdMax']) {
    console.log("All Good");
  } else {
    console.log("Breached. Generating Alert data");
    const alertData = context.services.get('mongodb-atlas').db("iot-saas").collection("alerts");
    alertData.insertOne({"deviceId": fullDocument["deviceId"], "value": avg, "userId": fullDocument["userId"], "timestamp": fullDocument["timestamp"]});
  }
  return true;
};
