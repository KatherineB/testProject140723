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
import java.util.*;
import java.awt.event.MouseListener;
import java.awt.event.MouseEvent;
import java.awt.event.MouseAdapter;

public class SquareArt extends JFrame{
	 JPanel[] spot = new JPanel[16];
     JPanel[] avail = new JPanel[8];
	 String[] colours = {"#de4532","#aef534","#ccaa99","#7845dc","#2399ff","#bb9955","#aaff66", "#11ff55"};
	// SquareArtSquare[] squares = new SquareArtSquare[8];
	 
	/* JPanel avail1 = new JPanel();
	 JPanel avail2 = new JPanel();
	 JPanel avail3 = new JPanel();
	 JPanel avail4 = new JPanel(); */
	 
	 int numSpots = 16;
	 int numColours = 8;
	 int i;
	 String selectedColour = "#ffffff";
	 
	 
     SquareArt(){
	   setSize(250,200);	   
	   setVisible(true);
	   
	   Container background = getContentPane();
	   background.setLayout(new BorderLayout());	 
	   background.setBackground(Color.decode("#bbeeee"));
	   
	   JPanel centerArea = new JPanel();
	   centerArea.setLayout(new GridLayout(4,4));
	   centerArea.setBackground(Color.decode("#bbaaff"));   
	   background.add(centerArea, BorderLayout.CENTER);
	   	 
	   for( i = 0; i < numSpots; i++){
		   spot[i] = new JPanel(); 
		   spot[i].setPreferredSize(new Dimension(30,30));
		   spot[i].setBackground(Color.decode("#ffffff"));
		   spot[i].setBorder(new LineBorder(Color.BLACK, 1));
	       spot[i].addMouseListener(new SpotMouseListener());
		   centerArea.add(spot[i]);
	   }
	     
	   JPanel squaresAvail = new JPanel();
	   squaresAvail.setLayout(new GridLayout(8,1));
	   squaresAvail.setBackground(Color.decode("#ffffff"));
	//   squaresAvail.setPreferredSize(new Dimension(80,80));
	   background.add(squaresAvail, BorderLayout.EAST);	   
	   
	   for(i=0; i < numColours; i++){
		   avail[i] = new JPanel();
		   avail[i].setBackground(Color.decode("#ffffff"));
		   SquareArtSquare square = new SquareArtSquare(colours[i]);
		   square.setPreferredSize(new Dimension(30,30));	
		   avail[i].add(square);	   
		   squaresAvail.add(avail[i]);
		   avail[i].addMouseListener(new ColourMouseListener());
	   }
	   
	  /* avail1.setBackground(Color.decode("#ffffff"));
	   SquareArtSquare greenSquare = new SquareArtSquare("#00dd00");
	   greenSquare.setPreferredSize(new Dimension(30,30));	
       avail1.add(greenSquare);	   
	   squaresAvail.add(avail1);
	   avail1.addMouseListener(new ColourMouseListener());
	   
	   
	   avail2.setBackground(Color.decode("#ffffff"));
	   SquareArtSquare blueSquare = new SquareArtSquare("#0000ff");
	   blueSquare.setPreferredSize(new Dimension(30,30));
	   avail2.add(blueSquare);
	   squaresAvail.add(avail2);
	   avail2.addMouseListener(new ColourMouseListener());
	   
	   
	   avail3.setBackground(Color.decode("#ffffff"));
	   SquareArtSquare yellowSquare = new SquareArtSquare("#ffff00");
	   yellowSquare.setPreferredSize(new Dimension(30,30));
	   avail3.add(yellowSquare);
	   squaresAvail.add(avail3);
	   avail3.addMouseListener(new ColourMouseListener());
	   
	   
	   avail4.setBackground(Color.decode("#ffffff"));
	   SquareArtSquare redSquare = new SquareArtSquare("#ff0000");
	   redSquare.setPreferredSize(new Dimension(30,30));
	   avail4.add(redSquare);
	   squaresAvail.add(avail4);
	   avail4.addMouseListener(new ColourMouseListener());*/
	   	     
	   setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	 }
	 private void addColour(int spotN, String colour){		 
		 spot[spotN].setBackground(Color.decode(colour));
	 }
	 	
     public static void main(String[]args){		 		  
	   SquareArt screen = new SquareArt();  
	 }
	 
	 class ColourMouseListener implements MouseListener{
      public void mouseClicked(MouseEvent e) {
        System.out.println("Colour Click!");	
      }

      public void mousePressed(MouseEvent e) {
		 System.out.println("Down!");
		 for (i=0; i<numColours; i++){
				 if (avail[i].equals(e.getSource())){
		           System.out.println(selectedColour);
				   selectedColour = colours[i];
		           //spot[i].setBackground(Color.decode(selectedColour));
				 }
            }	
		// System.out.println(e.getSource());
		/*  if (avail1.equals(e.getSource())) {
            System.out.println("avail1");
			selectedColour = "#00dd00";
          }
		  else if (avail2.equals(e.getSource())) {
            System.out.println("avail2");
			selectedColour = "#0000ff";
          }
		  else if (avail3.equals(e.getSource())) {
            System.out.println("avail3");
			selectedColour = "#ffff00";
          }
		  else if (avail4.equals(e.getSource())) {
            System.out.println("avail4");
			selectedColour = "#ff0000";
          }		*/
      }

      public void mouseReleased(MouseEvent e) {
		    int i;
		  	 //	System.out.println(e.getSource());
			 
		/*	for (i=0; i<numSpots; i++){
				 if (spot[i].equals(e.getSource())){
		           System.out.println(selectedColour);
		           spot[i].setBackground(Color.decode(selectedColour));
				 }
            }		*/		
      }

      public void mouseEntered(MouseEvent e) {
      }

      public void mouseExited(MouseEvent e) {	 
      } 
   } 
   
    class SpotMouseListener implements MouseListener{
      public void mouseClicked(MouseEvent e2) {
        System.out.println("Spot Click!");	
      }

      public void mousePressed(MouseEvent e2) {
		 System.out.println("Down!");
		 
		 
		// System.out.println(e2.getSource());
		 /* if (avail1.equals(e2.getSource())) {
            System.out.println("avail1 or spot?");
			selectedColour = "#00dd00";
			spot[0].setBackground(Color.decode(selectedColour));
          }
		  else if (avail2.equals(e2.getSource())) {
            System.out.println("avail2");
			selectedColour = "#0000ff";
          }
		  else if (avail3.equals(e2.getSource())) {
            System.out.println("avail3");
			selectedColour = "#ffff00";
          }
		  else if (avail4.equals(e2.getSource())) {
            System.out.println("avail4");
			selectedColour = "#ff0000";
          }		*/
      }

      public void mouseReleased(MouseEvent e2) {
		  	// 	System.out.println(e2.getSource());
				System.out.println("Up!");
				for (i=0; i<numSpots; i++){
					 if (spot[i].equals(e2.getSource())){
					   System.out.println(selectedColour);
					   spot[i].setBackground(Color.decode(selectedColour));
					 }
				}	
	
	 // System.out.println("colourNumber:");
	 // System.out.println(colourNumber);
		//  addColour(colourNumber,selectedColour);
      }

      public void mouseEntered(MouseEvent e2) {
      }

      public void mouseExited(MouseEvent e2) {	 
      } 
   } 
}