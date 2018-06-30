/**
 * word analysis for vocabulary memorize
 */
import edu.duke.*;
import java.util.HashMap; 
import java.io.*;

public class VocabularySearch {
    private HashMap<String, Integer> wordList;
    private int totalWordInScript;
    
    //Conctructor
    public VocabularySearch(){
        wordList = new HashMap<String, Integer>();   
        int totalWordInScript = 0;
    }
        //reset list
        public void clearList(){
            wordList = new HashMap<String, Integer>();   
            int totalWordInScript = 0;        
        }
    
    //count times for each word at script
    public void checkFile(FileResource resource){
        for(String word : resource.words()){
            totalWordInScript++;
            word = removeData(word,"<",">");//remove html tag
            word = removeSymbol(word);
            String lowerWord = word.toLowerCase();//if lower case exist, use it
            String presentWord = "";
            if(word.endsWith("ed")){
                presentWord = word.substring(0,word.length()-2);
            }
            
            if(word!=""){
                if(wordList.containsKey(lowerWord)){
                    wordList.put(lowerWord,wordList.get(lowerWord)+1);
                }
                else if(presentWord!="" && wordList.containsKey(presentWord)){//adjust for past
                    wordList.put(presentWord,wordList.get(presentWord)+1);
                }
                else if(!wordList.containsKey(word)){
                    wordList.put(word, 1);
                }
                else{
                    wordList.put(word,wordList.get(word)+1);
                }
            }
       }
    }
        //reserve only word and "'"
        public String removeSymbol(String word){
            String newWord = "";
            for(int i=0;i<word.length();i++){
                char ch = word.charAt(i);
                if(Character.isAlphabetic(ch) || (ch=='\'')){
                    newWord += ch;
                }
            }
            return newWord;
        }
        //check html tag
        public boolean checkHtml(String word){
            int startIndex = word.indexOf("<");
            int endIndex = word.indexOf(">");
            if(startIndex == 0 && endIndex == word.length()-1){
                return true;
            }
            return false;            
        }
    
    //filter by showing time
    public void showWordListByRange(int start, int end){
        FileResource resource = new FileResource();
        checkFile(resource);
        int total = 0;
        System.out.println("Time" + "\t" + "Word" + "\t" + "Check");
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
    //text file version---------------------------------------------------------------
    
    
    //html file version---------------------------------------------------------------
    public void checkString(String s){
        String[] arr = s.split(" ");
        for(String word : arr){
            totalWordInScript++;
            if(!wordList.containsKey(word)){
                wordList.put(word, 1);
            }
            else{
                wordList.put(word,wordList.get(word)+1);
            }
        }
    }
    //remove html tag
        //remove content by start char and end char
        public String removeData(String s, String start, String end) {
            while(true){
                int startIndex = s.indexOf(start);
                int endIndex = s.indexOf(end,startIndex);
                if(startIndex == -1 || endIndex == -1){
                    break;
                }
                s = s.substring(0,startIndex) + s.substring(endIndex+1);
            }
            return s;
        }
        //replace content by start char and end char
        public String replaceData(String s, String start, String end, String target) {
            while(true){
                int startIndex = s.indexOf(start);
                int endIndex = s.indexOf(end,startIndex);
                if(startIndex == -1 || endIndex == -1){
                    break;
                }
                s = s.substring(0,startIndex) +target+ s.substring(endIndex+1);
            }
            return s;
        }
        //adjust content for HTML file
        public String contentUpdate(String s){
            s = removeData(s,"<",">");//remove html tag
            s = s.replace("&#8217;","\'");//special char adjust
            s = s.replace("&#146;","\'");//special char adjust
            s = s.replace("&nbsp;"," ");//space adjust
            s = replaceData(s,"&",";"," ");//remove html char
            s = removeData(s,"(",")");//remove action in script 
            s = removeData(s,"[","]");//remove scene in script 
            
            s = s.replace("!"," ");//special char adjust
            s = s.replace("?"," ");//special char adjust
            s = s.replace(";"," ");//special char adjust
            s = s.replace("."," ");//special char adjust
            s = s.replace(":"," ");//special char adjust
            s = s.replace(","," ");//special char adjust
            s = s.replace("-"," ");//special char adjust
            return s;
        }

    public void analysisByLine(){
        DirectoryResource dr = new DirectoryResource(); 
        for(File f : dr.selectedFiles()){ 
            String FileName = f.getName();
            FileResource resource = new FileResource(f);
            String content = resource.asString();
            content = contentUpdate(content);
            
            String[] lines = content.split(System.getProperty("line.separator"));
            for(String line : lines){
                if(line != null){
                    System.out.println(line);
                }
            }
        }   
    }
    
    public void analysisByWord(){
        DirectoryResource dr = new DirectoryResource(); 
        System.out.println("Word" + "\t" + "Time");
        String content = "";
        
        for(File f : dr.selectedFiles()){ 
            FileResource resource = new FileResource(f);
            content += resource.asString();
        }  
        
        content = contentUpdate(content);
        clearList();
        checkString(content);
        for(String word : wordList.keySet()){
            System.out.println(word + "\t" + wordList.get(word));
        } 
    }
}
