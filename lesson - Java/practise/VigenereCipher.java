
/**
 * Write a description of VigenereCipher here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
import java.util.*;

public class VigenereCipher {
    private String alphabet;
    private ArrayList<String> shiftedAlphabet;
    private String mainKey;
    public VigenereCipher(String key){
        alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        mainKey = key.toUpperCase();
        for(int i=0;i<mainKey.length();i++){
            int j = alphabet.indexOf(key.charAt(i));
            String shifted = alphabet.substring(i) + alphabet.substring(0,i);
            shiftedAlphabet.add(shifted);
        }
    }
    
    public String encription(String msg, String key){
        VigenereCipher vc = new VigenereCipher(key);
        String msgEncript = "";
        String msgUpper = msg.toUpperCase();
        for(int i=0;i<msg.length();i++){
            int indexKey = i%key.length();
            String shifted = shiftedAlphabet.get(indexKey);
            char ch = msg.charAt(i);
            int index = alphabet.indexOf(Character.toUpperCase(ch));
            if(index != -1){
                if(Character.isUpperCase(ch)){
                    msgEncript += shifted.charAt(index);
                }
                else{
                    msgEncript += Character.toLowerCase(shifted.charAt(index));
                }
            }
            else{
                msgEncript += msg.charAt(index);               
            }
        }
        return msgEncript;
    }
    
    public void test(){
        String msg = encription("I love to play basketball","A");
        System.out.println(msg);
    }

}
