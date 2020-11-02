package lab7;

public class Course {
	private String name;
	private int credits;
	private int capacity;
	private int registered;
	
	private Student[] roster;
	
	/**
	 * 
	 * @param name name of course
	 * @param credits int number of credits for course
	 * @param capacity max number of students allowed
	 */
	public Course(String name, int credits, int capacity) {
		this.name = name;
		this.credits = credits;
		this.capacity = capacity;
		this.registered = 0;
		this.roster = new Student[capacity]; 
	}
	
	/**
	 * 
	 * @return returns the name of current course object
	 */
	public String getName() {
		return this.name;
	}
	
	/**
	 * 
	 * @return returns credits of current course object
	 */
	public int getCredits() {
		return this.credits;
	}
	
	/**
	 * 
	 * @return returns capacity of current course object
	 */
	public int getCapacity() {
		return this.capacity;
	}
	
	/**
	 * 
	 * @param s a student s that can be added to the list if not already on the list
	 * @return returns false of true, depending on if in list
	 */
	public boolean addStudent(Student s) {
		if (registered == capacity) {
			return false;
		}
		
		for (int i = 0; i < registered; ++i) {
			int id = s.getId();
			int id2 = roster[i].getId();
			if(id == id2) {
				return false;
			}
		}
		
		roster[registered] = s;
		++registered;
		return true;
	}
	
	/**
	 * 
	 * @return returns the int seats remaining as a difference between capacity and number of registered students
	 */
	public int getSeatsRemaining() {
		return this.capacity - this.registered;
	}
	
	/**
	 * 
	 * @return returns the names of the registered students; the roster
	 */
	public String generateRoster() {
		String names = "";
		for (int i = 0; i < registered; ++i) {
			names += roster[i] + " ";
		}
		return names;
	}
	
	/**
	 * 
	 * @return returns the average gpa of all registered in the course
	 */
	public double calculateAverageGPA() {
		double gpaTotal = 0;
		for (int i = 0; i < registered; ++i) {
			gpaTotal += roster[i].calculateGradePointAverage();
		}
		return gpaTotal/this.registered;
	}
	
	/**
	 * @return returns the info relevant to the course
	 */
	public String toString() {
		return "course number: " + this.name + "| credits: " + this.credits;
	}
}
