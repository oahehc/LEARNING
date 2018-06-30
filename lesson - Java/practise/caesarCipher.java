
/**
 * Write a description of caesarCipher here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
//import edu.duke.*;

public class caesarCipher {
    public String create(String s, int key){
        //create mapping string
        String original = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        String encryption = original.substring(key) + original.substring(0,key);
        System.out.println(original);
        System.out.println(encryption);
        
        //data encryption
        String result = "";
        String sUpper = s.toUpperCase();
        String encryptionLower = encryption.toLowerCase();
        for(int i=0; i<s.length(); i+=1){
            int k = original.indexOf(sUpper.charAt(i));
            if(k != -1){
                if(Character.isLowerCase(sUpper.charAt(i))){
                    result += encryptionLower.charAt(k);
                }
                else{
                    result += encryption.charAt(k);                   
                }
            }
            else{
                result += s.charAt(i);
            }
        } 
        return result;
    }
        public void testCreate(){
            String s = "I AM";
            int key = 17;
            System.out.println(create(s,key));
        }
        
    //lesson version by using StringBuilder
    public String createEncrypt(String s, int key){
        //create mapping string
        String original = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        String encryption = original.substring(key) + original.substring(0,key);
        /*
        String sUpper = s.toUpperCase();
        String encryptionLower = encryption.toLowerCase();
        */
        
        //data encryption
        StringBuilder result = new StringBuilder(s);
        for(int i=0; i<result.length(); i+=1){
            char ch = result.charAt(i);
            int index = original.indexOf(ch);
            if(index != -1){
                char newChar = encryption.charAt(index);
                result.setCharAt(i, newChar);
            }
        } 
        return result.toString();
    }
        public void testCreateEncrypt(){
            String s = "I AM";
            int key = 17;
            System.out.println(createEncrypt(s,key));
        }
}
