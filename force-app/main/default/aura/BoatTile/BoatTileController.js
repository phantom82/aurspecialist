({
	onBoatClick : function(component, event, helper) {
        component.set("v.selected", true);
        var compEvent = component.getEvent("boatselected");
        compEvent.setParams({
            "boatId" : event.getSource().get("v.name"),
        });
        compEvent.fire();
        
        var appEvent = $A.get("e.c:boatselected");
        appEvent.setParams({
            "boat" : component.get("v.boat")
        });
        appEvent.fire();

        var boat = component.get("v.boat");
        var appEvent2 = $A.get("e.c:PlotMapMarker");
        appEvent2.setParams({
            "sObjectId" : boat.Id,
            "lat" : boat.Geolocation__latitude__s,
            "long" : boat.Geolocation__longitude__s,
            "label" : boat.Name 
       });
        appEvent2.fire();
	}
})