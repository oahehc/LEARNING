
/**
 * Write a description of openFile here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
import edu.duke.*;
import java.io.*;

public class openFile {
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
}
