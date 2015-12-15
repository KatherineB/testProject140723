package squareartkb;

import javax.swing.*;
import javax.swing.border.*;
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
	   centerArea.setBackground(Color.decode("#bbaaff"));   
	   background.add(centerArea, BorderLayout.CENTER);
	   
	   JPanel squaresAvail = new JPanel();
	   squaresAvail.setLayout(new GridLayout(4,1));
	   squaresAvail.setBackground(Color.decode("#55dd99"));
	   squaresAvail.setPreferredSize(new Dimension(100,100));
	   background.add(squaresAvail, BorderLayout.EAST);	   
	   
	   JPanel avail1 = new JPanel();
	   avail1.setBackground(Color.decode("#ffffff"));
	   SquareArtSquare greenSquare = new SquareArtSquare("#00dd00");
	   greenSquare.setPreferredSize(new Dimension(80,80));	
       avail1.add(greenSquare);	   
	   squaresAvail.add(avail1);
	   
	   JPanel avail2 = new JPanel();
	   avail2.setBackground(Color.decode("#ffffff"));
	   SquareArtSquare blueSquare = new SquareArtSquare("#0000ff");
	   blueSquare.setPreferredSize(new Dimension(80,80));
	   avail2.add(blueSquare);
	   squaresAvail.add(avail2);
	   
	   JPanel avail3 = new JPanel();
	   avail3.setBackground(Color.decode("#ffffff"));
	   SquareArtSquare yellowSquare = new SquareArtSquare("#ffff00");
	   yellowSquare.setPreferredSize(new Dimension(80,80));
	   avail3.add(yellowSquare);
	   squaresAvail.add(avail3);
	   
	   JPanel avail4 = new JPanel();
	   avail4.setBackground(Color.decode("#ffffff"));
	   SquareArtSquare redSquare = new SquareArtSquare("#ff0000");
	   redSquare.setPreferredSize(new Dimension(80,80));
	   avail4.add(redSquare);
	   squaresAvail.add(avail4);
	  
	   setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	 }
	 
     public static void main(String[]args){		 		  
	   SquareArt screen = new SquareArt();  
	 }
}