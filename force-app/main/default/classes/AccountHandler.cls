public class AccountHandler {
    @AuraEnabled
    public static Account saveAccount(Account acc)
    {
        //System.debug('Create new Account '+con);
        
        Insert acc;
        return acc;
    }
    
    @AuraEnabled
    public static List<Account> getAccounts(String accountId)
    {
        if(!String.isBlank(accountId))
        {
            return [SELECT Id, Name, AccountNumber FROM Account where Id=:accountId order by CreatedDate Desc limit 10];
        }
        
        return [SELECT Id, Name, AccountNumber FROM Account order by CreatedDate Desc limit 10];
    }
}