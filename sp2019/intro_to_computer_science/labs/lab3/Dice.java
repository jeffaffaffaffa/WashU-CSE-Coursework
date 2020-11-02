package lab3;

import cse131.ArgsProcessor;

public class Dice {

	public static void main(String[] args) {
		ArgsProcessor ap = new ArgsProcessor(args);
		int numDice = ap.nextInt("How many dice?");
		int numThrows = ap.nextInt("How many throws?");
		
		int [][] array = new int[numThrows][numDice];
		boolean sameDiceCounter = true;
		int sDCounter = 0;
		
		System.out.println("Dice Values for " + numDice + " Dice and " + numThrows + " Throws:");
		System.out.println("-------------------------------------");
		
		int sumCounter = 0;
		int [] arrayTwo = new int[numDice * 6];
		
		for (int i = 0; i < arrayTwo.length; i++) {
			arrayTwo [i] = 0;
		}

		for (int i = 0; i < array.length; i = i + 1) {
		
			for (int j = 0; j < array[i].length; j = j + 1) {
				int diceValue = ((int)(Math.random() * 6) + 1);
				array[i][j] = diceValue;
				System.out.print(array[i][j] + " ");
				sumCounter += diceValue;	
			}
			
			arrayTwo [sumCounter - 1]++;
			System.out.println("\t \t Sum: " + sumCounter);
			sumCounter = 0;
			System.out.println();
			
		}
		
		for (int z = 0; z < array.length; z++) {
			for (int k = 0; k < array[z].length; k++) {
				for (int l = k + 1; l < array[z].length; l++) {
					if (array[z][k] != array[z][l]) {
						sameDiceCounter = false;
					}		
				}
			}
			if (sameDiceCounter) {
				sDCounter++;
			}	
			sameDiceCounter = true;
		}
		
		for (int x = 0; x < arrayTwo.length; ++x) {
			double percent = Math.round((((double) arrayTwo[x] / (double) numThrows) * 100.0) * 100.0) / 100d;
			if (arrayTwo[x] != 0) 
				System.out.println("Sum: " + (x + 1) + ". Number of times this sum was seen: " + arrayTwo[x] + ". Percentage of total throws: " + percent + "%");
		}
		
		System.out.println();
		double ratio = Math.round((((double)sDCounter / numThrows) * 100.0) * 100.0) / 100d;
		System.out.println("Percentage of throws where all dice had same value: " + ratio + "%");
		
	}
}
	
