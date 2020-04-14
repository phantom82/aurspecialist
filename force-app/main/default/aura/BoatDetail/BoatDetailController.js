({
	onFullDetails : function(component, event, helper) {
		var navEvt = $A.get("e.force:navigateToSObject");
        console.log(component.get("v.boat.Id"));
        navEvt.setParams({
            "recordId": component.get("v.boat.Id"),
        });
        navEvt.fire();		
	},
    
    doinit : function(component, event, hepler) {
        var isEnabled = $A.get("e.force:navigateToSObject");
        if(isEnabled) {
            component.set("v.showButton", true);
        }else {
            component.set("v.showButton", false);
        }
    }
})