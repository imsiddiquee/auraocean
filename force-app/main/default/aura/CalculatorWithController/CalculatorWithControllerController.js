({
  calculate: function (component, event, helper) {
    var fNumber = component.get("v.fNumber");
    var sNumber = component.get("v.sNumber");

    var action = component.get("c.calculateValue"); //controller method
    action.setParams({ firstName: fNumber, secondName: sNumber }); //method parameter
    action.setCallback(this, function (response) {
      //parameter result
      var state = response.getState();
      var valueFromResponse = response.getReturnValue();
      if (state === "SUCCESS") {
        component.set("v.result", response.getReturnValue());
      }
    });

    $A.enqueueAction(action);
  }
});
