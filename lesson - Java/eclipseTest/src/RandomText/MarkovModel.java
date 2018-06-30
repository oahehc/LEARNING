package RandomText;


import java.util.ArrayList;

/**
 * Write a description of class MarkovZero here.
 * 
 * @author Duke Software
 * @version 1.0
 */

import java.util.Random;

public class MarkovModel extends AbstractMarkovModel{
	private int MarkovNum;
	
	public MarkovModel(int num) {
		myRandom = new Random();
		MarkovNum = num;
	}
	public String getRandomText(int numChars){
		if (myText == null) return "";
		
		StringBuilder sb = new StringBuilder();
		int index = myRandom.nextInt(myText.length()-MarkovNum);
		String key = myText.substring(index,index+MarkovNum);
		sb.append(key);
		
		for(int k=0; k < numChars-MarkovNum; k++){
			ArrayList<String> follows = getFollows(key);
			if(follows.size()==0) break;
			index = myRandom.nextInt(follows.size());
			String follow = follows.get(index);
			sb.append(follow);
			key = key.substring(1, MarkovNum) + follow;
		}
		return sb.toString();
	}
	

    public String toString(){
    	return "MarkovModel of order "+MarkovNum+".";
    }
}


