package lab10;

import java.awt.Color;
import java.util.Random;

public class ColorUtils {
	
	public static Color randomColor() {
		Random r = new Random();
		return new Color(r.nextInt(128), r.nextInt(128), r.nextInt(128));
	}
	
	/**
	 * 
	 * @param c a color c
	 * @param frac the level of desired transparency
	 * @return the modified color c
	 */
	public static Color transparent(Color c, double frac) {
		int r = c.getRed();
		int g = c.getGreen();
		int b = c.getBlue();
		return new Color(r, g, b, (int)(frac*255));
	}
	
}
