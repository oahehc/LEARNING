
/**
 * Write a description of csvWeather here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
import edu.duke.*;
import org.apache.commons.csv.*;
import java.io.*;

public class csvWeather {
    //assignment 1
    public CSVRecord coldestHourInFile(CSVParser parser){
        CSVRecord coldest = null;
        for(CSVRecord current : parser){
            coldest = coldestCompare(coldest,current);
        }
        return coldest;     
    }
        public CSVRecord coldestCompare(CSVRecord coldest,CSVRecord current){
            if(coldest == null){
                coldest = current;
            }
            else{
                double currentTemp = Double.parseDouble(current.get("TemperatureF"));
                double coldestTemp = Double.parseDouble(coldest.get("TemperatureF"));
                if(coldestTemp == -9999){
                    coldest = current;
                }
                else if(currentTemp != -9999){
                    if(currentTemp < coldestTemp){
                        coldest = current;
                    }
                }
            }
            return coldest;      
        }
    public void testColdestHourInFile(){
        FileResource fr = new FileResource();
        CSVParser parser = fr.getCSVParser();
        CSVRecord csv = coldestHourInFile(parser);
        System.out.print("Lowest Temperature was ");
        System.out.print(csv.get("TemperatureF"));
        System.out.print(" at ");
        System.out.println(csv.get("DateUTC"));
    }
        
    //assignment 2
    public String fileWithColdestTemperature(){
        String coldestFile = null;
        double coldestTemp = Double.POSITIVE_INFINITY;
        DirectoryResource dr = new DirectoryResource();
        for(File f : dr.selectedFiles()){
            FileResource fr = new FileResource(f);
            CSVRecord current = coldestHourInFile(fr.getCSVParser());
            double currentTemp = Double.parseDouble(current.get("TemperatureF"));
            if(currentTemp < coldestTemp){
                coldestFile = f.getName();
                coldestTemp = currentTemp;
            }
        }
        return coldestFile;            
    }
    public void testFileWithColdestTemperature(){
        String filename = fileWithColdestTemperature();
        System.out.println("coldest day in " +filename);
    }
    
    //assignment3
    public CSVRecord lowestHumidityInFile(CSVParser parser){
        CSVRecord lowest = null;
        for(CSVRecord currentRow : parser){
            if(lowest == null){
                lowest = currentRow;
            }
            else{
                String currentHumid = currentRow.get("Humidity");
                String lowestHumid = lowest.get("Humidity");
                if(!isNumeric(lowestHumid)){
                    lowest = currentRow;
                }
                else if(isNumeric(currentHumid)){
                    double currentHumidNum = Double.parseDouble(currentHumid);
                    double lowestHumidNum = Double.parseDouble(lowestHumid);
                    if(currentHumidNum < lowestHumidNum){
                        lowest = currentRow;
                    }
                }
            }
        }
        return lowest;
    }
    public void testLowestHumidityInFile(){
        FileResource fr = new FileResource();
        CSVParser parser = fr.getCSVParser();
        CSVRecord csv = lowestHumidityInFile(parser);
        System.out.print("Lowest Humidity was ");
        System.out.print(csv.get("Humidity"));
        System.out.print(" at ");
        System.out.println(csv.get("DateUTC"));
    }
    
   //assignment 4
   public CSVRecord lowestHumidityInManyFiles(){
        CSVRecord lowest = null;
        DirectoryResource dr = new DirectoryResource();
        for(File f : dr.selectedFiles()){
            FileResource fr = new FileResource(f);
            CSVRecord current = lowestHumidityInFile(fr.getCSVParser());
            if(lowest == null){
                lowest = current;
            }
            double currentHumid = Double.parseDouble(current.get("Humidity"));
            double lowestHumid = Double.parseDouble(lowest.get("Humidity"));
            if(currentHumid < lowestHumid){
                lowest = current;
            }
        }
        return lowest;
   }
    public void testLowestHumidityInManyFiles(){
        CSVRecord csv = lowestHumidityInManyFiles();
        System.out.print("Lowest Humidity was ");
        System.out.print(csv.get("Humidity"));
        System.out.print(" at ");
        System.out.println(csv.get("DateUTC"));
    }
    
   //assignment 5
   public double averageTemperatureInFile(CSVParser parser){
       double average = 0;
       int total = 0;
        for(CSVRecord currentRow : parser){
            average += Double.parseDouble(currentRow.get("TemperatureF"));
            total += 1;
        }
        average = average/total;
        return average;
   }   
        public void testAverageTemperatureInFile(){
            FileResource fr = new FileResource();
            CSVParser parser = fr.getCSVParser();
            double ave = averageTemperatureInFile(parser);
            System.out.println(ave);
        }
        
   //assignment 6
   public double averageTemperatureWithHighHumidityInFile(CSVParser parser, int value){
        double average = 0;
        int total = 0;
        for(CSVRecord currentRow : parser){
            double humidity = Double.parseDouble(currentRow.get("Humidity"));
            if(humidity >= value){
                average += Double.parseDouble(currentRow.get("TemperatureF"));
                total += 1;
            }
        }
        average = average/total;
        return average;
   }
       public void testAverageTemperatureWithHighHumidityInFile(){
            FileResource fr = new FileResource();
            CSVParser parser = fr.getCSVParser();
            double ave = averageTemperatureWithHighHumidityInFile(parser,80);
            System.out.println(ave);
        }
        
   public void testFormat(){
        FileResource fr = new FileResource();
        CSVParser parser = fr.getCSVParser();
        for(CSVRecord currentRow : parser){
            String humidity = currentRow.get("Humidity");
            if(isNumeric(humidity)){
                System.out.println("is num " +humidity);
                //double humidityNum = Double.parseDouble(humidity);
            }
            else{
                System.out.println("not num " +humidity);
            }
        }
   }
        public static boolean isNumeric(String str)  
        {  
          try  
          {  
            double d = Double.parseDouble(str);  
          }  
          catch(NumberFormatException nfe)  
          {  
            return false;  
          }  
          return true;  
        }   
}
