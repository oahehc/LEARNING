
/**
 * Write a description of findString here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
import edu.duke.*;
import java.io.*;

public class findString {
    public StorageResource findDNA(String dna){
        StorageResource store = new StorageResource();
        String upperDNA = dna.toUpperCase();
        String startCodon = "ATG";
        int startIndex = 0;
        int endIndex = 0;
        int index = 0;
        while(true){
            // find start
            index = upperDNA.indexOf(startCodon,startIndex);
                if(index == -1){
                    break;
                }
                //System.out.println("Start: " + index);
            
            // find end
            endIndex = findEnd(upperDNA,index+3);
                //System.out.println("End: " + endIndex);
                if(endIndex < dna.length()){
                    //System.out.println(dna.substring(index,endIndex+3));
                    store.add(dna.substring(index,endIndex+3));
                    /*
                    String sub = dna.substring(index,endIndex+3);
                    if(sub.length()>60){
                        store.add(sub);
                    }
                    */
                    startIndex = endIndex + 3; 
                }
                else{
                    startIndex = index + 3;     
                }
        }
        return store;
    }
        public int findEnd(String dna, int index){
            String endCodon1 = "TAG";
            String endCodon2 = "TGA";
            String endCodon3 = "TAA";
            int index1 = dna.indexOf(endCodon1,index);
            if((index1 == -1)||((index1-index)%3!=0)){
                index1 = dna.length();
            }
            int index2 = dna.indexOf(endCodon2,index);
            if((index2 == -1)||((index2-index)%3!=0)){
                index2 = dna.length();
            }
            int index3 = dna.indexOf(endCodon3,index);
            if((index3 == -1)||((index3-index)%3!=0)){
                index3 = dna.length();
            }
            return Math.min(index1,Math.min(index2,index3));     
        }
        
    public StorageResource open(){
         DirectoryResource dr = new DirectoryResource(); 
         StorageResource store = new StorageResource();
         for(File f : dr.selectedFiles()){ 
             FileResource res = new FileResource(f); 
             for (String line : res.lines()) { 
                 //System.out.println(line); 
                 store.add(line);
             } 
         }
         return store;
    }    
        
    public void test(){
        findDNA("ATGAAATGAAAA");
        System.out.println("");
        findDNA("ccatgccctaataaatgtctgtaatgtaga");
        System.out.println("");
        findDNA("CATGTAATAGATGAATGACTGATAGATATGCTTGTATGCTATGAAAATGTGAAATGACCCA");
        System.out.println("");
    }
    
    public void test2(){
        StorageResource file = open();
        StorageResource store = new StorageResource();
        for(String data : file.data()){
            store = findDNA(data);
            //System.out.println(store.size());
            int number = 0;
            for(String dna : store.data()){
                int count = 0;
                int start = 0;
                while(true){
                    int posC = dna.indexOf("c",start);
                    if(posC == -1){posC = dna.length();}
                    int posG = dna.indexOf("g",start);
                    if(posG == -1){posG = dna.length();}
                    
                    int pos = Math.min(posC,posG);
                    if(pos == dna.length()){break;}
                    count += 1;
                    start = pos + 1;
                }
                float cgratio = ((float) count)/dna.length();
                if(cgratio > 0.35){
                    System.out.println(cgratio);
                    number += 1;
                }
            }
            System.out.println("Num = " +number);
        }
    }
}
