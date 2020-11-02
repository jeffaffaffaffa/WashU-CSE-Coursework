package lab6;



public class Capture {

	/**
	 * Be sure to read the assignment first, before looking at this code
	 * 
	 * Given the current board, find any queen on the board now
	 *     that could capture
	 *     a piece located at (row, col)
	 *     If no such queen  exists, return null
	 *     
	 * Read carefully:  there could be multiple captors present on the 
	 *   board, but you just return ONE such queen in terms of her
	 *   row and column in the return value of this method.
	 *   The row and column you return would correspond to a queen currently
	 *   on the board who could capture a piece at the (row, col) provided
	 *   to this method.
	 *   
	 * @param board The current board
	 * @param row the row of a proposed piece
	 * @param col the column of a proposed piece
	 * @return new int { r, c} where r and c are the row and column of
	 *   a captor of the proposed piece.  If no captors exist, return null
	 */
	
	public static int[] whoCaptures(boolean[][] board, int row, int col) {
		//
		// If you are looking at this code and have not read the instructions
		//    for this assignment, you are making a mistake.
		//    Go and read the instructions!!
		//
		// The following code always returns (0,0) as the captor
		//   You must replace the code below so that the CaptureTest passes
		//   based on the instructions, comments, and videos about this
		//
		
		//for a given row, checks every column of that row
		for (int i = 0; i < board.length; ++i) {
			if (board[row][i]) {
				return new int[] {row, i};
			}
		}
		
		//for a given column, checks every row
		for (int i = 0; i < board.length; ++i) {
			if (board[i][col]) {
				return new int[] {i, col};
			}
		}
		
		//check upper main diagonal
		for (int i = 0; row+i < board.length && col+i<board.length; ++i) {
			if (board[row+i][col+i]) {
				return new int[] {row+i, col+i};
			}
		}

		//check lower main diagonal
		for (int i = 0; row-i>=0 && col-i>=0; ++i) {
			if (board[row-i][col-i]) {
				return new int[] {row-i, col-i};
			}
		}
		
		//check upper anti diagonal
		for (int i = 0; row+i<board.length && col-i>=0; ++i) {
			if (board[row+i][col-i]) {
				return new int[] {row+i, col-i};
			}
		}
		
		//check lower anti diagonal
		for (int i = 0; row-i>=0 && col+i<board.length; ++i) {
			if (board[row-i][col+i]) {
				return new int[] {row-i, col+i};
			}
		}
		
		return null;
	}
}
