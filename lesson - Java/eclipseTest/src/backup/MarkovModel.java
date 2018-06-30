package backup;


import java.util.ArrayList;

/**
 * Write a description of class MarkovZero here.
 * 
 * @author Duke Software
 * @version 1.0
 */

import java.util.Random;

public class MarkovModel{
    private String myText;
	private Random myRandom;
	private int MarkovNum;
	
	public MarkovModel(int num) {
		myRandom = new Random();
		MarkovNum = num;
	}
	
	public void setRandom(int seed){
		myRandom = new Random(seed);
	}
	
	public void setTraining(String s){
		myText = s.trim();
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
}


