({
  handleApplicationEvent: function (component, event, helper) {
    var temp = event.getParam("message");
    console.log("application event working." + temp);
    component.set("v.message", temp);
  }
});
