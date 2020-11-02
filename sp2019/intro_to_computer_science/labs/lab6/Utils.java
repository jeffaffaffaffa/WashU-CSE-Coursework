package lab6;

public class Utils {
	
	/**
	 * Render the board as a String, with no specified star anywyere
	 * @param board the board to display
	 * @return a String representation of the board
	 */
	public static String boardToString(boolean[][] board) {
		return boardToString(board, -1, -1);
	}

	/**
	 * Render the board as a String, with a star at the specified location
	 * @param board the board to display
	 * @param sr the row of the specified star
	 * @param sc the column of the specified star
	 * @return a String representation of the board with specified location
	 */
	public static String boardToString(boolean[][] board, int sr, int sc) {
		String ans = "";
		for (int r=0; r < board.length; ++r) {
			for (int c=0; c < board[r].length; ++c) {
				if (r==sr && c==sc) 
					ans = ans + "* ";
				else
					ans = ans + (board[r][c] ? "x " : "- ");
			}
			ans = ans +"\n";
		}
		return ans;
	}

}
