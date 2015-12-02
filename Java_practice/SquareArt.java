import javax.swing.*;
import javax.imageio.*;
import java.awt.*;
import java.awt.event.*;
import java.awt.image.*;
import java.awt.Color;
import java.text.*;
import java.io.*;

public class SquareArt extends JFrame{
     SquareArt(){
	   setSize(600,400);	   
	   setVisible(true);
	   
	   Container background = getContentPane();
	   background.setLayout(new BorderLayout());
	 
	   background.setBackground(Color.decode("#bbeeee"));

	   
	   JPanel centerArea = new JPanel();
	   centerArea.setLayout(new GridLayout(2,2));
	   
	   background.add(centerArea, BorderLayout.CENTER);
	   
	   JPanel squaresAvail = new JPanel();
	   squaresAvail.setLayout(new GridLayout(1,4));
	   background.add(squaresAvail, BorderLayout.WEST);
	  
	   setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	 }
     public static void main(String[]args){
		 
	 
		  
	   SquareArt screen = new SquareArt();
	   
	 }
}