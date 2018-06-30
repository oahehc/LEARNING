
/**
 * Write a description of csv here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
import edu.duke.*;
import org.apache.commons.csv.*;
import java.io.*;

public class csv {
    public void readcsv(){
        FileResource fr = new FileResource();
        CSVParser parser = fr.getCSVParser();
        for(CSVRecord record : parser){
            System.out.println(record.get("Name"));
        }
    }
    
    public void csvfilter(CSVParser parser, String select){
        for(CSVRecord record : parser){
            //Country, Exports, and Value (dollars)
            String export = record.get("Exports");
            if(export.contains(select)){
                System.out.println(record.get("Country"));
            }
        }        
    }
    
    public void countryInfo(CSVParser parser, String country){
        boolean check = true;
        for(CSVRecord record : parser){
            //Country, Exports, and Value (dollars)
            if(record.get("Country").equals(country)){
                System.out.print(record.get("Country") + ": ");
                System.out.print(record.get("Exports") + ": ");
                System.out.println(record.get("Value (dollars)"));
                check = false;
            }
        }   
        if(check){
            System.out.println("NOT FOUND");
        }
    }
    
    public void exportContain(CSVParser parser, String export1, String export2){
        int num = 0;
        for(CSVRecord record : parser){
            //Country, Exports, and Value (dollars)
            String export = record.get("Exports");
            if(export.contains(export1) && export.contains(export2)){
                System.out.print(record.get("Country") + ": ");
                System.out.print(record.get("Exports") + ": ");
                System.out.println(record.get("Value (dollars)"));
                num ++;
            }
        }   
        if(num == 0){
            System.out.println("NOT FOUND");
        }
        else{
            System.out.println("Number: " +num);      
        }
    }    
    
    public void tester(){
        FileResource fr = new FileResource();
        CSVParser parser = fr.getCSVParser();     
        countryInfo(parser, "Nauru");
        //exportContain(parser,"sugar","sugar");
    }
    
    public CSVRecord csvMax(CSVParser parser){
        CSVRecord largest = null;
        for(CSVRecord currentRow : parser){
            if(largest == null){
                largest = currentRow;
            }
            else{
                double currentTemp = Double.parseDouble(currentRow.get("TemperatureF"));
                double largestTemp = Double.parseDouble(largest.get("TemperatureF"));
                if(currentTemp > largestTemp){
                    largest = currentRow;
                }
                
            }
        }
        return largest;
    }
    public void testMax(){
        FileResource fr = new FileResource("");
        CSVRecord largest = csvMax(fr.getCSVParser());
        System.out.println("Hottest temperature" + largest.get("Temperature"));
    }
    public CSVRecord csvMaxMultiple(){
        CSVRecord largest = null;
        DirectoryResource dr = new DirectoryResource();
        for(File f : dr.selectedFiles()){
            FileResource fr = new FileResource(f);
            CSVRecord currentRow = csvMax(fr.getCSVParser());
            if(largest == null){
                largest = currentRow;
            }
            else{
                double currentTemp = Double.parseDouble(currentRow.get("TemperatureF"));
                double largestTemp = Double.parseDouble(largest.get("TemperatureF"));
                if(currentTemp > largestTemp){
                    largest = currentRow;
                }
            }
        }
        return largest;            
    }
    public void testMaxMul(){
        CSVRecord largest = csvMaxMultiple();
        System.out.println("Hottest temperature" + largest.get("Temperature"));
    }
}
