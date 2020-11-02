package lab9.scenes;

import java.awt.Color;
import java.util.LinkedList;
import java.util.List;

import lab9.Movable;
import lab9.utils.ColorUtils;
import sedgewick.StdDraw;

/**
 * A Circle that can draw and move itself
 * @author roncytron
 *
 */
public class Circle implements Movable {

	private final Color color;
	private final double radius;
	private double x, y;
	
	/**
	 * 
	 * @param x the horizontal coordinate of this Circle
	 * @param y the vertical coordinate of this Circle
	 * @param radius the radius of this Circle
	 */
	public Circle(double x, double y, double radius) {
		List<Color> colors = new LinkedList<>();
		colors.add(Color.CYAN);
		colors.add(Color.DARK_GRAY);
		colors.add(Color.GREEN);
		colors.add(Color.ORANGE);
		colors.add(Color.PINK);
		
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = colors.get((int)(Math.random() * 5));
	}
	
	@Override
	/**
	 * draws the circle
	 */
	public void draw() {
		StdDraw.setPenColor(color);
		StdDraw.filledCircle(x, y, radius);
		
	}

	@Override
	/**
	 * displaces x and y values by dx and dy
	 */
	public void displace(double dx, double dy) {
		this.x = this.x + dx;
		this.y = this.y + dy;
	}

	@Override
	/**
	 * returns x value
	 */
	public double getX() {
		return this.x;
	}

	@Override
	/**
	 * returns y value
	 */
	public double getY() {
		return this.y;
	}
	
	/**
	 * 
	 * @return radius of this
	 */
	public double getR() {
		return this.radius;
	}

}
