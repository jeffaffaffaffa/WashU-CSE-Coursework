package lab6;

import static org.junit.Assert.fail;

import org.junit.Test;

public class CaptureTest {

	@Test
	public void test() {
		System.out.println("Testing pairs of queens");
		testPairs();
		System.out.println("Testing random boards");
		testBoard();
	}
	
	public void testPairs() {
		for (int i=0; i < 20; ++i) {
			testAllPairs(i);
		}
	}
	
	public void testBoard() {
		for (int i=0; i < 20; ++i) {
			testBoard(i);
		}
		
	}
	
	private void testAllPairs(int n) {
		for (int r=0; r < n; ++r) {
			for (int c=0; c < n; ++c) {
				testFromRowCol(n, r,c);
			}
		}
	}
	
	private void testFromRowCol(int n, int row, int col) {
		for (int r=0; r < n; ++r) {
			for (int c=0; c < n; ++c) {
				boolean[][] board = new boolean[n][n];
				if (row != r || col != c) {
					board[row][col] = true;
					int[] studentsCaptor = Capture.whoCaptures(board, r, c);
					if (row == r || col ==c || r-c==row-col || r+c==row+col) {
						if (studentsCaptor == null || studentsCaptor[0] != row || studentsCaptor[1] != col) {
							failBoard(board, "With a queen already at " + disp(row,col) +
									" you should find it as a captor of a proposed queen at " +
									disp(r,c));
						}
					}
					else {
						if (studentsCaptor != null) {
							failBoard(board, "You should not see the queen at " + disp(row,col) + " as a captor of a proposed queen at "
									+ disp(r,c));
						}
					}
				}
			}
		}
	}
	
	private void failBoard(boolean[][] board, String message) {
		System.out.println("With this board:");
		System.out.println(Utils.boardToString(board));
		System.out.println("About to fail with message ");
		System.out.println(message);
		fail(message);
		
	}
	
	private void testBoard(int n) {
		boolean[][] board = genBoard(n);
		for (int r=0; r < n; ++r) {
			for (int c=0; c < n; ++c) {
				if (!board[r][c]) {
					int[] captor = Capture.whoCaptures(board, r, c);
					if (captor != null) {
						int crow = captor[0], ccol = captor[1];
						if (!board[crow][ccol]) {
							failBoard(board, "No such captor where you say at " + disp(crow,ccol));
						}
						if (crow == r || ccol == c || c-r==ccol-crow || c+r==ccol+crow) {
							// it's a hit
						}
						else {
							failBoard(board, "A queen at " + disp(crow,ccol) +
									" is not a threat to a queen placed at " +disp(r,c));
						}
					}
				}
			}
		}
		
	}


	private static String disp(int row, int col) {
		return "(" + row + "," + col + ")";
	}
	
	private static boolean[][] genBoard(int n) {
		boolean[][] board = new boolean[n][n];
		for (int r=0; r < n; ++r) {
			for (int c=0; c < n; ++c) {
				board[r][c] = Math.random() < 0.5;
			}
		}
		return board;
	}
}
