({
	onSearch : function(component, event) {
        var btype = component.get("v.boatTypeId");
        if(btype == 'All Types') {
            btype = '';
        }
        var action = component.get("c.getBoats");
        action.setParams({
            boatTypeId: btype
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                if(response.getReturnValue().length > 0) {
                    component.set("v.boats", response.getReturnValue());
                }else {
                    component.set("v.boats", undefined);
                }
            } else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);   
    }
})