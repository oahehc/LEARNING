
/**
 * Write a description of caesarCipherAssignment here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class caesarCipherAssignment {
    public boolean isVowel(char ch){
        String vowel = "aeiouAEIOU";
        int index = vowel.indexOf(ch);
        if(index == -1){
            return false;
        }
        return true;
    }
    public String replaceVowels(String phrase, char ch){
        StringBuilder newPhrase = new StringBuilder(phrase);
        for(int i =0; i<newPhrase.length(); i+=1){
            if(isVowel(newPhrase.charAt(i))){
                newPhrase.setCharAt(i,ch);
            }
        }
        return newPhrase.toString();
    }
        public void testReplace(){
            String s = "Hello World";
            char ch = '*';
            System.out.println(replaceVowels(s,ch));
        }
        
}
