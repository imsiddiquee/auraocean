({
  handleComponentEvent: function (component, event, helper) {
    //get component event attribute value
    var message = event.getParam("message");
    console.log("account container " + message);

    //call aura method.this is the component method not the com-controller method.
    var childComponent = component.find("cmpAccountGrid");
    var message = childComponent.auraRefreshGrid();
  }
});
