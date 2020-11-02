package lab9.scenes;

import lab9.Drawable;

public class Bubbles implements Drawable {
	
	private Circle[] bubbles;
	private Circle[] other;
	private Circle[] something;
	private Circle[] reallyWeird;
	
	/**
	 * 
	 * @param num takes in desired number of bubbles and stores them in several arrays
	 */
	public Bubbles(int num) {
		this.bubbles = new Circle[num];
		this.other = new Circle[num];
		this.something = new Circle[num];
		this.reallyWeird = new Circle[num];
		
		for (int i=0; i < num; ++i) {
			bubbles[i] = new Circle(Math.random(), Math.random()*(-20), Math.random()/20);
			other[i] = new Circle(Math.random()*(-20), Math.random(), Math.random()/20);
			something[i] = new Circle(Math.random(), Math.random()*(20), Math.random()/20);
			reallyWeird[i] = new Circle (Math.random()*(20), Math.random()*(-20), Math.random()/20);
		}
	}

	/**
	 * draws every circle c in every array
	 */
	@Override
	public void draw() {
		for (Circle c : bubbles) {
			c.draw();
		}
		for (Circle c : other) {
			c.draw();
		}
		for (Circle c : something) {
			c.draw();
		}
		for (Circle c : reallyWeird) {
			c.draw();
		}
	}	

	/**
	 * displaces bubbles vertically
	 */
	public void move() {
		for (int i = 0; i < bubbles.length; ++i) {
			this.bubbles[i].displace(0, 0.003);
		}
	}
	
	/**
	 * displaces other bubbles horizontally
	 */
	public void moveLeftRight() {
		for (int i = 0; i < other.length; ++i) {
			this.other[i].displace(0.005, 0);
		}
	}
	
	/**
	 * displaces vertically top down
	 */
	public void moveTopDown() {
		for (int i = 0; i < something.length; ++i) {
			this.something[i].displace(0, -0.008);
		}
	}
	
	/**
	 * displaces bottom right to the top left
	 */
	public void moveBottomRightTopLeft() {
		for (int i = 0; i < reallyWeird.length; ++i) {
			this.reallyWeird[i].displace(-0.009, 0.009);
		}
	}

}
