package communication;

import jssc.*;

public class MsgReceiver {
	
	final private SerialComm port;
	
	public MsgReceiver(String portname) throws SerialPortException {
		port = new SerialComm(portname);
	}
	
	enum State {
		MagicNum,
		Type,
		Info,
		Error,
		Time,
		Pot,
		Raw,
		badKey
	}
	byte temp;
	byte first;
	byte sec;
	byte third;
	byte fourth;
	int thing;
	
	byte[] pointer;
	
	double[] filter = new double[7];
	int counter = 0;
	
	State state = State.MagicNum;

	public void run() {
		// insert FSM code here to read msgs from port
		// and write to console
		
		while(true) {

		switch (state) {
			case MagicNum:
				if(port.available()) {
					temp = port.readByte();
				}
				if (temp == 0x21) {
					state = State.Type;
				}
				break;
			
			case Type:
				temp = port.readByte();
				if (temp == 0x30) {
					state = State.Info;
				} else if (temp == 0x31) {
					state = State.Error;
				} else if (temp == 0x32) {
					state = State.Time;
				} else if (temp == 0x33) {
					state = State.Pot;
				} else if (temp == 0x34) {
					state = State.Raw;
				} else {
					state = State.badKey;
				}
				break;
				
			case Info:
				first = port.readByte();
				sec = port.readByte();
//				System.out.println("first byte:" + (int)first);
//				System.out.println("second byte:" + (int)sec);
				thing = (first&0xff) << 8;
				thing = thing | (sec&0xff);
				if (thing > 100) {
					System.out.println("The string below is too long - over 100 characters!!!");
					state = state.MagicNum;
				}
				//System.out.println((int)thing);
				pointer = new byte[thing];
				for (int i = 0; i < thing; i++) {
					//System.out.println("Enter for "+ i);
					pointer[i] = port.readByte();
				}
				System.out.println("Info string is: " + new String(pointer));
				
				state = state.MagicNum;
				break;
				
			case Error:
				first = port.readByte();
				sec = port.readByte();
				thing = (first&0xff) << 8;
				thing = thing | (sec&0xff);
				if (thing > 100) {
					System.out.println("The string below is too long - over 100 characters!!!");
					state = state.MagicNum;
				}
				pointer = new byte[thing];
				for (int i = 0; i < thing; i++) {
					pointer[i] = port.readByte();
				}
				//System.out.println(pointer.length);
				System.out.println("Error string is: " + new String(pointer));
				
				state = state.MagicNum;
				break;
				
			case Time:
				first = port.readByte();
				sec = port.readByte();
				third = port.readByte();
				fourth = port.readByte();
//				System.out.println("first: " + (int)first);
//				System.out.println("sec: " + (int)sec);
//				System.out.println("third: " + (int)third);
//				System.out.println("fourth: " + (int)fourth);
				thing = (first&0xff) << 24;
				thing = thing | (sec&0xff) << 16;
				thing = thing | (third&0xff) << 8;
				thing = thing | (fourth&0xff);
				//thing is the time
				System.out.println("Time: " + thing + " ms");
				
				state = state.MagicNum;
				break;
				
			case Pot:
				first = port.readByte();
				sec = port.readByte();
				thing = (first&0xff) << 8;
				thing = thing | (sec&0xff);
				//thing is pot reading
				System.out.println("Potentiometer reading: " + thing);
				
				state = state.MagicNum;
				break;
				
			case Raw:
				first = port.readByte();
				sec = port.readByte();
				thing = (first&0xff) << 8;
				thing = thing | (sec&0xff);
				//thing is raw temp reading
				System.out.println("Raw temp reading: " + thing);
				double volt = (thing/1023.0)*5.0;
				double temp = (100.0*volt) - 50.0;
				filter[counter%7] = temp;
				counter++;
				System.out.println("Converted temp: " + (Math.round(temp * 100.0) / 100.0)); //raw temp
				double total = 0;
				for (int i = 0; i < 7; i++) {
					total = total + filter[i];
				}
				double avgTemp = total/7.0;
				avgTemp = Math.round(avgTemp * 100.0) / 100.0;
				System.out.println("Rolling avg temp: " + avgTemp + " Celcius"); //rolling avg temp
				System.out.println("-------------------------------");
				state = state.MagicNum;
				break;
			
			case badKey:
				System.out.println("Unknown key used!!!");
				state = state.MagicNum;
				break;
		}
		}
	}

	public static void main(String[] args) throws SerialPortException {
		MsgReceiver msgr = new MsgReceiver("/dev/cu.usbserial-DN03FDMM"); // Adjust this to be the right port for your machine
		msgr.run();
	}
}
