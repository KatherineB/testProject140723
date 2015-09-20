import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.text.*;

class ImageLoadTest extends JFrame{ 
    Icon tPic; 
    JLabel labelA;	
	ImageLoadTest(){
	    setLayout(new GridLayout(2,2));
		tPic = new ImageIcon("image5.jpg");
		setTitle("Image Load Testing");
		labelA = new JLabel(tPic);
		JPanel panel1 = new JPanel();
		panel1.setBackground(Color.blue);
		add(panel1);
		JPanel panel2 = new JPanel();
		panel2.setBackground(Color.yellow);
		panel1.add(labelA);
		add(panel2);
		JPanel panel3 = new JPanel();
		panel3.setBackground(Color.cyan);
		add(panel3);
		setSize(500,500);
		setVisible(true);
	
	}
	
	public static void main(String[]args){
	      ImageLoadTest imageLoader = new ImageLoadTest();
    }
}