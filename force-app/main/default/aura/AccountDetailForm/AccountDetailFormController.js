({
  handleApplicationEvent: function (component, event, helper) {
    var messageData = event.getParam("message");
    console.log("application event working." + messageData);
    component.set("v.message", messageData);
  }
});
