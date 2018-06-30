package RandomText;

import java.util.ArrayList;

import org.junit.Test;

public class WordGramTester {

	public WordGramTester() {
		// TODO Auto-generated constructor stub
	}

	@Test	
	public void testWordGram(){
		String source = "this is a test this is a test this is a test of words";
		String[] words = source.split("\\s+");
		int size = 4;
		for(int index=0; index<=words.length-size; index++){
			WordGram wg = new WordGram(words,index,size);
			System.out.println(index + "\t" +wg.length() + "\t" + wg);
			WordGram wgShift = wg.shiftAdd("shift");
			System.out.println(index + "\t" +wgShift.length() + "\t" + wgShift);
		}
	}

	public void testWordGramEquals(){
		String source = "this is a test this is a test this is a test of words";
		String[] words = source.split("\\s+");
		ArrayList<WordGram> list = new ArrayList<WordGram>();
		int size=4;
		for(int index=0; index<=words.length-size; index++){
			WordGram wg = new WordGram(words,index,size);
			list.add(wg);
		}
		WordGram first = list.get(0);
		System.out.println("checking: " + first);
		for(int i=0;i<list.size();i++){
			if(first.equals(list.get(i))){
				System.out.println("matched at: " + i + " " + list.get(i));
			}
		}
	}
	
}
