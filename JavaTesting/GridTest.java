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
		add(panel1);
		JPanel panel2 = new JPanel();
		panel2.setBackground(Color.yellow);
		add(panel2);
		JPanel panel3 = new JPanel();
		panel3.setBackground(Color.orange);
		add(panel3);
		setSize(300,300);
		setVisible(true);
	
	}
	
	public static void main(String[]args){
	      GridTest gridtest1 = new GridTest();
    }
}