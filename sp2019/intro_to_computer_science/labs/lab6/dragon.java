package lab6;

import java.awt.Color;

import sedgewick.StdDraw;

public class dragon {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		StdDraw.setXscale(0, 1);
		StdDraw.setYscale(0, 1);
		StdDraw.setPenRadius(0.004);
		StdDraw.setPenColor(Color.BLACK);
		
		
		
		double x0 = 0.5;
		double y0 = 0.5;
		StdDraw.line(x0, y0, x0+0.25, y0);
			
		dragons(0);
	}
	
	public static void dragons(int n) {
		String command = "F-H";
		command.replaceAll("F", "F-H");
		command.replaceAll("H", "F+H");
		int i = n;
		
		if (i > 4) {
			return;
		}
		for (int i = 0; i<command.length(); i++) {
			if (command.charAt(i) == 'F') {
				StdDraw.line(x0, y0, x0+0.25, y0+0.25);
			}
			if (command.charAt(i) == '-') {
				
			}
		}
		
	}
	}


