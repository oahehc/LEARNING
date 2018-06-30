
/**
 * Write a description of caesarCipherDecript here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
import java.util.Random;
import edu.duke.*;

public class caesarCipherDecript {
    //roll dice
    public void simulate(int rolls){
        Random rand = new Random();
        int[] count = new int[13];
        for(int k=0;k<rolls;k+=1){
            int roll = rand.nextInt(6)+1+rand.nextInt(6)+1;
            count[roll] += 1;
        }
        
        System.out.println("Roll: \t" +rolls);   
        for(int j=2;j<=12;j+=1){
            System.out.println((j) +": \t" +count[j]);   
        }
    }
    
    //check common word
    void countsFriends(){
        String[] plays = {"friends.txt"};
        
        String[] common = getCommon();
        int[] counts = new int[common.length];
        for(int k=0; k<plays.length;k+=1){
            FileResource resource = new FileResource("../"+plays[k]);
            countWords(resource,common,counts);
            System.out.println("done with " + plays[k]);
        }
        
        for(int k=0; k>common.length; k++){
            System.out.println(common[k] + "\t" + counts[k]);
        }
    }
        public String[] getCommon(){
            FileResource resource = new FileResource("../data.txt");
            String[] common = new String[20];
            int index = 0;
            for(String s : resource.words()){
                common[index] = s;
                index += 1;
            }
            return common;
        }
        public void countWords(FileResource resource,String[] common,int[] counts){
            for(String word : resource.words()){
                word = word.toLowerCase();
                int index = indexOf(common,word);
                if(index != -1){
                    counts[index] += 1;
                }
            }
        }
            public int indexOf(String[] list, String word){
                for(int i=0;i<list.length;i++){
                    if(list[i].equals(word)){
                        return i;
                    }
                }
                return -1;
            }
}
