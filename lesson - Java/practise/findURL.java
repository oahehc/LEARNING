
/**
 * Write a description of findURL here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
import edu.duke.*;

public class findURL {
    public StorageResource findURLs(String url){
        URLResource page = new URLResource(url);
        StorageResource store = new StorageResource();
        String source = page.asString();
        int start = 0;
        while(true){
            int index = source.indexOf("href=",start);
            if(index == -1){
                break;
            }
            int firstQuote = index + 6;
            int endQuote = source.indexOf("\"",firstQuote);
            String sub = source.substring(firstQuote,endQuote);
            if(sub.startsWith("http")){
                //System.out.println(sub);
                store.add(sub);
            }
            start = endQuote + 1;
        }
        return store;
    }
        
    public void testURL(){
        StorageResource s1 = findURLs("https://www.whitehouse.gov");
        StorageResource s2 = findURLs("https://tw.yahoo.com/");
        System.out.println("size = " + s1.size());
        System.out.println("size = " + s2.size());
        for(String link : s1.data()){
            System.out.println(link);
        }
    }
    
    
}
