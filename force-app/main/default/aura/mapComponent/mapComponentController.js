({
  init: function (cmp, event, helper) {
    cmp.set("v.mapMarkers", [
      {
        location: {
          Latitude: "37.790197",
          Longitude: "-122.396879"
        },
        title: "Western Telecommunications Corp",
        description: "Western Telecommunications Corp",
        icon: "standard:account"
      }
    ]);

    cmp.set("v.center", {
      location: {
        City: "Denver"
      }
    });

    cmp.set("v.zoomLevel", 4);
    cmp.set("v.markersTitle", "Salesforce locations in United States");
    cmp.set("v.showFooter", true);
  }
});
