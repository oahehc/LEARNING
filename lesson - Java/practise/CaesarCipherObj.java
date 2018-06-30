
/**
 * Write a description of CaesarCipherObj here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class CaesarCipherObj {
    //declare mapping string for encription
    private String alphabet;
    private String shiftedAlphabet;
    private int key;
    //set key for mapping string
    public CaesarCipherObj(int index){
        key = index;
        alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        shiftedAlphabet = alphabet.substring(key) + alphabet.substring(0,key);
    }
    
    //show mapping table
    public void showMapping(){
        System.out.println(alphabet);
        System.out.println(shiftedAlphabet);
    }
    
    //encript msg by mapping table
    public String encription(String message){
        String result = "";
        String alphabetLower = alphabet.toLowerCase();
        String shiftedAlphabetLower = shiftedAlphabet.toLowerCase();
        for(int i=0; i<message.length(); i+=1){
            int indexUpper = alphabet.indexOf(message.charAt(i));
            int indexLower = alphabetLower.indexOf(message.charAt(i));
            if(indexUpper != -1){
                result += shiftedAlphabet.charAt(indexUpper);
            }
            else if(indexLower != -1){
                result += shiftedAlphabetLower.charAt(indexLower);
            }
            else{
                result += message.charAt(i);
            }
        } 
        return result;
    }
        public void testEncription(){
            String message = "I Love This Game";
            showMapping();
            
            CaesarCipherObj cc = new CaesarCipherObj(2);
            cc.showMapping();
            System.out.println(message);
            System.out.println(cc.encription(message));
        }
        
    //decription
    public String decription(String message){
        CaesarCipherObj cc = new CaesarCipherObj(26-key);
        return cc.encription(message);
    }
        public void testDecription(){
            String message = "I Love This Game";
            CaesarCipherObj cc = new CaesarCipherObj(5);
            String enMsg = cc.encription(message);
            String deMsg = cc.decription(enMsg);
            
            System.out.println(message);
            System.out.println(enMsg);
            System.out.println(deMsg);
        }    
}
