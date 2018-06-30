package RandomText;

import java.util.ArrayList;
import java.util.Random;

public class MarkovWordOne implements IMarkovModel{
	private String[] myText;
	private Random myRandom;

	public MarkovWordOne() {
		myRandom = new Random();
	}
	public void setRandom(int seed) {
		myRandom = new Random(seed);
	}	
	public void setTraining(String text){
		myText = text.split("\\s+");
	}
	
	public String getRandomText(int numWords){
		StringBuilder sb = new StringBuilder();
		int index = myRandom.nextInt(myText.length-1);
		String key = myText[index];
		sb.append(key + " ");
		for(int k=0;k<numWords-1;k++){
			ArrayList<String> follows = getFollows(key);
			if(follows.size()==0) break;
			index = myRandom.nextInt(follows.size());
			String next = follows.get(index);
			sb.append(next + " ");
			key = next;
		}
		return sb.toString().trim();
	}

	public ArrayList<String> getFollows(String key){
		ArrayList<String> result = new ArrayList<String>();
		int pos = 0;
		while(pos < myText.length){
			int start = indexOf(myText,key,pos);
			if(start == -1) break;
			String follow = myText[start+1];
			result.add(follow);
			pos = start + 1;			
		}
		return result;
	}  
		public int indexOf(String[] words, String target , int start){
			for(int i=start;i<words.length;i++){
				if(words[i].equals(target)){
					return i;
				}
			}
			return -1;
		}
}
