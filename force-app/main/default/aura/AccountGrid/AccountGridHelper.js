({
  handleGetAccounts: function (component, event, helper) {
    //call server method
    var action = component.get("c.getAccounts");

    action.setCallback(this, function (response) {
      var state = response.getState();
      if (state === "SUCCESS") {
        var returnObj = response.getReturnValue();
        //console.log('return Con Obj'+JSON.stringify(returnObj));
        component.set("v.data", returnObj);
      } else {
        // Handle the 'ERROR' or 'INCOMPLETE' state
      }
    });

    $A.enqueueAction(action);
  },

  showRowDetails: function (row) {
    var message = row;
    var appEvent = $A.get("e.c:ApplicationNotifyEvent");
    if (appEvent) {
      appEvent.setParams({ message: message });
      appEvent.fire();
    }
  }
});
