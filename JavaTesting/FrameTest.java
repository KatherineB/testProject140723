import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.text.*;

class FrameTest extends JFrame{   
	FrameTest(){
	  JFrame frame = new JFrame("This is a frame test.");
	  setLayout(new GridLayout(2,2));
	   System.out.println("In Frame Test");
	   JPanel panel3 = new JPanel();
		panel3.setBackground(Color.orange);
		add(panel3);
	   setSize(300,300);
	   setVisible(true);
	}
	
	public static void main(String[]args){
	     new FrameTest();
		// FrameTest frametest1 = new FrameTest();
    }
}