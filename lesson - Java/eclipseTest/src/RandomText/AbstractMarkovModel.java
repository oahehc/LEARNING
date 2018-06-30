package RandomText;


import java.util.ArrayList;
/**
 * Abstract class AbstractMarkovModel - write a description of the class here
 * 
 * @author (your name here)
 * @version (version number or date here)
 */
import java.util.Random;

public abstract class AbstractMarkovModel implements IMarkovModel {
    protected String myText;
    protected Random myRandom;
    
    public AbstractMarkovModel() {
        myRandom = new Random();
    }
    public void setTraining(String s) {
        myText = s.trim();
    }
	public void setRandom(int seed){
		myRandom = new Random(seed);
	}
	public ArrayList<String> getFollows(String key){
		ArrayList<String> result = new ArrayList<String>();
		int start = 0;
		while(true){
			int index = myText.indexOf(key,start);
			if(index == -1 || index >= myText.length()-key.length()) break;
			String follow = Character.toString(myText.charAt(index+key.length()));
			result.add(follow);
			start = index + key.length();			
		}
		return result;
	}    
    
    abstract public String getRandomText(int numChars);
}

