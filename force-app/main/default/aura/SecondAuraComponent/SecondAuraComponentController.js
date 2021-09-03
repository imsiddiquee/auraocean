({
  handleClick: function (component, event, helper) {
    var formData = component.get("v.examObj");
    console.log(JSON.stringify(formData));
  }
});
