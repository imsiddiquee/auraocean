({
	  showToast : function(component, event, helper,message) {
    var toastEvent = $A.get("e.force:showToast");
    toastEvent.setParams({
        "type": "Success",
        "title": "Success!",
        "message": message
    });
    toastEvent.fire();
}
})