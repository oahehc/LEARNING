
/**
 * Write a description of tool here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
import edu.duke.*; //for FileResource/URLResource/..
import org.apache.commons.csv.*; //for csv file read
import java.io.*; //for file

public class isNumber {
    //check string is numberor not
    public static boolean isNumeric(String str){  
        try  
        {double d = Double.parseDouble(str);}  
        catch(NumberFormatException nfe)  
        {return false;}  
        return true;  
    } 
}
