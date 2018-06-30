//import edu.duke.*;
import java.util.HashMap;
import java.io.File;
import javax.swing.JFileChooser;
import edu.duke.*;

/*
 * remove html tag
 * combine all raw data -> keep title?
 * keep upperCase
 */

public class analysis {
    private HashMap<String, Integer> wordList;   
    public analysis(){
        wordList = new HashMap<String, Integer>();   
    }

/*   
    public void fileSelected() {
        JFileChooser chooser = new JFileChooser();
        chooser.setMultiSelectionEnabled(true);
        chooser.showOpenDialog(null);

        File[] files = chooser.getSelectedFiles();
        System.out.println(files);
    }
 
*/   
    
    //count times for each word at script
    public void checkFile(FileResource resource){
        for(String word : resource.words()){
            totalWordInScript++;
            word = removeSymbol(word).toLowerCase();
            if(!wordList.containsKey(word)){
                wordList.put(word, 1);
            }
            else{
                wordList.put(word,wordList.get(word)+1);
            }
        }
    }
        public String removeSymbol(String word){
            String newWord = "";
            for(int i=0;i<word.length();i++){
                char ch = word.charAt(i);
                if(Character.isAlphabetic(ch)){
                    newWord += ch;
                }
            }
            return newWord;
        }
 
    //filter by showing time
    public void showWordListByRange(int start, int end){
        FileResource resource = new FileResource();
        checkFile(resource);
        int total = 0;
        for(String word : wordList.keySet()){
            int times = wordList.get(word);
            if((times>=start) && (times<=end)){
                System.out.println(times + "\t" +word);
                total++;
            }
        }
        System.out.println("Number of words: " + total);
    }
 
    //show all word list
    public void showWordList(){
        int start = 0;
        int end = 10000000;
        showWordListByRange(start, end);
    }
    
    //check multiple file
    public void showMultipleFile(){
        DirectoryResource dr = new DirectoryResource(); 
        System.out.println("FileName" + "\t" + "Word" + "\t" + "Time");

        for(File f : dr.selectedFiles()){ 
            String FileName = f.getName();
            FileResource resource = new FileResource(f);
            clearList();
            checkFile(resource);
            for(String word : wordList.keySet()){
                System.out.println(FileName + "\t" +word + "\t" + wordList.get(word));
            }
        }
    }
    

    
    public static void main(String[] args){
    	analysis an = new analysis();
    	an.showMultipleFile();
    }
     
}
