package RandomText;

import java.util.Random;
import java.util.ArrayList;
import java.util.HashMap;

public class EfficientMarkovModel extends AbstractMarkovModel {
	private int MarkovNum;
	private java.util.HashMap<String,ArrayList<String>> followMap;
	
	public EfficientMarkovModel(int num) {
		myRandom = new Random();
		MarkovNum = num;
		followMap = new HashMap<String,ArrayList<String>>();
	}

	@Override
	public String getRandomText(int numChars) {
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
//System.out.println("num: "+k);
//System.out.println(sb.toString());
		}
		return sb.toString();
	}
	
	public String toString(){
    	return "EfficientMarkovModel of order "+MarkovNum+".";
	}

	public ArrayList<String> buildMap(String key){
		ArrayList<String> result = new ArrayList<String>();
		int start = 0;
		while(true){
			int index = myText.indexOf(key,start);
			if(index == -1 || index >= myText.length()-key.length()) break;
			String follow = Character.toString(myText.charAt(index+key.length()));
			result.add(follow);
			start = index + key.length();			
		}		
		followMap.put(key, result);
//printHashMapInfo();
		return result;
	}

	public ArrayList<String> getFollows(String key){
		if(followMap.containsKey(key)){
			return followMap.get(key);
		}
		else{
			return buildMap(key);
		}
	}  
	
	public void printHashMapInfo(){
		int maxSize = 0;
		ArrayList<String> maxList = new ArrayList<String>();
		for (ArrayList<String> list : followMap.values()) { 
		   if(list.size()>maxSize){
			   maxSize = list.size();
			   maxList = list; 
		   }
		}  
		System.out.println("HashMap info----------------");
		System.out.println("TotalSize: " + followMap.size());
		System.out.println("MaxList: " + maxList);
		System.out.println("HashMap----------------");
		

		if(followMap.size()<30){
			System.out.println("HashMap detail----------------");
			System.out.println(followMap);
			System.out.println("HashMap----------------");
		}
	}	
	
	
	
	
	
	
	
}
