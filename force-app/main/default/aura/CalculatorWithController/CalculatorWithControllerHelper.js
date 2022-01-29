({
  getCarType: function (component, helper) {
    /*
     * Below line of code uses inheritance to
     * call server side controller from
     * base component's helper method
     * */

    var fNumber = component.get("v.fNumber");
    var sNumber = component.get("v.sNumber");

    console.log("fNumber", fNumber);
    console.log("sNumber", sNumber);

    helper.callServer(
      component,
      "c.calculateValue",
      function (response) {
        component.set("v.result", response);
      },
      { firstName: fNumber, secondName: sNumber }
    );
  }
});
