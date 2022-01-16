public with sharing class CreateContactCls {
  @AuraEnabled
  public static string createContactObject(Contact contObj) {
    try {
      System.debug('contObj::' + contObj);
      //insert contObj;
      return contObj.Id;
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }

  @AuraEnabled
  public static List<Contact> retrieveContacts() {
    try {
      return [SELECT Id, FirstName, LastName, Email FROM Contact LIMIT 10];
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }

  @AuraEnabled
  public static Map<String, String> getValuesForCombo() {
    try {
      Map<String, String> comboMap = new Map<String, String>();
      for (Contact conObj : [SELECT Id, Name FROM Contact LIMIT 10]) {
        comboMap.put(conObj.Id, conObj.Name);
      }

      System.debug('comboMap::' + comboMap);
      return comboMap;
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }
}
