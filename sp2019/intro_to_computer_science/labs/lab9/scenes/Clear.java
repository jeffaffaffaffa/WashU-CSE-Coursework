package lab9.scenes;

import java.awt.Color;

import lab9.Drawable;
import sedgewick.StdDraw;

/**
 * Clear the screen by drawing a large WHITE filledRectangle
 * 
 * @author roncytron
 *
 */
public class Clear implements Drawable {

	@Override
	public void draw() {
		StdDraw.setPenColor(Color.WHITE);
		//
		// much larger than needed
		//
		StdDraw.filledRectangle(0.5, 0.5, 2, 2);
	}

}
