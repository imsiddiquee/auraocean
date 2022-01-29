public with sharing class Calculatorctrl {
  @AuraEnabled
  public static decimal calculateValue(Decimal firstName, Decimal secondName) {
    try {
      return firstName + secondName;
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }
}
