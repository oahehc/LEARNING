
/**
 * Write a description of Main here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Main {
    public static void main(String[] args){
        if(args.length == 0){
            System.out.println("Please choose a filename");
            System.exit(1);
        }
        else{
            System.out.println(args);
        }
    }
}
