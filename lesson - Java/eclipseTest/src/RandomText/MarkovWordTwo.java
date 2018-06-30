package RandomText;

import java.util.ArrayList;
import java.util.Random;

public class MarkovWordTwo implements IMarkovModel {
	private String[] myText;
	private Random myRandom;

	public MarkovWordTwo() {
		myRandom = new Random();
	}

	@Override
	public void setTraining(String text) {
		myText = text.split("\\s+");
	}

	@Override
	public void setRandom(int seed) {
		myRandom = new Random(seed);
	}

	public String getRandomText(int numWords){
		StringBuilder sb = new StringBuilder();
		int index = myRandom.nextInt(myText.length-2);
		String key1 = myText[index];
		sb.append(key1 + " ");
		String key2 = myText[index+1];
		sb.append(key2 + " ");
		for(int k=0;k<numWords-2;k++){
			ArrayList<String> follows = getFollows(key1,key2);
			if(follows.size()==0) break;
			index = myRandom.nextInt(follows.size());
			String next = follows.get(index);
			sb.append(next + " ");
			key1 = key2;
			key2 = next;
		}
		return sb.toString().trim();
	}

	public ArrayList<String> getFollows(String key1, String key2){
		ArrayList<String> result = new ArrayList<String>();
		int pos = 0;
		while(pos < myText.length){
			int start = indexOf(myText,key1,key2,pos);
			if(start == -1) break;
			String follow = myText[start+2];
			result.add(follow);
			pos = start + 2;			
		}
		return result;
	}  
		public int indexOf(String[] words, String target1, String target2 , int start){
			for(int i=start;i<words.length-2;i++){
				if(words[i].equals(target1) && words[i+1].equals(target2)){
					return i;
				}
			}
			return -1;
		}

}
