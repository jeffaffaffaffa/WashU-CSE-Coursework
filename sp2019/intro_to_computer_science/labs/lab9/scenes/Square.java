package lab9.scenes;

import java.awt.Color;

import lab9.Movable;
import lab9.utils.ColorUtils;
import sedgewick.StdDraw;

public class Square implements Movable {

	private final Color color;
	private final double radius;
	private double x, y;
	
	public Square(double x, double y, double radius) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = Color.BLACK;
	}
	
	@Override
	public void draw() {
		StdDraw.setPenColor(color);
		StdDraw.filledSquare(x, y, radius);
		
	}

	@Override
	public void displace(double dx, double dy) {
		this.x = this.x + dx;
		this.y = this.y + dy;
	}

	@Override
	public double getX() {
		return this.x;
	}

	@Override
	public double getY() {
		return this.y;
	}
	
	public double getW() {
		return 2*radius;
	}

}
