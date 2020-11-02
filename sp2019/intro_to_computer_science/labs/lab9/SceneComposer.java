package lab9;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import cse131.ArgsProcessor;
import lab9.Drawable;
import lab9.scenes.*;
import lab9.scenes.ifs.*;
import sedgewick.StdDraw;

public class SceneComposer {

	public static void main(String[] args) {

		ArgsProcessor ap = new ArgsProcessor(args);
		System.out.println("Available drawables:");
		System.out.println("Bubbles, Circle, Forest, Leaves, Line, Poly, Square, Dragon, Tree.");
		System.out.println("To clear the canvas, draw nothing, or terminate: Clear, Empty, End.");

		Map<String, Drawable> stored = new HashMap<>();
		List<Drawable> list = new LinkedList<Drawable>();

		// initial scene stuff
		List<Drawable> init = new LinkedList<Drawable>();
		Bubbles a = new Bubbles(10);
		Dragon b = new Dragon(Math.random(), Math.random(), Math.random());
		Poly c = new Poly(7);
		Leaves d = new Leaves(3);
		init.add(a);
		init.add(b);
		init.add(c);
		init.add(d);
		Sequence initial = new Sequence(init);

		StdDraw.show(10);
		initial.draw();
		StdDraw.show(10);

		stored.put("init", initial);

		String clearInit = ap.nextString("Do you want to keep looking at this same thing?");

		boolean run = true;

		while (run) {
			if (clearInit.equals("Yes")) {
				new Clear().draw();
				clearInit = ap.nextString("Do you really want to keep looking at this?");
			} else {
				Clear clearing = new Clear();

				StdDraw.show(10);
				clearing.draw();
				StdDraw.show(10);

				run = false;
			}
		}
		// end of initial scene stuff

		boolean tF = true;
		while (tF) {
			String key = ap.nextString("Pick a scene:");
			if (key.equals("Bubbles")) {
				int numBub = ap.nextInt("How many bubbles?");
				Bubbles one = new Bubbles(numBub);
				list.add(one);

				StdDraw.show(10);
				one.draw();
				StdDraw.show(10);

				key = ap.nextString("Pick a scene:");
			}
			if (key.equals("Circle")) {
				Circle two = new Circle(Math.random(), Math.random(), Math.random() / 20);
				list.add(two);

				StdDraw.show(10);
				two.draw();
				StdDraw.show(10);

				key = ap.nextString("Pick a scene:");
			}
			if (key.equals("Clear")) {
				Clear clear = new Clear();

				StdDraw.show(10);
				clear.draw();
				StdDraw.show(10);

				key = ap.nextString("Pick a scene:");
			}
			if (key.equals("Empty")) {
				Empty empty = new Empty();
				list.add(empty);

				StdDraw.show(10);
				empty.draw();
				StdDraw.show(10);

				key = ap.nextString("Nothing drawn. Pick a scene:");
			}
			if (key.equals("Forest")) {
				Forest three = new Forest(5);
				list.add(three);

				StdDraw.show(10);
				three.draw();
				StdDraw.show(10);

				key = ap.nextString("Pick a scene:");
			}
			if (key.equals("Leaves")) {
				Leaves four = new Leaves(5);
				list.add(four);

				StdDraw.show(10);
				four.draw();
				StdDraw.show(10);

				key = ap.nextString("Pick a scene:");
			}
			if (key.equals("Line")) {
				Line five = new Line();
				list.add(five);

				StdDraw.show(10);
				five.draw();
				StdDraw.show(10);

				key = ap.nextString("Pick a scene:");
			}
			if (key.equals("Poly")) {
				Poly six = new Poly(5);
				list.add(six);

				StdDraw.show(10);
				six.draw();
				StdDraw.show(10);

				key = ap.nextString("Pick a scene:");
			}
			if (key.equals("Square")) {
				Square seven = new Square(Math.random(), Math.random(), Math.random() / 10);
				list.add(seven);

				StdDraw.show(10);
				seven.draw();
				StdDraw.show(10);

				key = ap.nextString("Pick a scene:");
			}
			if (key.equals("Dragon")) {
				Dragon eight = new Dragon(Math.random(), Math.random(), Math.random());
				list.add(eight);

				StdDraw.show(10);
				eight.draw();
				StdDraw.show(10);

				key = ap.nextString("Pick a scene:");
			}
			if (key.equals("Tree")) {
				Tree nine = new Tree(Math.random(), Math.random(), Math.random());
				list.add(nine);

				StdDraw.show(10);
				nine.draw();
				StdDraw.show(10);

				key = ap.nextString("Pick a scene:");
			}
			if (key.equals("End")) {
				String check = ap.nextString("Are you sure?");
				if (!check.equals("No") && !check.equals("Yes")) {
					check = ap.nextString("Please say Yes or No");
				}
				if (check.equals("Yes")) {
					Clear cleean = new Clear();
					StdDraw.show(10);
					cleean.draw();
					StdDraw.show(10);
					tF = false;
				}
				if (check.equals("No")) {
					tF = true;
				}
			}
		}

		System.out.println("------------------------------------------");

		Sequence user = new Sequence(list);
		stored.put("user", user);
		String sequenceUser = ap.nextString("Do you want to draw the sequence just created? Yes or No:");

		if (!sequenceUser.equals("Yes") && !sequenceUser.equals("No")) {
			sequenceUser = ap.nextString("Please type Yes or No:");
		}
		if (sequenceUser.equals("Yes")) {
			StdDraw.show(10);
			stored.get("user").draw();
			StdDraw.show(10);
		}
		if (sequenceUser.equals("No")) {
			Clear clean = new Clear();
			StdDraw.show(10);
			clean.draw();
			StdDraw.show(10);
		}

		System.out.println("Existing scenes in hash map: " + stored.keySet());

		String initAgain = ap.nextString("Do you want to see the initial scene again?");

		while (true) {
			if (!initAgain.equals("Yes") && !initAgain.equals("No")) {
				initAgain = ap.nextString("Pls type Yes or No.");
			}
			if (initAgain.equals("Yes")) {
				Clear cleannn = new Clear();
				StdDraw.show(10);
				cleannn.draw();

				stored.get("init").draw();
				StdDraw.show(10);

				initAgain = ap.nextString("Still want to look at it?");
			}
			if (initAgain.equals("No")) {
				String allOver = ap.nextString("You're done! Please type 'Exit' to end.");
				if (!allOver.equals("Exit")) {
					allOver = ap.nextString("Jokes on you, you have to exit. TYPE 'Exit'!!!!");
					System.exit(0);
				}
				if (allOver.equals("Exit")) {
					System.exit(0);
				}
			}
		}
	}
}