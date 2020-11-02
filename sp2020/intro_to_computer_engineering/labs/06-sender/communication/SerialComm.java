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
		
	public void writeByte(){
		debug = true;
		Scanner scan = new Scanner(System.in);
		String a = scan.nextLine();
		System.out.println(a);
		for (int i = 0; i<a.length();i++) {
			try{
				byte b = (byte)a.charAt(i);
				port.writeByte(b);
				if (debug) {
					System.out.println(b);
				}
			}
			catch(SerialPortException e){
				System.out.println("error");
			}
		}
	}
	
	public boolean available() {
		try {
			if (port.getInputBufferBytesCount()>0) {
				return true;
			}
			else {
				return false;
			}
		} catch (SerialPortException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		}
	}
	
	public byte readByte() {
		debug = true;
		try {
			byte[] available_bytes=port.readBytes(1);
			if (debug) {
				System.out.print(String.format(" "+"%02x", available_bytes[0])+" ");
			}
			return available_bytes[0];
		} catch (SerialPortException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return 0;
		}
	}
	
	public static void main(String[] args) {
		int counter = 0;
		long output = 0;
		try {
			SerialComm comm = new SerialComm("/dev/cu.usbserial-DN03FDMM");
			while (true) {
				if (comm.available()) {
					if (counter%4==0) {
						output = comm.readByte()<<24;
						System.out.println(output);
					}
					else if (counter%4==1){
						output += comm.readByte()<<16;
						System.out.println(output);
					}
					else if (counter %4==2) {
						output += comm.readByte()<<8;
						System.out.println(output);
					}
					else {
						output += comm.readByte();
						System.out.println(output);
						output = 0;
					}
					counter++;
				}
			}
		} catch (SerialPortException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
}