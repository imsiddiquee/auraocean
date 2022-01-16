public without sharing class ASCommodityDestinationTriggerHelper {
  public static void updateCommodity(List<AS_Commodity_Destination__c> conList) {
    Set<Id> oppIds = new Set<Id>();
    Set<Id> quantity = new Set<Id>();
    Map<Id, Decimal> totalQuantityMap = new Map<Id, Decimal>();
    List<Available_Stock__c> oppToBeUpdated = new List<Available_Stock__c>();
    Set<String> grade = new Set<String>();

    Map<String, String> contractSiteSpreadMap = new Map<String, String>();
    Map<String, List<String>> contractOppotunityMap = new Map<String, List<String>>();

    for (AS_Commodity_Destination__c con : conList) {
      oppIds.add(con.Available_Stock__c);
    }

    for (AS_Commodity_Destination__c contr : [
      SELECT
        Id,
        Available_Stock__c,
        Quantity__c,
        Grade_Commodity_Destination__c,
        Spreads__c,
        Price_Offered__c,
        Price_Target__c
      FROM AS_Commodity_Destination__c
      WHERE Available_Stock__c IN :oppIds
    ]) {
      if (!totalQuantityMap.containsKey(contr.Available_Stock__c)) {
        totalQuantityMap.put(contr.Available_Stock__c, 0.00);
      }

      totalQuantityMap.put(
        contr.Available_Stock__c,
        totalQuantityMap.get(contr.Available_Stock__c) + contr.Quantity__c
      );

      contractSiteSpreadMap.put(contr.Id, contr.Grade_Commodity_Destination__c + ' - ' + contr.Spreads__c);

      if (!contractOppotunityMap.containsKey(contr.Available_Stock__c)) {
        contractOppotunityMap.put(contr.Available_Stock__c, new List<String>());
      }

      List<String> tempList = new List<String>();

      tempList = contractOppotunityMap.get(contr.Available_Stock__c);

      tempList.add(contr.Id);

      contractOppotunityMap.put(contr.Available_Stock__c, tempList);

      // grade = contr.Grade_Commodity_Destination__c + ' - ' + contr.Spreads__c;
      // totalQuantity += contr.Quantity__c;
    }

    for (Id oppId : totalQuantityMap.keySet()) {
      String gradeSpreadStr = '';

      for (String str : contractOppotunityMap.get(oppId)) {
        gradeSpreadStr += contractSiteSpreadMap.get(str) + '\n';
      }

      oppToBeUpdated.add(
        new Available_Stock__c(
          Id = oppId,
          Contract_Quantity__c = totalQuantityMap.get(oppId),
          Grade_Spreads__c = gradeSpreadStr
        )
      );
    }

    update oppToBeUpdated;

    // System.debug(quantity);

    // Set<Opportunity__c> oppIds = new Set<Opportunity__c>();

    // for(Contact con : [Select Id, AccountId From Contact Where Id IN :conIds]){
    //     accountIds.add(con.AccountId);
    // }
  }
}
