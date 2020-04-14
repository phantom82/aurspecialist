public class ctlBoatSearchForm {
    @AuraEnabled
    public static Map<String, String> getTypes() {
		Map<String, String> typeMap = new Map<String, String>();        
        for (BoatType__c bType : [Select Id, Name from BoatType__c]){
        	typeMap.put(bType.Id, bType.Name); 
        }
        return typeMap;
    }
}