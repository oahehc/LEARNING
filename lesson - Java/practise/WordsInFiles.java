
/**
 * Write a description of WordsInFiles here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
import edu.duke.*;
import java.util.*; 
import java.io.*;

public class WordsInFiles {
    private HashMap<String, ArrayList<String>> wordMap;
    
    public WordsInFiles(){
        wordMap = new HashMap<String, ArrayList<String>>();
    }
    
    private void addWordsFormFile(File f){
        FileResource resource = new FileResource(f);
        String fileName = f.getName();
        for(String word : resource.words()){
            if(wordMap.containsKey(word)){
                ArrayList<String> list = wordMap.get(word);
                if(!list.contains(fileName)){
                    list.add(fileName);
                    wordMap.put(word,list);
                }
            }
            else{
                ArrayList<String> list = new ArrayList<String>();
                list.add(fileName);
                wordMap.put(word,list);
            }            
        }
    }
    public void printMap(){
        for (String word : wordMap.keySet()) {
            ArrayList<String> list = wordMap.get(word);
            System.out.println("Word: " + word);
            System.out.println("List: " + list);
            System.out.println("");
        }
    }
    public void buildWordFileMap(){
        wordMap = new HashMap<String, ArrayList<String>>();
        DirectoryResource dr = new DirectoryResource(); 
        for(File f : dr.selectedFiles()){ 
            addWordsFormFile(f);
        } 
    }
    public int maxNumber(){
        int maxNum = 0;
        for (String word : wordMap.keySet()) {
            ArrayList<String> list = wordMap.get(word);
            if(list.size()>maxNum){
                maxNum = list.size();
            }
        }    
        return maxNum;
    }
    public ArrayList<String> wordsInNumFiles(int number){
        ArrayList<String> wordList = new ArrayList<String>();
        for (String word : wordMap.keySet()) {
            ArrayList<String> list = wordMap.get(word);
            if(list.size()==number){
                wordList.add(word);
            }
        }    
        return wordList;
    }
    public void printFilesIn(String word){
        if(wordMap.containsKey(word)){
            ArrayList<String> list = wordMap.get(word);
            System.out.println("List: " + list);
        }
    }
    
    
    
    public void test(){
        buildWordFileMap();
        System.out.println(maxNumber());
        System.out.println(wordsInNumFiles(3));
        printFilesIn("dogs");
        printFilesIn("dog");
    }

}
