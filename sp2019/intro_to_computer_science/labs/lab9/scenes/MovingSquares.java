package lab9.scenes;

import lab9.Drawable;

public class MovingSquares implements Drawable {
	
	private Square[] sands;
	
	/**
	 * 
	 * @param num takes in number of desired squares and generates an array of them
	 */
	public MovingSquares(int num) {
		this.sands = new Square[num];
		for (int i=0; i < num; ++i) {
			sands[i] = new Square(Math.random(), Math.random()*(-20), Math.random()/20);
		}
	}

	@Override
	/**
	 * draws every square in sands array
	 */
	public void draw() {
		for (Square c : sands) {
			c.draw();
		}
	}
	
	/**
	 * displaces every square in sands array
	 */
	public void move() {
		for (int i = 0; i < sands.length; ++i) {
			this.sands[i].displace(0, 0.003);
		}
	}

}
