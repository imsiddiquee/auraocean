({
  // doSave: function (component, event, helper) {
  //     var action = component.get("c.createContact");
  //     var contactList = component.get("v.contactList");

  //     action.setParams({ 'contObj': component.get("v.contactObject") });
  //     action.setCallback(this, function (response) {
  //         component.set('v.contactId', response.getReturnValue());
  //         //contactList.splice(0, 0, component.get('v.contactObject'));
  //     });
  //     $A.enqueueAction(action);

  // },
  doSave: function (component, event, helper) {
    var action = component.get("c.createContactObject");
    var contactList = component.get("v.contactList");

    action.setParams({ contObj: component.get("v.contactObject") });
    action.setCallback(this, function (response) {
      component.set("v.contactId", response.getReturnValue());
      contactList.splice(0, 0, component.get("v.contactObject"));
      component.set("v.contactList", contactList);
    });
    $A.enqueueAction(action);
  },

  showContacts: function (component, event, helper) {
    var action = component.get("c.retrieveContacts");
    action.setCallback(this, function (data) {
      component.set("v.contactList", data.getReturnValue());
      console.log("data::", data.getReturnValue());
    });

    $A.enqueueAction(action);
  }
});
