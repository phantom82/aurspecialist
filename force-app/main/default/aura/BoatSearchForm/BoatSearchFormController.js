({
	clickNew : function(component, event, helper) {
		var createRecordEvent = $A.get("e.force:createRecord");
        var boatType = component.get("v.selectedType");
        if(boatType != "All Types") {
            createRecordEvent.setParams({
                "entityApiName": "Boat__c",
                "defaultFieldValues": {
                    'BoatType__c': boatType
                }
            });
        }else {
            createRecordEvent.setParams({
                "entityApiName": "Boat__c",
            });
        }
        createRecordEvent.fire();
	},
    
    doInit : function (component, event, hepler){
        var isEnabled = $A.get("e.force:createRecord");
        if(isEnabled) {
            component.set("v.showNewButton", true);
        }else {
            component.set("v.showNewButton", false);
        }
        var action = component.get("c.getTypes");
        action.setCallback(this, function(a) {
            var custs = [];
            var result = a.getReturnValue();
            for(var key in result) {
            	custs.push({value:result[key], key:key});
            }
            component.set("v.boatTypes", custs);
        });
        $A.enqueueAction(action);
    },
    
    onFormSubmit : function(component, event, hepler) {
        var compEvent = component.getEvent("formsubmit");
        compEvent.setParams({
            "formData": {"boatTypeId": component.get("v.selectedType")}
        });
        compEvent.fire();
        console.log('fired');
    }
})