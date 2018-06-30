package RandomText;


import java.util.ArrayList;

/**
 * Write a description of class MarkovZero here.
 * 
 * @author Duke Software
 * @version 1.0
 */


public class MarkovOne extends AbstractMarkovModel{
	public String getRandomText(int numChars){
		if (myText == null) return "";
		
		StringBuilder sb = new StringBuilder();
		int index = myRandom.nextInt(myText.length()-1);
		String key = myText.substring(index,index+1);
		sb.append(key);		
		
		for(int k=0; k < numChars-1; k++){
			ArrayList<String> follow = getFollows(key);
			if(follow.size()==0) break;
			index = myRandom.nextInt(follow.size());
			key = follow.get(index);
			sb.append(key);
		}
		return sb.toString();
	}
	
    public String toString(){
    	return "MarkovModel of order 1.";
    }
}

