package lab5;

public class Lab5Methods {
	
	/**
	 * 
	 * @param n an integer
	 * @return a sum of n and all ints 2 down before becomes negative
	 */
	public static int sumDownBy2(int n) {
		int sum = 0;
		for (int i = 0; i < n; i = i+2) {
			sum = sum + (n - i);
		}
		return sum;
	}
	
	/**
	 * 
	 * @param n postive int n
	 * @return a harmonic sum, 1 plus 1 over 1 + 1 plus ... 1/n-1 + 1/n
	 */
	public static double harmonicSum(int n) {
		double sum = 0;
		for (int i = 1; i <= n; ++i) {
			sum = (sum + (1/(double)i));
		}
		return sum;
	}
	
	/**
	 * 
	 * @param k non neg integer k
	 * @return a geometric sum, 1 plus 1/1 + 1/2 + 1/4 + ... + 1/2^k
	 */
	public static double geometricSum(int k) {
		double sum = 0;
		for (int i = 0; i<=k; ++i) {
			sum = (sum + (1/(double)Math.pow(2, i)));
		}
		return sum;
	}
	
	/**
	 * 
	 * @param h one int to add
	 * @param i second int to add
	 * @return sum of two
	 */
	public static int add(int h, int i) {
		return h + i;
	}
	
	/**
	 * 
	 * @param j one factor
	 * @param k another factor
	 * @return product of two factors
	 */
	public static int multPos(int j, int k) {
		int sum = 0;
		for (int i = 0; i < k; ++i) {
			sum = add(sum, j);
		}
		return sum;
	}
	
	/**
	 * 
	 * @param j one factor
	 * @param k another factor
	 * @return product of two factors, but setting j and k to abs value and going from there.
	 */
	public static int mult(int j, int k) {
		int ans = 0;
		int x = 1;
		
		if (j < 0) {
			x = -1;
		}
		if (k < 0) {
			x = -1;
		}
		if (k < 0 && j < 0) {
			x = 1;
		}
		
		j = Math.abs(j);
		k = Math.abs(k);
		
		ans = multPos(j, k);
		ans = x*ans;
		return ans;
	}
	
	/**
	 * 
	 * @param n int n
	 * @param k int k, number of n that mutliply each other
	 * @return the product of k number of n.
	 */
	public static int expt(int n, int k) {
		if (k == 0) {
			return 1;
		}
		else {
			return n * expt(n, k-1);
		}
	}
}




