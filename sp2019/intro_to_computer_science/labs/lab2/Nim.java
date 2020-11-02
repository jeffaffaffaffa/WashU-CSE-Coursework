package lab2;

import cse131.ArgsProcessor;

public class Nim {

	public static void main(String[] args) {
		ArgsProcessor ap = new ArgsProcessor(args);
		int numSticks = ap.nextInt("How many sticks for this game?");

		int round = 0;
		boolean compTurn = true;
		
		while (numSticks > 2) {
			if (Math.random() < 0.5) {
				int newNumSticks = numSticks - 1;
					System.out.println("Round " + round + ", " + numSticks + " sticks at start, computer took 1, so "
							+ newNumSticks + " sticks remain.");
					numSticks = newNumSticks;
				
			} else {
				int newNumSticks = numSticks - 2;
					System.out.println("Round " + round + ", " + numSticks + " sticks at start, computer took 2, so "
							+ newNumSticks + " sticks remain.");
					numSticks = newNumSticks;
				}
			compTurn = true;
			++round;
			
			if (numSticks > 2 && compTurn) {
				int urTurn = ap.nextInt("Take one or two sticks.");
				while ((urTurn != 1) && (urTurn != 2)) {
					urTurn = ap.nextInt("Please enter only one or two.");
				}
				
				int newNumSticks = numSticks - urTurn;
				System.out.println("Round " + round + ", " + numSticks +
						" sticks at start, human took " + urTurn + ", so " + newNumSticks + " sticks remain.");
				numSticks = newNumSticks;
				++round;
				compTurn = false;
			}
		}
		while (numSticks == 2) {
			if (!compTurn) {
				if (Math.random() < 0.5) {
					int newNumSticks = numSticks - 2;
					System.out.println("Round " + round + ", " + numSticks
							+ " sticks at start, computer took 2, so " + newNumSticks + " sticks remain.");
					compTurn = true;
					numSticks = newNumSticks;
					++round;
					
					if (numSticks == 0) {
						System.out.println("Computer Wins.");
					}
				} else {
					int newNumSticks = numSticks - 1;
					System.out.println("Round " + round + ", " + numSticks + " sticks at start, computer took 1, so " + newNumSticks + " sticks remain." );
					compTurn = true;
					numSticks = newNumSticks;
					++round;
				}	
			} else {
				int urTurn = ap.nextInt("Take one or two sticks.");
				if ((urTurn != 1) && (urTurn != 2)) {
					urTurn = ap.nextInt("Please enter only one or two.");
				}
				
				if (urTurn == 1) {
					int newNumSticks = numSticks - 1;	
					System.out.println("Round " + round + ", " + numSticks + " sticks at start, human took 1, so " + newNumSticks + " sticks remain.");
					numSticks = newNumSticks;
					++round;
					compTurn = false;
				}
				if (urTurn == 2) {
					int newNumSticks = numSticks - 2;
					System.out.println("Round " + round + ", " + numSticks + " sticks at start, human took 2, so " + newNumSticks + " sticks remain.");
					numSticks = newNumSticks;
					++round;
					System.out.println("Human wins.");
				}
			}
			
		
		while (numSticks == 1) {
			if (compTurn) {
				int urTurn = ap.nextInt("Take the only stick left, enter 1.");
				while (urTurn != 1) {
					urTurn = ap.nextInt("Please enter only 1.");
				}
				int newNumSticks = numSticks;
				newNumSticks = numSticks - urTurn;
				System.out.println("Round " + round + ", " + numSticks + " sticks at start, human took 1, so " + newNumSticks
						+ " sticks remain.");
				numSticks = newNumSticks;
					System.out.println("Human wins.");
			} else {
				int newNumSticks = numSticks;
				newNumSticks = numSticks - 1;
				System.out.println("Round " + round + ", " + numSticks + " sticks at start, computer took 1, so " + newNumSticks + " sticks remain.");
				numSticks = newNumSticks;
				System.out.println("Computer wins.");
				
				}
			}
		}
	}
}



