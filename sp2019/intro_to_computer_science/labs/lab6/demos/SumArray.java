package lab6.demos;

public class SumArray {
	
	public static int sum(int[] array) {  // front door
		return helper(array, 0);          // kick off recursion at 0
	}
	
	// we need a helper method because the signature of the method
	//  needed for recursion includes the index i
	// while the signature we want to present to the outside world
	//    uses just the array and no specified index.
	
	//  the sum of an array starting at element i
	//  is the value at i + the sum of the rest of the array
	//
	
	private static int helper(int[] array, int i) {
		// base case is when we have no more array left
		//
		if (i >= array.length) {
			return 0;
		}
		return array[i] + helper(array, i+1);
	}
	
	

}
