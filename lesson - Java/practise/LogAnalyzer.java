
/**
 * Write a description of LogAnalyzer here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
import java.util.*;
import edu.duke.*;

public class LogAnalyzer {
    private ArrayList<LogEntry> records;
    public LogAnalyzer(){
        records = new ArrayList<LogEntry>();
    }
    
    public void readFile(String filename){
        FileResource f = new FileResource(filename);
        for(String line : f.lines()){        
            LogEntry le = WebLogParser.parseEntry(line);
            records.add(le);
        }
    }
    
    public void printAll(){
        for(LogEntry le : records){
            System.out.println(le);
        }
    }
    
    public void uniqueIp(){
        ArrayList<String> ipList = new ArrayList<String>();
        for(LogEntry le : records){
            if(!ipList.contains(le.getIpAddress())){
                ipList.add(le.getIpAddress());
            }
        }
        System.out.println(ipList);
    }
    
    
    public ArrayList<String> uniqueIPVisitsOnDay(String day){
        ArrayList<String> ipList = new ArrayList<String>();
        for(LogEntry le : records){
            String date = le.getAccessTime().toString();
            int index = date.indexOf(day);
            if(index != -1){
                if(!ipList.contains(le.getIpAddress())){
                    ipList.add(le.getIpAddress());
                }
            }
        }
        return ipList;        
    }
    
    public HashMap<String, Integer> countVisiter(){
        HashMap<String, Integer> ipMap = new HashMap<String,Integer>();
        for(LogEntry le : records){
            String ip = le.getIpAddress();
            if(ipMap.containsKey(ip)){
                ipMap.put(ip, ipMap.get(ip)+1);
            }
            else{
                ipMap.put(ip, 1);
            }
        }
        return ipMap;        
    }
    
    
    public void test(){
        String filename = "../log.txt";
        readFile(filename);
        printAll();
        System.out.println("");
//         uniqueIp();
//         System.out.println("");
//         ArrayList<String> ipList = uniqueIPVisitsOnDay("Sep 30");
//         System.out.println(ipList);
        HashMap<String, Integer> ipMap = countVisiter();
        System.out.println(ipMap);
    }
    
    
}
