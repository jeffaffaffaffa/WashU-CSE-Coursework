package lab6.demos;

import java.util.Arrays;

public class ArrayModDemo {
	
	public static void main(String[] args) {
		int[] nums = new int [] { 1, 2, 3, 4, 5 };
		int   n    = 131;
		System.out.println("Before calling foo");
		System.out.println("   nums is " + Arrays.toString(nums));
		System.out.println("   n    is " + n);
		
		foo(nums, n);

		System.out.println("After return from foo");
		System.out.println("   nums is " + Arrays.toString(nums));
		System.out.println("   n    is " + n);
		
	}
	
	//
	// Any *assignments* to array or var
	//
	//    array =
	//    var   =
	//
	//    would affect only their values in foo
	//    and not in the main method that calls foo
	//
	private static void foo(int[] array, int var) {
		System.out.println("      Foo now running");
		System.out.println("         array " + Arrays.toString(array));
		System.out.println("         var    " + var);
		
		var = 247;
		// array = new int[] { 100, 200 };
		array[1] = 1000; // this however, doesn't assign array
		                 // it changes an element of the array
		                 // the caller of foo will see this change on return
		
		System.out.println("      Foo about to return");
		System.out.println("         array is " + Arrays.toString(array));
		System.out.println("         var   is " + var);
		
	}

}
