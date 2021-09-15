public class ContactHandler {
    
    @AuraEnabled
    public static Contact saveContact(Contact con)
    {
        System.debug('Create new contact '+con);
        
        Insert con;
        return con;
    }
    
    @AuraEnabled
    public static List<Contact> getContacts(String carTypeId)
    {
        if(!String.isBlank(carTypeId))
        {
            return [SELECT Id,Name,LastName,FirstName,Email,Phone from Contact order by CreatedDate Desc limit 10];
        }
        
        return [SELECT Id,Name,LastName,FirstName,Email,Phone from Contact  order by CreatedDate Desc limit 10];
    }

}