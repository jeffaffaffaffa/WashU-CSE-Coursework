package communication;

import jssc.SerialPortException;

public class PCToMorseCode {
	public static void main(String[] args) {		
		// TODO:  Fix this: 
		//           a) Uncomment to create a SerialComm object
		//           b) Update the "the port" to refer to the serial port you're using
		//              (The port listed in the Arduino IDE Tools>Port menu.		
		//           c) Deal with the unresolved issue
		
		
		// TODO: Complete section 6 of the Studio (gather sanitized user input
		//       and send it to the Arduino)
		
		try {
			SerialComm port = new SerialComm("/dev/cu.usbserial-DN03FDMM");
			while(true)
			port.writeByte();
		} catch (SerialPortException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}