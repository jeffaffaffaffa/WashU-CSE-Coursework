package lab1;

import cse131.ArgsProcessor;

public class Nutrition {

	public static void main(String[] args) {
		ArgsProcessor ap = new ArgsProcessor(args);
		String name = ap.nextString("Food name?");
		double carbsGrams = ap.nextDouble("How many grams of carbs?");
		double fatGrams = ap.nextDouble("How many grams of fat?");
		double proteinGrams = ap.nextDouble("How many grams of protein?");
		int statedCals = ap.nextInt("How many calories stated on label?");
		System.out.println(name + " has:");
		double caloriesCarbs = 4 * carbsGrams;
		double caloriesFat = 9 * fatGrams;
		double caloriesProtein = 4 * proteinGrams;
		double technicalCals = caloriesCarbs + caloriesFat + caloriesProtein;
		double dietaryFiberCals = technicalCals - statedCals;
		double dietaryFiberGrams = dietaryFiberCals / 4;
		
		double a = caloriesFat;
		double properlyRoundedFatCals = Math.round(a*100)/100d;
		
		double b = dietaryFiberCals;
		double properlyRoundedFiberCals = Math.round(b*100)/100d;
		
		double c = dietaryFiberGrams;
		double properlyRoundedFiberGrams = Math.round(c*100)/100d;
		
		System.out.println("   " + carbsGrams + " grams of carbohydrates = " + caloriesCarbs + " calories.");
		System.out.println("   " + fatGrams + " grams of fat = " + properlyRoundedFatCals + " calories.");
		System.out.println("   " + proteinGrams + " grams of protein = " + caloriesProtein + " calories.");
		
		System.out.println(" ");
		System.out.println(name + " is said to have " + statedCals + " (available) calories.");
		System.out.println("With " + properlyRoundedFiberCals + " unavailable calories, " + name + " has " + properlyRoundedFiberGrams + " grams of fiber.");
		
		System.out.println(" ");
		System.out.println("Approximately:");
		
		double fracCarbs = (caloriesCarbs / statedCals);
		double fracFat = (caloriesFat / statedCals);
		double fracProtein = (caloriesProtein / statedCals);
		
		double a1 = fracCarbs;
		double properlyRoundedPCarbs = (double) Math.round((a1*100)*10) / 10;
		
		double b1 = fracFat;
		double properlyRoundedPFat = (double) Math.round((b1*100)*10) / 10;
		
		double c1 = fracProtein;
		double properlyRoundedPProtein = (double) Math.round((c1*100)*10) / 10;
		
		System.out.println("   " + properlyRoundedPCarbs + "% of " + name + " is carbs.");
		System.out.println("   " + properlyRoundedPFat + "% of " + name + " is fat.");
		System.out.println("   " + properlyRoundedPProtein + "% of " + name + " is protein.");
		
		System.out.println(" ");
		
		boolean lowCarb = properlyRoundedPCarbs < 25;
		if (lowCarb) {
			System.out.println("Is " + name + " acceptable for a low-carb diet?   Yes.");
		}
		else {
			System.out.println("Is " + name + " acceptable for a low-carb diet?   No.");
		}
		
		boolean lowFat = properlyRoundedPFat < 15;
		if (lowFat) {
			System.out.println("Is " + name + " acceptable for a low-fat diet?   Yes.");
		}
		else {
			System.out.println("Is " + name + " acceptable for a low-fat diet?   No.");
		}
		
		boolean coinFlip = Math.random() < 0.5;
		if (coinFlip) {
			System.out.println("By a coin flip, should you eat " + name + "?   Yes.");
		}
		else {
			System.out.println("By a coin flip, shold you eat " + name + "?   No.");
		}
	}
}