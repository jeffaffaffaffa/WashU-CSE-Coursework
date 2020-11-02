package lab8;

import java.util.Arrays;

public class DensePolynomial implements Polynomial {
	
	private final double[] array;
	
	public DensePolynomial() {
		this.array = new double[1];
		this.array[0]=0;
	}
	
	private DensePolynomial (double [] newArray) {
		this.array = new double[newArray.length];
		for(int i = 0; i<newArray.length; ++i) {
			this.array[i] = newArray[i];
		}
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + Arrays.hashCode(array);
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		DensePolynomial other = (DensePolynomial) obj;
		if (!Arrays.equals(array, other.array))
			return false;
		return true;
	}
	
	/**
	 * double coefficient takes a coefficient value 
	 * takes an int degree value
	 * returns a new polynomial with added term
	 * 
	 * @param coefficient
	 * @param degree
	 * @return newPoly as described above
	 */
	@Override
	public Polynomial addTerm(double coefficient, int degree) {
		
		if (coefficient == 0.0) {
			double [] newArray = new double[array.length];
			for (int i = 0; i < array.length; ++i) {
				newArray[i] = array[i];
			}
			
			DensePolynomial newPoly = new DensePolynomial(newArray);
			return newPoly;
		}
		
		if (degree >= array.length) {
			double [] newArray = new double[degree+1];
			for (int i = 0; i < array.length; ++i) {
				newArray[i] = array[i];
			}
			newArray[degree] = coefficient;
			
			DensePolynomial newPoly = new DensePolynomial(newArray);
			return newPoly;
		}
		
		else {
			double [] newArray = new double[array.length];
			for (int i = 0; i < array.length; ++i) {
				newArray[i] = array[i];
			}
			newArray[degree] += coefficient;
			
			DensePolynomial newPoly = new DensePolynomial(newArray);
			return newPoly;
		}
	}

	/**
	 * returns the degree of this polynomial, which is the 
	 * highest degree term of this poly with non zero coefficients
	 * 
	 * @return the degree of this polynomial
	 */
	@Override
	public int degree() {
		return this.array.length - 1;
	}
	
	/**
	 * takes in int degree
	 * returns coefficient at the degree (index)
	 * if none exists, returns 0.0
	 * 
	 * @param degree of interest
	 * @return coefficient of the degree of interest
	 */
	@Override
	public double getCoefficientAtDegree(int degree) {
		if (degree < this.array.length) {
			return this.array[degree];
		}
		else {
			return 0.0;
		}
	}

	/**
	 * takes in a value for 'x'
	 * solves equation for x and returns
	 * 
	 * @param x value of the unknown
	 * @return the sum of all terms evaluated at x
	 */
	@Override
	public double evaluate(double x) {
		double evaluated = 0.0;
		for (int i = 0; i < this.array.length; ++i) {
			double ans = this.array[i] * Math.pow(x, i);
			evaluated += ans;
		}
		return evaluated;
	}

	/**
	 * returns the derivative of a dense polynomial object
	 * 
	 * @return
	 */
	@Override
	public Polynomial derivative() {
		if (this.array.length > 1) {
			double [] der = new double[this.array.length - 1];
			for (int i = 1; i < this.array.length; ++i) {
				der[i-1] = this.array[i] * i;
			}
			DensePolynomial newPoly = new DensePolynomial(der);
			return newPoly;
		}
		
		else {
			double [] der = new double[1];
			der[0] = 0.0;
			DensePolynomial newPoly = new DensePolynomial(der);
			return newPoly;
		}
	}
	
	/**
	 * return a new polynomial that is the sum of this one and the 
	 * other one. This polynomial remains unchanged
	 * 
	 * @param other polynomial
	 * @return the sum of this and other poly
	 */
	@Override
	public Polynomial sum(Polynomial other) {
		
		if (other.degree() + 1 < this.array.length) {
			double [] summation = new double [this.array.length];
			for (int i = other.degree() + 1; i < this.array.length; ++i) {
				summation[i] = this.array[i];
			}
			for (int i = 0; i < other.degree() + 1; ++i) {
				summation[i] = other.getCoefficientAtDegree(i) + this.array[i];
			}
			DensePolynomial newPoly = new DensePolynomial(summation);
			return newPoly;
		}
		else {
			double [] summation = new double [other.degree() + 1];
			for (int i = this.array.length; i < other.degree() + 1; ++i) {
				summation[i] = other.getCoefficientAtDegree(i);
			}
			for (int i = 0; i < this.array.length; ++i) {
				summation[i] = other.getCoefficientAtDegree(i) + this.array[i];
			}
			DensePolynomial newPoly = new DensePolynomial(summation);
			return newPoly;
		}
	}
	
	public String toString() {
		String poly = "";
		for (int i = 0; i < this.array.length; ++i) {
			if (this.array[i] < 0) {
				if (i == 0) {
					poly += "- " + (-1 * this.array[0]);
				}
				if (i == 1) {
					poly += " - " + (-1 * this.array[1]) + "x";
				}
				if (i > 1) {
					poly += " - " + (-1 * this.array[i]) + "x^" + i;
				}
			}
			else {
				if (i == 0) {
					poly += this.array[0];
				}
				if (i == 1) {
					poly += " + " + this.array[1] + "x";
				}
				if (i > 1) {
					poly += " + " + this.array[i] + "x^" + i;
				}
			}
		}
		return poly;
	}
	
	//to print out and test some arrays/polynomials
	public static void main (String[] args) {
		double[] tester = {1.0, 2.0, 3.0, 4.0};
		double[] tester2 = {-1.0, 2.5, -4.5, 7.0};
		double[] tester3 = {0.0, 0.0, 0.0, 27.5, 1.0, -2.5, 3.14};
		DensePolynomial polyTest = new DensePolynomial (tester);
		DensePolynomial polyTest2 = new DensePolynomial (tester2);
		DensePolynomial polyTest3 = new DensePolynomial (tester3);
		System.out.println("test array 1 is {1.0, 2.0, 3.0, 4.0}.");
		System.out.println("       1) respective polynomial: " + polyTest + ".");
		System.out.println("test array 2 is {-1.0, 2.5, -4.5, 7.0}.");
		System.out.println("       2) respective polynomial: " + polyTest2 + ".");
		System.out.println("test array 3 is {0.0, 0.0, 0.0, 27.5, 1.0, -2.5, 3.14}.");
		System.out.println("       3) respective polynomial: " + polyTest3 + ".");
		System.out.println();
		System.out.println("SoMe SUmMaTioNs:");
		System.out.println("sum of 1 and 2: " + polyTest.sum(polyTest2));
		System.out.println("sum of 1 and 3: " + polyTest.sum(polyTest3));
		System.out.println("sum of 2 and 3: " + polyTest2.sum(polyTest3));
		System.out.println("sum of 2 with itself: " + polyTest2.sum(polyTest2));
		System.out.println();
		System.out.println("adding the term '3.7^7' to polynomial 1:" + 
		polyTest.addTerm(3.7, 7));
		System.out.println();
		System.out.println("derivative of polynomial 2: " + polyTest2.derivative());
		System.out.println();
		System.out.println("evaluate polynomial 1 with x = 3: " + polyTest.evaluate(3));
	}
}