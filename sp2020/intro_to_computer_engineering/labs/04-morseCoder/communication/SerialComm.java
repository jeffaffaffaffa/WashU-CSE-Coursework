package communication;

import java.util.Scanner;

import jssc.*;

public class SerialComm {

	SerialPort port;

	private boolean debug;  // Indicator of "debugging mode"
	
	// This function can be called to enable or disable "debugging mode"
	void setDebug(boolean mode) {
		debug = mode;
	}	
	

	// Constructor for the SerialComm class
	public SerialComm(String name) throws SerialPortException {
		port = new SerialPort(name);		
		port.openPort();
		port.setParams(SerialPort.BAUDRATE_9600,
			SerialPort.DATABITS_8,
			SerialPort.STOPBITS_1,
			SerialPort.PARITY_NONE);
		
		debug = false; // Default is to NOT be in debug mode
	}
		
	// TODO: Add writeByte() method that you created in Studio 5
	
	public void writeByte(){
		debug = true;
		Scanner scan = new Scanner(System.in);
		String a = scan.nextLine();
//		while (a.length()>1) {
//			System.out.println("You have typed more than 1 character, please try again");
//			a = scan.next();
//		}
		
		byte b;
		for (int i = 0; i < a.length(); i++) {
			b = (byte)a.charAt(i);
			try{
				port.writeByte(b);
				if (debug) {
					System.out.println(b);
				}
			}
			catch(SerialPortException e){
				System.out.println("error");
			}
		}
//		byte b = (byte)a.charAt(0);
//		try{
//			port.writeByte(b);
//			if (debug) {
//				System.out.println(b);
//			}
//		}
//		catch(SerialPortException e){
//			System.out.println("error");
//		}

	}
	
}
