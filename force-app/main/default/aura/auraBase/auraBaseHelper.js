({
  /*
   * This method will call the server side action and will execute callback method
   * it will also show error if generated any
   * @param component (required) - Calling component
   * @param method (required) - Server side methos name
   * @param callback (required) - Callback function to be executed on server response
   * @param params (optional) - parameter values to pass to server
   * @param setStorable(optional) - if true, action response will be stored in cache
   * */
  callServer: function (component, method, callback, params, setStorable) {
    var action = component.get(method);

    //Set params if any
    if (params) {
      action.setParams(params);
    }

    if (setStorable) {
      actions.setStorable();
    }

    action.setCallback(this, function (response) {
      var state = response.getState();
      if (state === "SUCCESS") {
        // pass returned value to callback function
        callback.call(this, response.getReturnValue());
      } else if (state === "ERROR") {
        // generic error handler
        var errors = response.getError();
        if (errors) {
          console.log("Errors", errors);
          this.showToast(component, event, helper, {
            title: "ERROR IN SERVER CALL",
            type: "error",
            message: errors
          });
          if (errors[0] && errors[0].message) {
            throw new Error("Error" + errors[0].message);
          }
        } else {
          throw new Error("Unknown Error");
        }
      }
    });

    $A.enqueueAction(action);
  },

  /*
   * This function displays toast based on the parameter values passed to it
   * */
  showToast: function (component, event, helper, params) {
    var toastEvent = $A.get("e.force:showToast");
    if (toastEvent) {
      if (!params) {
        toastEvent.setParams({
          title: "TOAST ERROR!",
          type: "error",
          message: "Toast Param not defined"
        });
        toastEvent.fire();
      } else {
        toastEvent.setParams(params);
        toastEvent.fire();
      }
    } else {
      alert(params.message);
    }
  },

  /*
   * Show print log
   * */
  printLog: function (message) {
    console.log(message);
  }
});
