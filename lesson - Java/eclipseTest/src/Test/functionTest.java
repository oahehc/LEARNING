package Test;

import java.util.Random;

import org.junit.Test;

public class functionTest {
	@Test
	public void nextIntTest(){
		Random myRandom = new Random();
		System.out.println(myRandom);
		int intRandom = myRandom.nextInt();
		System.out.println(intRandom);
		intRandom = myRandom.nextInt(100);
		System.out.println(intRandom);
		
	}
}
