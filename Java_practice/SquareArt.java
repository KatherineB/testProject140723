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
	/* JPanel spot1 = new JPanel();
	 JPanel spot2 = new JPanel();
	 JPanel spot3 = new JPanel();
	 JPanel spot4 = new JPanel();*/
	 
	 JPanel avail1 = new JPanel();
	 JPanel avail2 = new JPanel();
	 JPanel avail3 = new JPanel();
	 JPanel avail4 = new JPanel();
	 
	 int NumSpots = 4;
	 int i;
	 String selectedColour = "#ffffff";
	 JPanel[] spot = new JPanel[4];
	 int colourNumber = 0;
	 
     SquareArt(){
	   setSize(250,200);	   
	   setVisible(true);
	   
	   Container background = getContentPane();
	   background.setLayout(new BorderLayout());	 
	   background.setBackground(Color.decode("#bbeeee"));
	   
	   JPanel centerArea = new JPanel();
	   centerArea.setLayout(new GridLayout(2,2));
	   centerArea.setBackground(Color.decode("#bbaaff"));   
	   background.add(centerArea, BorderLayout.CENTER);
	   	 
	   for( i = 0; i < NumSpots; i++){
		   spot[i] = new JPanel(); 
		   spot[i].setPreferredSize(new Dimension(30,30));
		   spot[i].setBackground(Color.decode("#ffffff"));
		   spot[i].setBorder(new LineBorder(Color.BLACK, 1));
	       spot[i].addMouseListener(new CustomMouseListener());
		   centerArea.add(spot[i]);
	   }
	   
	   JPanel squaresAvail = new JPanel();
	   squaresAvail.setLayout(new GridLayout(8,1));
	   squaresAvail.setBackground(Color.decode("#ffffff"));
	//   squaresAvail.setPreferredSize(new Dimension(80,80));
	   background.add(squaresAvail, BorderLayout.EAST);	   
	   
	   
	   avail1.setBackground(Color.decode("#ffffff"));
	   SquareArtSquare greenSquare = new SquareArtSquare("#00dd00");
	   greenSquare.setPreferredSize(new Dimension(30,30));	
       avail1.add(greenSquare);	   
	   squaresAvail.add(avail1);
	   avail1.addMouseListener(new CustomMouseListener());
	   
	   
	   avail2.setBackground(Color.decode("#ffffff"));
	   SquareArtSquare blueSquare = new SquareArtSquare("#0000ff");
	   blueSquare.setPreferredSize(new Dimension(30,30));
	   avail2.add(blueSquare);
	   squaresAvail.add(avail2);
	   avail2.addMouseListener(new CustomMouseListener());
	   
	   
	   avail3.setBackground(Color.decode("#ffffff"));
	   SquareArtSquare yellowSquare = new SquareArtSquare("#ffff00");
	   yellowSquare.setPreferredSize(new Dimension(30,30));
	   avail3.add(yellowSquare);
	   squaresAvail.add(avail3);
	   avail3.addMouseListener(new CustomMouseListener());
	   
	   
	   avail4.setBackground(Color.decode("#ffffff"));
	   SquareArtSquare redSquare = new SquareArtSquare("#ff0000");
	   redSquare.setPreferredSize(new Dimension(30,30));
	   avail4.add(redSquare);
	   squaresAvail.add(avail4);
	   avail4.addMouseListener(new CustomMouseListener());
	   	   
	   //addColour(0,"#00dd00");
	  
	   setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	 }
	 private void addColour(int spotN, String colour){		 
		 spot[spotN].setBackground(Color.decode(colour));
	 }
	 
	/* public void mouseClicked(MouseEvent e) {
        	   addColour(0,"#00dd00");
    }*/

	/*	MouseListener mouseListener = new MouseAdapter(){
			public void mouseClicked(MouseEvent me) { 
            System.out.println(me); 
          } 
        }; */
 
/*	 avail1.addMouseListener(new MouseAdapter() {
    public void mouseClicked(MouseEvent e) {
        System.out.println("Clicked!");
    }
    });*/
///
	 
     public static void main(String[]args){		 		  
	   SquareArt screen = new SquareArt();  
	 }
	 
	 class CustomMouseListener implements MouseListener{
      public void mouseClicked(MouseEvent e) {
      //  System.out.println("Click!");
		
      }

      public void mousePressed(MouseEvent e) {
		 // System.out.println("Down!");
		  if (avail1.equals(e.getSource())) {
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
          }		
      }

      public void mouseReleased(MouseEvent e) {
		  	  	
	  if (spot[0].equals(e.getSource())){
		      colourNumber = 0;
		   //  System.out.println(selectedColour);
		   //  spot[0].setBackground(Color.decode(selectedColour));
	      }
	  else if (spot[1].equals(e.getSource())){
		      colourNumber = 1;
	      }
	  else if (spot[2].equals(e.getSource())){
		      colourNumber = 2;
	      }
	  else if (spot[3].equals(e.getSource())){
		      colourNumber = 3;
	      }
		  
	/*  if (spot[1].equals(e.getSource())){
		     System.out.println(selectedColour);
		     spot[1].setBackground(Color.decode(selectedColour));
	      } */
		  addColour(colourNumber,selectedColour);
      }

      public void mouseEntered(MouseEvent e) {
      }

      public void mouseExited(MouseEvent e) {	 
      } 
   } 
}