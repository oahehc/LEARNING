
/**
 * Write a description of baby here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
import edu.duke.*;
import org.apache.commons.csv.*;

public class baby {
    public void printNames(){
        FileResource fr = new FileResource();
        for(CSVRecord rec : fr.getCSVParser(false)){
            System.out.println("Name: " + rec.get(0)
                                + "Gender: " + rec.get(1)
                                + "Number: " + rec.get(2)
            );
        }
    }
    
    public void totalBirths(FileResource fr){
        int totalBirths = 0;
        for(CSVRecord rec : fr.getCSVParser(false)){
            int numBorn = Integer.parseInt(rec.get(2));
            totalBirths += numBorn;
        }        
        System.out.println("Total Births = " +totalBirths);
    }
        public void testTotalBirths(){
        FileResource fr = new FileResource();
        totalBirths(fr);
        }
}
