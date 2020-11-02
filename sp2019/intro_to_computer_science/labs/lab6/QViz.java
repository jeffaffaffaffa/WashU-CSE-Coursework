package lab6;

import java.awt.Color;

import sedgewick.StdDraw;

/**
 * Visualization for the N Queens problem
 * 
 * Throughout this code, methods that you call pass
 *   row, column
 * in that order, because it's most intuitive and matches the
 * way arrays are usually considered to be arranged.
 * 
 * So a 4x4 square would look thusly when visualized
 * 
 * (0,0)  (0,1)  (0,2)  (0,3)
 * (1,0)  (1,1)  (1,2)  (1,3)
 * (2,0)  (2,1)  (2,2)  (2,3)
 * (3,0)  (3,1)  (3,2)  (3,3)
 * 
 * You can stop reading here and live happily with this assignment.
 * 
 * What's below are details about the internal translation of
 * row and column to x and y coordinates for drawing.
 * 
 * In any code that draws using StdDraw, 
 *    the horizontal coordinate (x) is specified first and
 *    the vertical   coordinate (y) is specified second.
 * We can't change the API for that.  So with rows going vertically,
 * they will correspond to a y coordinate. With columns going horiziontally
 * they will correspond to a x coordinate.
 * 
 * However, we can change the coordinate space of StdDraw, to get:
 * 
 *  x=0, y=0 . . . . . . . x=n, y=0
 *  x=0, y=1 . . . . . . . x=n, y=1
 *   .    .  . . . . . . .  .    .
 *   .    .  . . . . . . .  .    .
 *   .    .  . . . . . . .  .    .
 *  x=0, y=n . . . . . . . x=n, y=n
 *   
 * the void setup(int n) method does this.
 * Instead of the panel running from 0 to 1 from lower left to upper right,
 *   it runs from 0 to n from upper left to lower right,
 *   which corresponds to the way we think of the board.
 * There is some additional space reserved around the edges and especially
 *    at the top.
 *   
 * So if we drew a circle using StdDraw.drawCircle(0,0,0.5)
 *   it would appear in the upper left hand corner
 *   
 * In summary, while outside calls to methods in this class pass
 *   row, col
 * they will be drawn using those coordinates but swapped so that
 * the horizontal component (col) is first and
 * the vertical   component (row) is second
 * 
 * @author roncytron
 *
 */
public class QViz {

	/**
	 * Milliseconds for normal pause between views of the board.
	 * Change this as you like to get slower or longer times.
	 */
	public static int pause = 500;

	/**
	 * Clear the screen and draw the board
	 *    "true" cells will be shown in blue
	 *    "false" cells will not be shown (background is just black)
	 * @param board array representing the board
	 */
	public static void drawBoard(boolean[][] board) {
		begin(board.length);
		renderBoard(board);
		end();
	}

	/**
	 * Clear the screen, draw the board, and then show a green square
	 *    proposing a queen at the specified row and column
	 *    Note that the proposed queen is usually NOT on the board already
	 *    If it were on the board, it would first be drawn in blue
	 *    And then overdrawn in green
	 * @param board the current state of the board, with queens drawn in blue
	 * @param row the row of the proposed queen shown in green
	 * @param col the column of the proposed queen shown in green
	 */
	public static void proposeQueen(boolean[][] board, int row, int col) {
		begin(board.length);
		renderProposedQueen(board, row, col);
		end();
	}
	
	/**
	 * Draw the board, with existing queens shown in blue
	 * Then show the proposed queen at the specified row and column
	 * Then draw a read line from the captor to the proposed queen
	 * The line is drawn always in this call, so call this method only
	 *   if you want to show a captor and a proposed queen
	 * @param board existing queens placed and will be shown in blue
	 * @param row of proposed queen, shown in green
	 * @param col of proposed queen, shown in green
	 * @param captor an array containing the row and column of an alleged captor of the proposed queen
	 */
	public static void showCapture(boolean[][] board, int row, int col, int[] captor) {
		begin(board.length);
		renderProposedQueen(board, row, col);
		StdDraw.setPenColor(Color.RED);
		StdDraw.setPenRadius(0.01);
		StdDraw.line(col, row, captor[1], captor[0]);
		StdDraw.setPenRadius();
		end();
	}

