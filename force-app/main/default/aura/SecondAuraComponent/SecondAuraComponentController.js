({
  handleClick: function (component, event, helper) {
    var formData = component.get("v.contactObj");
    //console.log(JSON.stringify(formData));
    console.log(JSON.stringify(formData));

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
  }
});
