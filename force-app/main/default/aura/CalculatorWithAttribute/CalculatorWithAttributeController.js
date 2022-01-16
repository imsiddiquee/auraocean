({
  calculate: function (component, event, helper) {
    var fnumber = component.get("v.fNumber");
    var snumber = component.get("v.sNumber");

    component.set("v.result", fnumber + snumber);
  }
});
