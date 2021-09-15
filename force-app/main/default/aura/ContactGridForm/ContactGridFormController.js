({
  showData: function (component, event, helper) {
    component.set("v.columns", [
      { label: "First name", fieldName: "FirstName", type: "text" },
      { label: "Last name", fieldName: "LastName", type: "text" },
      { label: "Email", fieldName: "Email", type: "text" },
      { label: "Phone", fieldName: "Phone", type: "text" },
      {
        label: "View",
        type: "button",
        initialWidth: 135,
        typeAttributes: {
          label: "View Details",
          name: "view_details",
          title: "Click to View Details"
        }
      }
    ]);

    helper.handleGetContacts(component, event, helper);
  },

  getMessage: function (component, event, helper) {
    console.log("refresh grid");
    helper.handleGetContacts(component, event, helper);
    //$A.get('e.force:refreshView').fire();
    //get method paramaters
    /*
        var params = event.getParam('arguments');
        if (params) {
            var param1 = params.childGreetingParam;
            var param2 = params.childPersonNameParam;
            alert(param1 + " " + param2);
        }
          */
  },
  handleShowDetail: function (component, event, helper) {
    var message = component.get("v.message");
    var appEvent = $A.get("e.c:ApplicationNotifyEvent");
    if (appEvent) {
      appEvent.setParams({ message: message });
      appEvent.fire();
    }
  },

  handleRowAction: function (component, event, helper) {
    var action = event.getParam("action");
    var rowData = event.getParam("row");
    switch (action.name) {
      case "view_details":
        helper.showRowDetails(rowData);
        break;
      default:
        helper.showRowDetails(rowData);
        break;
    }
  }
});
