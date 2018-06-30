package backup;


import java.util.ArrayList;

/**
 * Write a description of class MarkovZero here.
 * 
 * @author Duke Software
 * @version 1.0
 */

import java.util.Random;

public class MarkovOne{
    private String myText;
	private Random myRandom;
	
	public MarkovOne() {
		myRandom = new Random();
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
		int index = myRandom.nextInt(myText.length()-1);
		String key = myText.substring(index,index+1);
		sb.append(key);
//		String key = "n";
//		StringBuilder sb = new StringBuilder();
//		sb.append(key);
		
		
		for(int k=0; k < numChars-1; k++){
			ArrayList<String> follow = getFollows(key);
			if(follow.size()==0) break;
			index = myRandom.nextInt(follow.size());
			key = follow.get(index);
			sb.append(key);
		}
		return sb.toString();
	}
	
	public ArrayList<String> getFollows(String key){
		ArrayList<String> result = new ArrayList<String>();
		int start = 0;
//System.out.println(myText.length());
		while(true){
			int index = myText.indexOf(key,start);
//System.out.println(index);
			if(index == -1 || index >= myText.length()-1) break;
			String follow = Character.toString(myText.charAt(index+1));
//System.out.println(follow);
			result.add(follow);
			start = index + 1;			
		}
		return result;
	}
}

