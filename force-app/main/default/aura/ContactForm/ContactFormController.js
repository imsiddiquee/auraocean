({
  handleSave: function (component, event, helper) {
    var formData = component.get("v.contactObj");

    var action = component.get("c.saveContact");
    action.setParams({ con: formData });
    console.log("Save");

    action.setCallback(this, function (response) {
      var state = response.getState();
      console.log("Contact Save" + state);
      if (state === "SUCCESS") {
        helper.showToast(
          component,
          event,
          helper,
          "Contact created successfully!"
        );
      } else if (state === "ERROR") {
        var errorMessage = "Unknown error";

        var errors = response.getError();
        if (errors) {
          if (errors[0] && errors[0].message) {
            errorMessage = errors[0].message;
          }
        }

        helper.showToast(component, event, helper, errorMessage);
      }

      var returnConObj = response.getReturnValue();
      console.log("return Con Obj" + JSON.stringify(returnConObj));
    });

    $A.enqueueAction(action);

    //Get the event using registerEvent name.
    var cmpEvent = component.getEvent("componentNotifyEvent");
    //Set event attribute value
    cmpEvent.setParams({ message: "ContactSaved" });
    cmpEvent.fire();
  },

  handleCancel: function (component, event, helper) {
    component.set("v.contactObj", "{}");
  },

  handleRecordDetail: function (component, event, helper) {
    var navEvt = $A.get("e.force:navigateToSObject");
    navEvt.setParams({
      recordId: "0035g00000CkSL8AAN",
      slideDevName: "related"
    });

    navEvt.fire();
  }
});
