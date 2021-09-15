/*
  ContactContainer
      ContactForm
          ComponentNotifyEvent==>child to parent
      ContactGridForm
          aura mothod==>childMessageMethod==>parent to child
      ContactDetail
          ApplicationNotifyEvent ==>component to component
*/

({
  myAction: function (component, event, helper) {},
  handleComponentEvent: function (component, event) {
    //Get the event message attribute
    var message = event.getParam("message");
    //Set the handler attributes based on event data

    var childComponent = component.find("cmpContactGridForm");
    var message = childComponent.childMessageMethod();
  },
  callAuraMethod: function (component, event, helper) {
    //Call Child aura method
    var childComponent = component.find("cmpContactGridForm");
    var message = childComponent.childMessageMethod();
  }
});
