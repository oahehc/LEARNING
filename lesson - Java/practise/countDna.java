
/**
 * Write a description of ArrayList here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
import edu.duke.*;
import java.util.*; 
import java.io.*;

public class countDna{
    private HashMap<String, Integer> dnaMap;
    public countDna(){
        dnaMap = new HashMap<String, Integer>();
    }
    
        public void printDnaMap(){
            for(String dna : dnaMap.keySet()){
                System.out.println(dna + "\t" + dnaMap.get(dna));
            }
            System.out.println("");
        }
    public void buildCodonMap(int start, String dna){
        dnaMap = new HashMap<String, Integer>();
        String newDna = dna.substring(start);
        for(int i=0; i<=newDna.length()-3; i+=3){
            String codon = newDna.substring(i,i+3);
            if(dnaMap.containsKey(codon)){
                dnaMap.put(codon,dnaMap.get(codon)+1);
            }
            else{
                dnaMap.put(codon,1);
            }
        }
    }
    public String getMostCommonCodon(){
        String mostCodon = "";
        int mostTime = 0;
        for(String dna : dnaMap.keySet()){
            if(dnaMap.get(dna)>mostTime){
                mostCodon = dna;
                mostTime = dnaMap.get(dna);
            }
        }
        return mostCodon;
    }
    public void printCodonCounts(int start, int end){
        for(String dna : dnaMap.keySet()){
            int time = dnaMap.get(dna);
            if(time>=start && time<=end){
                System.out.println(dna + "\t" + dnaMap.get(dna));
            }
        }
    }
        public void test(){
            String test = "CGTTCAAGTTCAA";
            buildCodonMap(0, test);
            System.out.println(getMostCommonCodon());
            printCodonCounts(1, 5);
            String test2 = "CGTTCAAGTTCAA";
            buildCodonMap(0, test2);
            System.out.println(getMostCommonCodon());
            printCodonCounts(1, 5);
        }

    
}
