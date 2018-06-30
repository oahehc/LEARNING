package RandomText;

import java.util.Arrays;

public class WordGram {
	private String[] myWords;
	private int myHash;

	public WordGram(String[] source,int start, int size) {
		myWords = new String[size];
		System.arraycopy(source, start, myWords, 0, size);
	}

	public String wordAt(int index){
		if(index<0 || index>=myWords.length){
			throw new IndexOutOfBoundsException("bad index "+index);
		}
		return myWords[index];
	}
	
	public int length(){
		return myWords.length;
	}
	
	public String toString(){
		String result = "";
		for(int i=0;i<myWords.length;i++){
//			result += (i + " -> " + myWords[i] + ", ");
			result += myWords[i] + " ";
		}
		return result;
	}
//	public boolean equals(Object o){
//		WordGram other = (WordGram) o;//let program check Object o as WordGram
//		if(this.length() != other.length()) return false;
//		for(int i=0;i<this.length();i++){
//			if(!this.wordAt(i).equals(other.wordAt(i))) return false;
//		}
//		return true;
//	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		WordGram other = (WordGram) obj;
		if (!Arrays.equals(myWords, other.myWords))
			return false;
		return true;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + Arrays.hashCode(myWords);
		return result;
	}	
	
	
	public WordGram shiftAdd(String word){
		WordGram out = new WordGram(myWords,0,myWords.length);
		for(int i=0;i<out.length()-1;i++){
			out.myWords[i] = out.myWords[i+1];
		}
		out.myWords[out.length()-1] = word;
		return out;
	}
	
}
