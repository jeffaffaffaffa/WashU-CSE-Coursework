package lab4;

import java.awt.Color;

import sedgewick.StdDraw;

public class Crest {
	
	public static void drawCrest() {
		
		StdDraw.setPenColor(Color.BLACK);
		StdDraw.filledRectangle(0.5, 0.5, 0.5, 0.5);
		
		StdDraw.setPenRadius(0.08);
		StdDraw.setPenColor(Color.RED);
		StdDraw.rectangle(0.5, 0.5, 0.5, 0.5);
		
		Color g = new Color(128, 128, 128);
		
		for (double y = 0.0; y < 1.0; y = y + 0.1) {
			for (double x = 0.0; x < 1.0; x = x + 0.1) {
				StdDraw.setPenRadius(0.01);
				StdDraw.setPenColor(Color.BLACK);
				StdDraw.filledCircle(x, y, 0.05);
			}
		}
		
		for (double y = 0.0; y<1.0; y = y + 0.1) {
			StdDraw.setPenRadius(0.02);
			StdDraw.setPenColor(Color.WHITE);
			StdDraw.line(0.0, y, 1.0, y);
		}
		
		for (double x = 0.0; x<1.0; x = x + 0.1) {
			StdDraw.setPenRadius(0.02);
			StdDraw.setPenColor(g);
			StdDraw.line(x, 0.0, x, 1.0);
		}
		
		StdDraw.setPenColor(Color.RED);
		StdDraw.setPenRadius(0.02);
		StdDraw.filledCircle(0.5, 0.5, 0.4);
		
		StdDraw.setPenColor(Color.ORANGE);
		StdDraw.setPenRadius(0.02);
		StdDraw.filledCircle(0.5, 0.5, 0.3);
		
		StdDraw.setPenColor(Color.YELLOW);
		StdDraw.setPenRadius(0.02);
		StdDraw.filledCircle(0.5, 0.5, 0.2);
		
		StdDraw.setPenColor(Color.WHITE);
		StdDraw.setPenRadius(0.04);
		StdDraw.line(0.3, 0.75, 0.7, 0.78);
		StdDraw.line(0.2, 0.34, 0.8, 0.39);
		StdDraw.line(0.28, 0.65, 0.33, 0.44);
		StdDraw.line(0.29, 0.62, 0.71, 0.655);
		StdDraw.line(0.72, 0.67, 0.67, 0.46);
		StdDraw.line(0.32, 0.47, 0.68, 0.5);
		StdDraw.line(0.38, 0.545, 0.62, 0.565);
		StdDraw.line(0.5, 0.9, 0.5, 0.1);
		
		StdDraw.setPenColor(Color.BLACK);
		StdDraw.setPenRadius(0.01);
		StdDraw.line(0.3, 0.75, 0.7, 0.78);
		StdDraw.line(0.2, 0.34, 0.8, 0.39);
		StdDraw.line(0.28, 0.65, 0.33, 0.44);
		StdDraw.line(0.29, 0.62, 0.71, 0.655);
		StdDraw.line(0.72, 0.67, 0.67, 0.46);
		StdDraw.line(0.32, 0.47, 0.68, 0.5);
		StdDraw.line(0.38, 0.545, 0.62, 0.565);
		StdDraw.line(0.5, 0.9, 0.5, 0.1);
		
		for (double x = 0.1; x<0.9; x = x + 0.1) {
			StdDraw.setPenRadius(0.008);
			StdDraw.setPenColor(Color.RED);
			StdDraw.filledCircle(x, 0.05, 0.025);
		}
		
		for (double x = 0.1; x<0.9; x = x + 0.1) {
			StdDraw.setPenRadius(0.002);
			StdDraw.setPenColor(Color.YELLOW);
			StdDraw.filledCircle(x, 0.05, 0.01);
		}
		
		for (double x = 0.1; x<0.9; x = x + 0.1) {
			StdDraw.setPenRadius(0.008);
			StdDraw.setPenColor(Color.RED);
			StdDraw.filledCircle(x, 0.95, 0.025);
		}
		
		for (double x = 0.1; x<0.9; x = x + 0.1) {
			StdDraw.setPenRadius(0.002);
			StdDraw.setPenColor(Color.YELLOW);
			StdDraw.filledCircle(x, 0.95, 0.01);
		}
		
		for (double y = 0.1; y<0.9; y = y + 0.1) {
			StdDraw.setPenRadius(0.008);
			StdDraw.setPenColor(Color.RED);
			StdDraw.filledCircle(0.05, y, 0.025);
		}
		
		for (double y = 0.1; y<0.9; y = y + 0.1) {
			StdDraw.setPenRadius(0.002);
			StdDraw.setPenColor(Color.YELLOW);
			StdDraw.filledCircle(0.05, y, 0.01);
		}
		
		for (double y = 0.1; y<0.9; y = y + 0.1) {
			StdDraw.setPenRadius(0.008);
			StdDraw.setPenColor(Color.RED);
			StdDraw.filledCircle(0.95, y, 0.025);
		}
		
		for (double y = 0.1; y<0.9; y = y + 0.1) {
			StdDraw.setPenRadius(0.002);
			StdDraw.setPenColor(Color.YELLOW);
			StdDraw.filledCircle(0.95, y, 0.01);
		}
		
	}
	
}
