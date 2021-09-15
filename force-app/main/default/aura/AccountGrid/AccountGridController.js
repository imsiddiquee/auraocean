({
  showData: function (component, event, helper) {
    component.set("v.columns", [
      { label: "Account Name", fieldName: "Name", type: "text" },
      { label: "Account Number", fieldName: "AccountNumber", type: "text" },
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

    helper.handleGetAccounts(component, event, helper);
  },

  // aura method
  refreshGrid: function (component, event, helper) {
    console.log("refresh grid");
    helper.handleGetAccounts(component, event, helper);
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
