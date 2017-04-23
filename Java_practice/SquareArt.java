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
	 JPanel[] spot = new JPanel[36];
     JPanel[] avail = new JPanel[16];
	 String[] colours = {"#ffffff","#ff4488","#0000ff","#00aa00","#ffff00","#00dddd","#ff0000", "#00ff00","#999999","#995500","#5555dd","#880099","#66ccee","#005555","#ff7700", "#000000"};
	
	 int numSpots = 36;
	 int numColours = 16;
	 int i;
	 String selectedColour = "#ffffff";
	 	 
     SquareArt(){
	   setSize(280,200);	   
	   setVisible(true);
	   
	   Container background = getContentPane();
	   background.setLayout(new BorderLayout());	 
	   background.setBackground(Color.decode("#bbeeee"));
	   
	   JPanel centerArea = new JPanel();
	   centerArea.setLayout(new GridLayout(6,6));
	   centerArea.setBackground(Color.decode("#bbaaff"));   
	   background.add(centerArea, BorderLayout.CENTER);
	   	 
	   for( i = 0; i < numSpots; i++){
		   spot[i] = new JPanel(); 
		   spot[i].setPreferredSize(new Dimension(29,29));
		   spot[i].setBackground(Color.decode("#ffffff"));
		   spot[i].setBorder(new LineBorder(Color.BLACK, 1));
	       spot[i].addMouseListener(new SpotMouseListener());
		   centerArea.add(spot[i]);
	   }
	     
	   JPanel squaresAvail = new JPanel();
	   squaresAvail.setLayout(new GridLayout(8,2));
	 //  squaresAvail.setBackground(Color.decode("#999977"));
	//   squaresAvail.setPreferredSize(new Dimension(80,80));
	   background.add(squaresAvail, BorderLayout.EAST);	   
	   
	   for(i=0; i < numColours; i++){
		   avail[i] = new JPanel();
		   spot[i].setPreferredSize(new Dimension(30,30));
		   avail[i].setBackground(Color.decode("#ccccaa"));
		   SquareArtSquare square = new SquareArtSquare(colours[i]);
		   square.setPreferredSize(new Dimension(30,30));	
		   avail[i].add(square);	   
		   squaresAvail.add(avail[i]);
		   avail[i].addMouseListener(new ColourMouseListener());
	   }
	    	     
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