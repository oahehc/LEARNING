package RandomText;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Random;

public class EfficientMarkovWord implements IMarkovModel {
	private String[] myText;
	private Random myRandom;
	private int myOrder;
	private HashMap<WordGram, ArrayList<String>> wordMap;
	
	
	public EfficientMarkovWord(int order) {
		myRandom = new Random();
		myOrder = order;
		wordMap = new HashMap<WordGram, ArrayList<String>>();
	}

	@Override
	public void setTraining(String text) {
		myText = text.split("\\s+");
	}

	@Override
	public void setRandom(int seed) {
		myRandom = new Random(seed);
	}

	public int indexOf(String[] words, WordGram target , int start){
		for(int i=start;i<words.length-myOrder;i++){
			WordGram temp = new WordGram(words,i,myOrder);
			if(temp.equals(target)) return i;
		}
		return -1;
	}	
	public ArrayList<String> buildMap(WordGram kGram){
		ArrayList<String> result = new ArrayList<String>();
		int pos = 0;
		while(pos < myText.length){
			int start = indexOf(myText,kGram,pos);
			if(start == -1) break;
			String follow = myText[start+myOrder];
			result.add(follow);
			pos = start + myOrder;			
		}
		wordMap.put(kGram, result);
//printHashMapInfo();		
		return result;	
	}
	public ArrayList<String> getFollows(WordGram kGram){
		ArrayList<String> result = new ArrayList<String>();
		if(wordMap.containsKey(kGram)){
			result = wordMap.get(kGram);
		}		
		else{
			result = buildMap(kGram);
		}
		return result;
	} 
	public String getRandomText(int numWords){
		StringBuilder sb = new StringBuilder();
		int index = myRandom.nextInt(myText.length-myOrder);
		WordGram kGram = new WordGram(myText,index,myOrder);
		sb.append(kGram.toString());
		for(int k=0;k<numWords-1;k++){
			ArrayList<String> follows = getFollows(kGram);
			if(follows.size()==0) break;
			index = myRandom.nextInt(follows.size());
			String next = follows.get(index);
			sb.append(next + " ");
			kGram = kGram.shiftAdd(next);
		}
		return sb.toString().trim();
	}
	
	public void printHashMapInfo(){
		System.out.println("Size: " + wordMap.size());
		System.out.println(wordMap);
	}
}
