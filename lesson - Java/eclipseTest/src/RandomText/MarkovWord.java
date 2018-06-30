package RandomText;

import java.util.ArrayList;
import java.util.Random;

public class MarkovWord implements IMarkovModel {
	private String[] myText;
	private Random myRandom;
	private int myOrder;
	
	
	public MarkovWord(int order) {
		myRandom = new Random();
		myOrder = order;
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
	public ArrayList<String> getFollows(WordGram kGram){
		ArrayList<String> result = new ArrayList<String>();
		int pos = 0;
		while(pos < myText.length){
			int start = indexOf(myText,kGram,pos);
			if(start == -1) break;
			String follow = myText[start+myOrder];
			result.add(follow);
			pos = start + myOrder;			
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
}
