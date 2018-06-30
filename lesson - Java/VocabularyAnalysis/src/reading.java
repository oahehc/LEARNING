

import java.io.BufferedReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class reading {
	public void readFile() throws IOException{
		Path p = Paths.get("1-1.txt");
		BufferedReader reader = Files.newBufferedReader(p);
		while(true){
			String line = reader.readLine();
			if(line == null){
				break;				
			}
			System.out.println(line);
		}
	}
	
//	public void readUrl(){
//		URL source = new URL("http://dukelearntoprogram.com");
//		BufferReader reader = new BufferReader(new);
//		while(true){
//			String line = reader.readLine();
//			if(line == null){
//				break;
//			}
//			System.out.println(line);
//		}
//	}
	
	public static void main(String[] args) throws IOException{
		reading r = new reading();
		r.readFile();		
	}
}
