({
    onInit : function(component) {
        var action = component.get("c.getAll");
        action.setParams ({
            boatId : component.get("v.boat.Id")
        });
        action.setCallback(this, function(a) {
            var result = action.getReturnValue();
            console.log(JSON.stringify(result));
            if(result) {
                component.set("v.boatReviews", result);
            }else {
                console.log(result.error);
            }
        });
        $A.enqueueAction(action);
    }
})
