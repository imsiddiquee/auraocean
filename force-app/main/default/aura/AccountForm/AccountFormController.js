({
  handleSave: function (component, event, helper) {
    //get form data
    var formData = component.get("v.accountObj");
    console.log(JSON.stringify("formData:: " + formData.Name));

    //call server event
    var action = component.get("c.saveAccount");
    action.setParams({ acc: formData });
    console.log("Save");

    //get server response
    action.setCallback(this, function (response) {
      var state = response.getState();
      console.log("Account Save" + state);
      if (state === "SUCCESS") {
        helper.showToast(
          component,
          event,
          helper,
          formData.Name + " Account created successfully!"
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

    //Component event register with value
    //Get the event using registerEvent name.
    var cmpEvent = component.getEvent("componentNotifyEvent");
    //Set event attribute value
    cmpEvent.setParams({ message: "AccountSaved" });
    cmpEvent.fire();
  },
  handleCancel: function (component, event, helper) {
    component.set("v.accountObj", "{}");
  }
});
