package lab9;

import lab9.scenes.Circle;
import lab9.scenes.Square;
import sedgewick.StdDraw;

public class Animator {

	public static void main(String[] args) {
		Circle c = new Circle(0.5, 1.0, 0.02);
		Square r = new Square(0.0, 0.5, 0.02);
		for (int i=0; i < 10000; ++i) {
			StdDraw.show(1);
			StdDraw.clear();
			c.draw();
			r.draw();
			c.displace(0, -.001);
			r.displace(0.001, 0);
			if (r.getX() >= 1)
				r.displace(-r.getX(), 0);
			if (c.getY() <= 0)
				c.displace(0,1-c.getY());
			StdDraw.show(1);
		}

	}

}
