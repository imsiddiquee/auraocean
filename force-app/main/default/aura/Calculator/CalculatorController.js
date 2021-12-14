({
  calculate: function (component, event, helper) {
    //get value from control by id
    var fnumber = component.find("fNum").get("v.value");
    var snumber = component.find("sNum").get("v.value");

    //set value to control by id
    var result = component.find("Result");
    result.set("v.value", fnumber + snumber);
  }
});
