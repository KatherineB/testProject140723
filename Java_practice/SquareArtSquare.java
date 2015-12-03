import javax.swing.*;
import javax.swing.border.*;
import javax.imageio.*;
import java.awt.*;
import java.awt.event.*;
import java.awt.image.*;
import java.text.*;
import java.io.*;

public class SquareArtSquare extends JComponent{
	public SquareArtSquare(){
		setBorder(new LineBorder(Color.RED, 2));
		setBackground(Color.YELLOW);
		setBounds(0, 0, 150, 150);
		setOpaque(false);
	 }
	 
	 public static void main(String[] args) {
    JFrame sas = new JFrame("SquareArt Square");

 
    sas.setLayout(null);

    SquareArtSquare blueSquare = new SquareArtSquare();
    sas.add(blueSquare);

    sas.setSize(200, 200);

    sas.setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
    sas.setVisible(true);
  }
}