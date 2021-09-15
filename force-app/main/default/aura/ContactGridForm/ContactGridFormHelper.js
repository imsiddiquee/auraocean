({
  handleGetContacts: function (component, event, helper) {
    var action = component.get("c.getContacts");

    action.setCallback(this, function (response) {
      var state = response.getState();
      if (state === "SUCCESS") {
        var returnConObj = response.getReturnValue();
        //console.log('return Con Obj'+JSON.stringify(returnConObj));
        component.set("v.data", returnConObj);
      } else {
        // Handle the 'ERROR' or 'INCOMPLETE' state
      }
    });

    $A.enqueueAction(action);
  },

  showRowDetails: function (row) {
    // eslint-disable-next-line no-alert
    //alert("Showing opportunity " + row.opportunityName + " closing on " + row.closeDate);
    //
    var message = row.LastName;
    var appEvent = $A.get("e.c:ApplicationNotifyEvent");
    if (appEvent) {
      appEvent.setParams({ message: message });
      appEvent.fire();
    }
  }
});
