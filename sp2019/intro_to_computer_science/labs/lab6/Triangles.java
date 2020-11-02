package lab6;

import java.awt.Color;

import sedgewick.StdDraw;

public class Triangles {

	public static void main(String[] args) {
		
		StdDraw.setXscale(0, 1);
		StdDraw.setYscale(0, 1);
		StdDraw.setPenRadius(0.004);
		StdDraw.setPenColor(Color.BLACK);
		
		double [] x = {0, 1, 0.5};
		double [] y = {0, 0, (Math.sqrt(3))/2};
		
		StdDraw.filledPolygon(x, y);
		
		triangles(x, y, 1);
	}
	
	
	/**
	 * 
	 * @param xcoord of the triangle
	 * @param ycoord of the triangle
	 * @param n number of iterations
	 */
	public static void triangles(double []xcoord, double []ycoord, int n) {
		int i = n;
		if (i > 4) {
			return;
		}
		
		double x1 = xcoord[0];
		double x2 = xcoord[1];
		double x3 = xcoord[2];
		
		double y1 = ycoord[0];
		double y2 = ycoord[1];
		double y3 = ycoord[2];
		
		double ex1 = x1 + (x2-x1)/4;
		double ex2 = x1 + (x2-x1)/2;
		double ex3 = x1 + (3.0/4)*(x2-x1);
		
		double why1 = (y3+y1)/2;
		double why2 = y1;
		double why3 = (y3+y1)/2;
		
		double [] excoord = {ex1, ex2, ex3};
		double [] whycoord = {why1, why2, why3};

		
		StdDraw.setPenColor(Color.WHITE);
		StdDraw.filledPolygon(excoord, whycoord);
		
		double [] exxcoord = {x1, ex2, ex1};
		double [] whyycoord = {y1, why2, why1};
		
		double [] exxxcoord = {ex2, x2, ex3};
		double [] whyyycoord = {why2, y2, why3};
		
		double [] exxxxcoord = {ex1, ex3, x3};
		double [] whyyyycoord = {why1, why3, y3};
		
		//checking values
		System.out.println(why1);
		System.out.println(why3);
		System.out.println(y3);
		
		i++;
		
		triangles(exxcoord, whyycoord, i);
		triangles(exxxcoord, whyyycoord, i);
		triangles(exxxxcoord, whyyyycoord, i);
	}
	
	

}


