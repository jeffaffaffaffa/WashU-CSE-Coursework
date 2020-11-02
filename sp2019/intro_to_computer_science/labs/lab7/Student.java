package lab7;

public class Student {
	private String firstName;
	private String lastName;
	private final int id;
	
	private int totalAttemptedCredits;
	private int totalPassingCredits;
	private double totalGradeQualityPoints;
	private double bearBucksBalance;
	private int worry;
	
	/**
	 * 
	 * @param firstName string first name of the student
	 * @param lastName string last name of the student
	 * @param id int id number of the student
	 */
	public Student(String firstName, String lastName, int id) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.id = id;
		this.totalAttemptedCredits = 0;
		this.totalPassingCredits = 0;
		this.totalGradeQualityPoints = 0;
		this.bearBucksBalance = 0;
		this.worry = 0;
	}
	
	/**
	 * 
	 * @return returns the first name of the current student object
	 */
	public String getFirstName() {
		return this.firstName;
	}
	
	/**
	 * 
	 * @return returns the last name of the current student object
	 */
	public String getLastName() {
		return this.lastName;
	}
	
	/**
	 * 
	 * @return returns the string concatenation of the first and last names of the current student object to make full name
	 */
	public String getFullName() {
		return this.firstName + " " + this.lastName;
	}
	
	/**
	 * 
	 * @return returns the id number of the current student object
	 */
	public int getId() {
		return this.id;
	}
	
	/**
	 * 
	 * @param grade double grade value of student
	 * @param credits int credits that student has taken
	 * calculates quality points
	 * determines if student has passing credits and increments it along with quality points and attempted credits
	 */
	public void submitGrade(double grade, int credits) {
		this.worry = 0;
		double qualityPoints = grade * (double)credits;
		this.totalGradeQualityPoints += qualityPoints;
		this.totalAttemptedCredits += credits;
		if (grade >= 1.7) {
			this.totalPassingCredits += credits;
		}
	}
	
	/**
	 * 
	 * @return returns the total attempted credits of the current student object
	 */
	public int getTotalAttemptedCredits() {
		return this.totalAttemptedCredits;
	}
	
	/**
	 * 
	 * @return returns the total passing credits of the current student object
	 */
	public int getTotalPassingCredits() {
		return this.totalPassingCredits;
	}
	
	/**
	 * 
	 * @return returns the quotient of grade quality points and total credits to calculate GPA
	 * also increments worry of current student object every time that this method is called
	 */
	public double calculateGradePointAverage() {
		this.worry += 1;
		return this.totalGradeQualityPoints/this.totalAttemptedCredits;
	}
	
	/**
	 * 
	 * @return returns the class standing of the current student object depending on the total number of passing credits that they have 
	 */
	public String getClassStanding() {
		if (this.totalPassingCredits < 30) {
			return "FirstYear";
		}
		if (30 <= this.totalPassingCredits && this.totalPassingCredits < 60) {
			return "Sophomore";
		}
		if (60 <= this.totalPassingCredits && this.totalPassingCredits < 90) {
			return "Junior";
		}
		else {
			return "Senior";
		}
	}
	
	/**
	 * 
	 * @return returns a true or false for whether current student object is eligible for PBK based on GPA
	 */
	public boolean isEligibleForPhiBetaKappa() {
		if (3.60 <= (this.totalGradeQualityPoints/this.totalAttemptedCredits) && 98 <= this.totalAttemptedCredits){
			return true;
		}
		if (3.80 <= (this.totalGradeQualityPoints/this.totalAttemptedCredits) && 75 <= this.totalAttemptedCredits) {
			return true;
		}
		else {
			return false;
		}
	}
	
	/**
	 * 
	 * @param amount adds double amount of bear bucks to the current student object's running total
	 */
	public void depositBearBucks(double amount) {
		this.bearBucksBalance += amount;
	}
	
	/**
	 * 
	 * @param amount subtracts double amount of bear bucks from the current student object's running total
	 */
	public void deductBearBucks(double amount) {
		this.bearBucksBalance -= amount;
	}
	
	/**
	 * 
	 * @return returns the bear bucks balance of the current student object
	 */
	public double getBearBucksBalance() {
		return this.bearBucksBalance;
	}
	
	/**
	 * 
	 * @return returns what can be cashed out from the current student object's bear bucks account
	 * if more than 10, takes a 10 bb fee
	 * else it zeros the balance
	 */
	public double cashOutBearBucks() {
		double bbB = this.bearBucksBalance;
		this.bearBucksBalance = 0;
		if (10 < bbB) {
			return bbB - 10;
		}
		else {
			return 0;
		}
	}
	
	/**
	 * 
	 * @param firstName first name string of student
	 * @param otherParent other parent's last name in addition to this student's parent (has two parents)
	 * @param isHyphenated boolean on whether or not last name of student should be a "hypenated concatenation" of both parents' last names
	 * @param id int id number of student
	 * @return returns info necessary for the created legacy student
	 */
	public Student createLegacy(String firstName, Student otherParent, boolean isHyphenated, int id) {
		String lastName = "";
		
		if (isHyphenated) {
			lastName = this.getLastName() + "-" + otherParent.getLastName();
		}
		else {
			lastName = this.getLastName();
		}
		
		double combinedBBB = this.cashOutBearBucks() + otherParent.cashOutBearBucks();
		Student legacy = new Student (firstName, lastName, id);
		legacy.depositBearBucks(combinedBBB);
		return legacy;
	}
	
	/**
	 * @return returns the string concatenation of the first name, last name, and student id
	 */
	public String toString() {
		return this.firstName + " " + this.lastName + " " + this.id;
	}
	
	/**
	 * 
	 * @return returns the worry factor of the current student object, based on the number of times the calculateGradePointAverage method is called
	 */
	public String worryFactor() {
		return "worry factor: " + this.worry;
	}
}
