exports = async function() {
    const database = context.services.get("mongodb-atlas").db("iot-saas");
    const devices = database.collection("devices");
    const userDeviceUsage = database.collection("user_device_usage");
    const userBills = database.collection("user_bills");

    var yesterday = new Date(Date.now() - 86400000);
    var prevMonthYear = (yesterday.getMonth() + 1) + "/" + yesterday.getFullYear();
    var pipeline = [{
        '$match': {
            'monthYear': prevMonthYear
        }
    }, {
        '$group': {
            '_id': {
                'userId': '$userId',
                'deviceId': '$deviceId'
            },
            'days': {
                '$sum': 1
            },
            userId: {
                $first: '$userId'
            },
            deviceId: {
                $first: '$deviceId'
            },
        }
    }, {
        $unset: ["_id"]
    }];

    var result = await userDeviceUsage.aggregate(pipeline).toArray();
    
    if (result.length > 0) {
      
        var deviceData = await devices.find({}, {"pricePerDay":1}).toArray();
        var devicePriceLookup = {};
        for(const deviceRecord of deviceData) {
          devicePriceLookup[deviceRecord['_id'].toString()] = deviceRecord['pricePerDay'];
        }
        
        var userDevicesMap = new Map();
        for(const record of result) {
          var tempUserId = record['userId'];
         
          if(userDevicesMap.has(tempUserId)) {
            userDevicesMap.set(tempUserId, userDevicesMap.get(tempUserId) + (devicePriceLookup[record['deviceId']] * record['days']));
          }else {
            userDevicesMap.set(tempUserId, (devicePriceLookup[record['deviceId']] * record['days']));
          }
        }
        
        var userBilRecords = [];
        for (var [key, value] of userDevicesMap.entries()) {
            userBilRecords.push({"userId": key, "total": value, "monthYear": prevMonthYear, "generatedAt": new Date(), "paid": false});
        }
        userBills.insertMany(userBilRecords);
        console.log("userBilRecords: " + userBilRecords.length);
    } else {
        console.log("Empty results.");
    }

    return true;
};