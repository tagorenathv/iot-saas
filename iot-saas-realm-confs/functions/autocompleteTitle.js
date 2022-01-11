exports = async function(arg){
    const devices = context.services.get("mongodb-atlas").db("iot-saas").collection("devices");
    
    var result = await devices.aggregate([{
    $search: {
      "autocomplete": {
        "path": "title",
        "query": arg,
       "tokenOrder": "any",
        "fuzzy": {
          "maxEdits": 1,
          "prefixLength": 1,
          "maxExpansions": 256
        }
      }
    }
  }]).toArray();
  
  return JSON.stringify(result);
};
