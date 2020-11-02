package lab10;

import java.awt.Color;
import java.awt.event.KeyEvent;
import java.util.LinkedList;
import java.util.List;
import java.util.Random;

import cse131.ArgsProcessor;
import lab9.Drawable;
import lab9.scenes.Bubbles;
import lab9.scenes.Circle;
import lab9.scenes.MovingSquares;
import lab9.scenes.Sequence;
import lab9.scenes.Square;
import sedgewick.StdDraw;
import studio10.BackgroundSong;
import studio10.ColorUtils;

public class Main {
	public static void main(String[] args) {
		
		ArgsProcessor ap = new ArgsProcessor(args);
		
		double px = 0.33;  // x location of the first player
		double py = 0.0;  // y location of the first player
		
		double ox = 0.66; // x location of second player
		double oy = 0.0; // y location of second player
		
		int x = 20;
		int i = 0;
		
		//some moving squares generated to distract player
		MovingSquares sands = new MovingSquares(100);
		Bubbles random = new Bubbles(100);
		Bubbles otherThing = new Bubbles(100);
		Bubbles lastThing = new Bubbles(100);
		
		//list to store obstacles and treasures that will be drawn
		List<Square> allObstacles = new LinkedList<>();
		List<Circle> allTreasures = new LinkedList<>();
		
		
		int numObstacles = 20*(int)(Math.random() + 1);
		int numTreasure = 8*(int)(Math.random() + 1);
		
		//add randomly placed obstacles (squares) to list
		for (int j = 0; j < numObstacles; ++j) {
			Square obstacle = new Square (Math.random(), 0.03 + Math.random(), 0.03);
			allObstacles.add(obstacle);
		}
		
		//add randomly placed treasures (circles) to list
		for (int k = 0; k < numTreasure; ++k) {
			Circle treasure = new Circle (Math.random(), Math.random(), 0.05);
			allTreasures.add(treasure);
		}
		
		
		int totalPoints = 0;
		int secTotalPoints = 0;
		int pauseInc = 0;
		int secPauseInc = 0;
		boolean pause = false;
		boolean secondPause = false;
		Color c = null;
		
		BackgroundSong sbsp = new BackgroundSong("boing3.wav");
		sbsp.playAlways();
		
		while (true) {
			StdDraw.clear();		

			//background is set to a color/scene
			StdDraw.picture(0.5, 0.5, "images/underwater.jpg", 1.2, 1.2);
			
			//WASD moves the circle for player one
			if (checkFor(KeyEvent.VK_A) && (pause == false)) {
				px = px - 0.005;
			}
			if (checkFor(KeyEvent.VK_D) && (pause == false)) {
				px = px + 0.005;
			}
			if (checkFor(KeyEvent.VK_W) && (pause == false)) {
				py = py + 0.005;
			}
			if (checkFor(KeyEvent.VK_S) && (pause == false)) {
				py = py - 0.005;
			}
			
			//second player movement with arrow keys
			if (checkFor(KeyEvent.VK_LEFT) && (secondPause == false)) {
				ox = ox - 0.005;
			}
			if (checkFor(KeyEvent.VK_RIGHT) && (secondPause == false)) {
				ox = ox + 0.005;
			}
			if (checkFor(KeyEvent.VK_UP) && (secondPause == false)) {
				oy = oy + 0.005;
			}
			if (checkFor(KeyEvent.VK_DOWN) && (secondPause == false)) {
				oy = oy - 0.005;
			}

			sands.draw();
			sands.move();
			random.draw();
			random.moveLeftRight();
			otherThing.draw();
			otherThing.moveTopDown();
			lastThing.draw();
			lastThing.moveBottomRightTopLeft();
			
			
			//obstacles (squares) with a half second pause before movement if touching/very close-by
			for (int q = 0; q < allObstacles.size(); ++q) {
				Square o = allObstacles.get(q);
				if ((o.getX()-o.getW())<=px && px<=(o.getX()+o.getW()) && (o.getY()-o.getW())<=py && py<=(o.getY()+o.getW())) {
					pauseInc += 1;
					pause = true;
					if (pauseInc % 100 == 0) {
						totalPoints = totalPoints - 5;
					}
				}
				
				if ((o.getX()-o.getW())<=ox && ox<=(o.getX()+o.getW()) && (o.getY()-o.getW())<=oy && oy<=(o.getY()+o.getW())) {
					secPauseInc += 1;
					secondPause = true;
					if (secPauseInc % 100 == 0) {
						secTotalPoints = secTotalPoints - 5;
					}
				}
				
				if (pauseInc == 100) {
					pauseInc = 0;
					pause = false;
				}
				
				if (secPauseInc == 100) {
					secPauseInc = 0;
					secondPause = false;
				}
			}
			
			//treasure (circles)
			for (int w = 0; w < allTreasures.size(); ++w) {
				Circle t = allTreasures.get(w);
				if ((t.getX()-t.getR())<=px && px<=(t.getX()+t.getR()) && (t.getY()-t.getR())<=py && py<=(t.getY()+t.getR())) {
					totalPoints += 5;
					allTreasures.remove(w);
				}
				
				if ((t.getX()-t.getR())<=ox && ox<=(t.getX()+t.getR()) && (t.getY()-t.getR())<=oy && oy<=(t.getY()+t.getR())) {
					secTotalPoints += 5;
					allTreasures.remove(w);
				}
				
			}

			for (int w = 0; w < allObstacles.size(); ++w) {
				StdDraw.setPenColor(Color.BLACK);
				allObstacles.get(w).draw();
			}
			for (int w = 0; w < allTreasures.size(); ++w) {
				StdDraw.setPenColor(Color.YELLOW);
				allTreasures.get(w).draw();
			}
			
			//drawing the rule box and players
			StdDraw.setPenColor(Color.BLUE);
			StdDraw.filledCircle(px, py, .03);
			
			StdDraw.setPenColor(Color.CYAN);
			StdDraw.filledCircle(ox, oy, 0.03);
			
			c = ColorUtils.transparent(Color.BLUE, 0.5);
			StdDraw.setPenColor(c);
			StdDraw.filledRectangle(0.5, 0.95, 0.39, 0.13);
			
			//text in the rule box
			StdDraw.setPenColor(Color.WHITE);
			StdDraw.text(0.5, 1.01, x + " seconds remaining.");
			StdDraw.text(0.5, 0.937, "POINTS | P1: " + totalPoints + " P2: " + secTotalPoints);
			StdDraw.text(0.5, 0.971, "CONTROLS | P1: WASD, P2: arrow keys.");
			StdDraw.setPenColor(Color.RED);
			StdDraw.text(0.5, 0.90, "1) Only some of the circles are real treasure.");
			StdDraw.text(0.5, 0.85,  "2) Only some of the squares are traps.");
			
			if (i % 100 == 0) {
				x -= 1;
			}
			
			StdDraw.show(10);  // 1/100 of a second
			i += 1;
			
			if (x == 0) {
				String endGame;
				if (totalPoints > secTotalPoints) {
					endGame = ap.nextString("Player 1 wins with " + totalPoints + " points.");
					if (endGame != "fddfkjkgj") {
						System.exit(0);
					}
				}
				if (secTotalPoints > totalPoints) {
					endGame = ap.nextString("Player 2 wins with " + secTotalPoints + " points.");
					if (endGame != "fddfkjkgj") {
						System.exit(0);
					}
				}
				if (secTotalPoints == totalPoints) {
					endGame = ap.nextString("Tied at " + totalPoints);
					if (endGame != "fddfkjkgj") {
						System.exit(0);
					}
				}
			}
		}
	}
	
	/**
	 * Check to see if a given key is pressed at the moment.  This method does not
	 *   wait for a key to be pressed, so if nothing is pressed, it returns
	 *   false right away.
	 *   
	 * The event constants are found at:
	 *   https://docs.oracle.com/javase/7/docs/api/java/awt/event/KeyEvent.html
	 * @param key the integer code of the key
	 * @return true if that key is down, false otherwise
	 */
	private static boolean checkFor(int key) {
		if (StdDraw.isKeyPressed(key)) {
			return true;
		}
		else {
			return false;
		}
	}
}