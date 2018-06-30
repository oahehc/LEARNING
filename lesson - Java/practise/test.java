
/**
 * Write a description of test here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class test {
    public String reverse(String s){
        String re = "";
        for(int k=0; k<s.length() ;k+=1){
            re = s.charAt(k) + re;
        }
        return re;
    }
}
