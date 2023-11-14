import { json, http } from "@blockless/sdk";

/**
 * Setup an HTTP server to return EVM call data
 * with call data ABIs and values
 *
 */
http.HttpComponent.serve((req: http.Request) => {
  // Create the call data object
  const obj = new json.JSON.Obj();
  const callDataObj = new json.JSON.Obj();

  // Set ABIs
  callDataObj.set("abi", ["uint256"]);

  // Set Values
  const valuesArr = new json.JSON.Arr();
  valuesArr.push(new json.JSON.Integer(100));
  callDataObj.set("values", valuesArr);

  // Commit the call data to the HTTP response
  obj.set("callData", callDataObj);

  return new http.Response(obj.stringify())
    .header("Content-Type", "application/json")
    .status(200);
});