	/**
	 * Draw the board and then indicate success with a bright border.
	 * Pause so the user can admire our handiwork.
	 * @param board a solution to the N queens problem, with queens shown in blue
	 */
	public static void success(boolean[][] board) {
		int n = board.length;
		begin(board.length);
		renderBoard(board);
		StdDraw.setPenRadius(0.03);
		StdDraw.setPenColor(Color.MAGENTA);
		double center = (-0.5 + n - 1 + 0.5)/2.0;
		StdDraw.square(center, center, center + 0.5);
		StdDraw.setPenRadius();
		end(7000/pause); // 7 seconds no matter what pause
	}
	


	//
	// The methods below this line are helper methods
	//    for the public ones above
	//

	/**
	 * Set up the coordinates by calling setup
	 *    and clear the screen
	 * @param n
	 */
	private static void begin(int n) {
		setup(n);
		StdDraw.clear();
	}
	
	/**
	 * End of an animation frame, pause for the default time x factor
	 * @param factor multiplicative factor for the pause
	 */
	private static void end(int factor) {
		StdDraw.show(factor * pause);
	}
	
	/**
	 * End of animation frame, pause for the default amount of time.
	 */
	private static void end() {
		end(1);
	}

	/**
	 * Draw the board with black squares everywhere
	 *   Then call drawQueen wherever the board has a true cell
	 * @param board
	 */
	private static void renderBoard(boolean[][] board) {
		for (int r=0; r < board.length; ++r) {
			for (int c=0; c < board.length; ++c) {
				StdDraw.setPenColor(Color.BLACK);
				StdDraw.filledSquare(c, r, 0.48);
			}
		}
		for (int r=0; r < board.length; ++r) {
			for (int c=0; c < board.length; ++c) {
				if (board[r][c])
					drawQueen(r,c);
			}
		}		
	}
	
	/**
	 * Draw an exiting queen at the specified location
	 * @param row vertical coordinate of the queen
	 * @param col horizontal coordinate of the queen
	 */
	private static void drawQueen(int row, int col) {
		drawQueenColor(row, col, Color.BLUE);
	}

	private static void renderProposedQueen(boolean[][] board, int row, int col) {
		renderBoard(board);
		drawQueenColor(row, col, Color.GREEN);	
	}

	/**
	 * Draw and label a queen positioned at the specified location
	 * @param row vertical coordinate of the queen
	 * @param col horizontal coordinate of the queen
	 * @param c color of the square drawn to represent the queen
	 */
	private static void drawQueenColor(int row, int col, Color c) {
		StdDraw.setPenColor(c);
		StdDraw.filledSquare(col, row, 0.45);
		//
		// Label the position in white
		//
		StdDraw.setPenColor(Color.WHITE);
		StdDraw.text(col, row, "("+row+","+col+")");
	}

	/**
	 * Set the coordinates as described at the top of this file for
	 *   an n x n board
	 * @param n the number of rows and columns for our board
	 */
	public static void setup(int n) {
		double clearance = 1.0;
		StdDraw.clear();
		StdDraw.setXscale(-0.5, n-1+0.5);
		StdDraw.setYscale(n-1+0.5, -0.5-clearance);
	}
	
	/**
	 * Clear the screen and show a message
	 * @param n the size of the board n x n
	 * @param s the message to display
	 * @param secs the time in seconds for the pause
	 */
	private static void message(int n, String s, int secs) {
		begin(n);
		StdDraw.text(n/2, -0.75, s);
		end(secs*1000/pause);
	}

	public static void main(String[] args0 ) {
		message(5, "This is a demo", 2);
		boolean[][] board = new boolean[5][5];
		drawBoard(board);
		for (int r=1; r < 3; ++r) {
			for (int c=2; c < 5; ++c) {
				proposeQueen(board, r, c);
			}
		}
		board[0][2] = true;
		drawBoard(board);
		int[] captor = new int[] {0, 2};
		for (int r=0; r < 5; ++r) {
			for (int c=0; c < 5; ++c) {
				if (r == 0 && c ==2) {
					// that's our blue square
				}
				else {
					if (r==0 || c==2 || r-c==-2 || r+c==2) {
						showCapture(board, r, c, captor);
					}
					else {
						proposeQueen(board, r, c);
						board[r][c] = true;  // place it there
						drawBoard(board);    // show it in place
						board[r][c] = false; // remove it
						drawBoard(board);    // show it gone
					}
				}
			}
		}

	}
}
