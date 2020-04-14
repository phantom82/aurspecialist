({    
    onFormSubmit : function(component, event, helper) {
        console.log('am here');
        var boat = event.getParam("formData");
        var searchResults = component.find("searchResults");
        if(searchResults) {
            searchResults.search(boat.boatTypeId);
        }
    }
})