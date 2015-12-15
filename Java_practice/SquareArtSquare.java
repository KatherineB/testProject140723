package squareartkb;

import javax.swing.*;
import javax.swing.border.*;
import javax.imageio.*;
import java.awt.*;
import java.awt.event.*;
import java.awt.image.*;
import java.text.*;
import java.io.*;

public class SquareArtSquare extends JPanel{
	public SquareArtSquare(String colour){
		setBackground(Color.decode(colour));
		setBounds(0, 0, 100, 100);
		setOpaque(true);
	 }
}