import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.text.*;

class GridTest extends JFrame{   
	GridTest(){
	    setLayout(new GridLayout(2,2));
		setTitle("This is a test of Grid Layout");
		JPanel panel1 = new JPanel();
		panel1.setBackground(Color.cyan);
	
	}
	
	public static void main(String[]args){
	      GridTest gridtest1 = new GridTest();
    }
}