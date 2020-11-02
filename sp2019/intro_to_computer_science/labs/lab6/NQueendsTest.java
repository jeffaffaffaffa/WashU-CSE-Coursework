package lab6;

import static org.junit.Assert.*;

import org.junit.Test;

public class NQueendsTest {

	@Test
	public void test() {
		QViz.pause = 5;
		for (int n=4; n < 9; ++n) {
			boolean[][] board = NQueens.findSoln(n);
			verifyBoard(board);
		}
	}
	
	private void verifyBoard(boolean[][] board) {
		int n = board.length;
		int tot = countQueens(board);
		if (tot != n) {
			failBoard(board, "Wrong number of Queens, expected " + n);
			assertEquals("Wrong number of queens", n, tot);
		}
		for (int i=0; i < n; ++i) {
			int nq = numQueens(board, i, 0, 0, 1);
			if (nq != 1) {
				failBoard(board, "Expected one queen in row " + i);
				assertEquals("Wrong queens in row " + i, 1, nq);			
			}
			nq = numQueens(board, 0, i, 1, 0);
			if (nq != 1) {
				failBoard(board, "Expected one queen in col " + i);
				assertEquals("Wrong queens in col " + i, 1, nq);			
			}
		}
		for (int r=0; r<n; ++r) {
			for (int c=0; c<n; ++c) {
				if (c==0 || r==0) {
					int nq = numQueens(board, r, c, 1, 1);
					if (nq > 1) {
						failBoard(board, "Expected at most one queen in diagonal " + disp(r,c));
						assertTrue("Wrong queens in diag " + disp(r,c), nq<=1);									
					}
					nq = numQueens(board, r, c, -1, -1);
					if (nq > 1) {
						failBoard(board, "Expected at most one queen in antidiagonal " + disp(r,c));
						assertTrue("Wrong queens in antidiag " + disp(r,c), nq<=1);											
					}
				}
			}
		}
	}
	
	private int numQueens(boolean[][] board, int r, int c, int dr, int dc) {
		int n = board.length;
		int sum = 0;
		while (r < n && c < n && r >= 0 && c >= 0) {
			if (board[r][c])
				++sum;
			r = r + dr;
			c = c + dc;
		}
		return sum;
	}
	
	private static int countQueens(boolean[][] board) {
		int sum = 0, n = board.length;
		for (int r=0; r < n; ++r) {
			for (int c=0; c < n; ++c) {
				if (board[r][c]) 
					++sum;
			}
		}
		return sum;
	}
	
	private void failBoard(boolean[][] board, String message) {
		System.out.println("With this board:");
		System.out.println(Utils.boardToString(board));
		System.out.println("About to fail with message ");
		System.out.println(message);
		fail(message);
		
	}
	
	private static String disp(int row, int col) {
		return "(" + row + "," + col + ")";
	}


}
