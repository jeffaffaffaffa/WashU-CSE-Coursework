package lab6;

public class NQueens {

	
	/**
	 * Be sure to read the assignment first, before looking at this code
	 * 
	 *   
	 *   Also, to call the code you wrote to detect if anything
	 *   captures a given (row,col), you write:
	 *   
	 *       Capture.whoCaptures(board, row, col)
	 *       
	 *   and that returns either null if nothing captures (row,col)
	 *   or it returns an int array of the row and column of a captor
	 *   of (row,col)
	 */
	
	 /**
	 * Return a solution to the n queens problem in 
	 * the form of a boolean array, where a true cell has a queen
	 * and a false cell is empty
	 * 
	 * You would be wise to watch the videos and read the instructions
	 *   about writing a helper method.
	 *   
	 * @param n, which is at least 4, so there is a solution
	 * @return the solution
	 */
	public static boolean[][] findSoln(int n) {
		//what i modified
		QViz.setup(n);
		boolean[][] ans = new boolean[n][n];
		QViz.drawBoard(ans);
		
		if (!helper(ans, 0)) {
			return null;
		}
		else {
			return ans;
		}
	}
	
	public static void nqueens(int n) {
		boolean[][] board = findSoln(n);
		if (board != null) {
			System.out.println("Solution for " +n);
			System.out.println(Utils.boardToString(board, -1, -1));
			QViz.success(board);
		}
		else 
			System.out.println("No solution for " + n);
	}
	
	public static void main(String[] args0) {
		for (int i=4; i < 11; ++i) {
			nqueens(i);
		}
	}
	
	//what i added: runs through board checking values on board and
	// places queens for findSoln to print
	/**
	 * 
	 * @param board value of true or false at spot on board
	 * @param c column
	 * @return
	 */
	public static boolean helper(boolean[][]board, int c) {
		if (c == board.length) { //if all possible queens have been placed, terminate
			return true;
		}
		for (int i = 0; i < board.length; ++i) {
			if (Capture.whoCaptures(board, i, c) == null) {
				board[i][c] = true; //places a queen here
				if(helper(board, c+1)) {
					return true; // if the next column is true then this spot in next column is safe
				}
				//if false, backtrack up the tree
				board[i][c] = false; // removes the queen we placed
			}
		}
		return false;
	}

}
