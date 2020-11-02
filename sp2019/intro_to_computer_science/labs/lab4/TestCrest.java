package lab4;

import static org.junit.Assert.*;

import org.junit.Test;

import cse131.ArgsProcessor;

public class TestCrest {

	@Test
	public void test() {
		Crest.drawCrest();
		ArgsProcessor ap = new ArgsProcessor(new String[] {});
		boolean isGood = ap.nextBoolean("You like this? (true or false)");
		assertTrue(isGood);
	}

}
