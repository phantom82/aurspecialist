public class BoatSearchResults {
	@AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId) {
		List<Boat__c> boatList = new List<Boat__c>();    
        if(boatTypeId == '') {
            boatList = [SELECT Id, Name, BoatType__c, Price__c, Year_Built__c, Length__c, Contact__c, Contact__r.Name, Picture__c FROM Boat__c];
        }else {
            boatList = [SELECT Id, Name, BoatType__c, Price__c, Year_Built__c, Length__c, Contact__c, Contact__r.Name, Picture__c FROM Boat__c WHERE BoatType__c = :boatTypeId];
        }
        return boatList;
    }
}