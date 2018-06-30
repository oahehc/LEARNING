package RandomText;


import java.util.ArrayList;

/**
 * Write a description of class MarkovZero here.
 * 
 * @author Duke Software
 * @version 1.0
 */


public class MarkovFour extends AbstractMarkovModel{	
	public String getRandomText(int numChars){
		if (myText == null) return "";
		
		StringBuilder sb = new StringBuilder();
		int index = myRandom.nextInt(myText.length()-4);
		String key = myText.substring(index,index+4);
		sb.append(key);
		
		for(int k=0; k < numChars-4; k++){
			ArrayList<String> follows = getFollows(key);
			if(follows.size()==0) break;
			index = myRandom.nextInt(follows.size());
			String follow = follows.get(index);
			sb.append(follow);
			key = key.substring(1, 4) + follow;
		}
		return sb.toString();
	}


    public String toString(){
    	return "MarkovModel of order 4.";
    }
}


