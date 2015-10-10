import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.Group;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.StackPane;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.FlowPane;
import javafx.scene.canvas.Canvas;
import javafx.scene.canvas.GraphicsContext;
import javafx.scene.paint.Color;
import javafx.scene.shape.ArcType;
import javafx.geometry.Pos;
import javafx.stage.Stage;
 
public class ThreeSwitch extends Application {
	
    public static void main(String[] args) {
        launch(args);
    }
    
    @Override
    public void start(Stage primaryStage) {
        primaryStage.setTitle("ThreeSwitch");       
     
	    Group box = new Group();
		
        Canvas holder = new Canvas(290, 50);
        GraphicsContext gc = holder.getGraphicsContext2D();
		drawFixedGraphics(gc);
				
		Canvas red1 = new Canvas(50, 50);
		GraphicsContext gcRed1 = red1.getGraphicsContext2D();
		drawRedCircle1(gcRed1);        
				
		Canvas blue1 = new Canvas(50, 50);
		GraphicsContext gcBlue1 = blue1.getGraphicsContext2D();
		drawBlueCircle1(gcBlue1);   

        Canvas red2 = new Canvas(50, 50);
		GraphicsContext gcRed2 = red2.getGraphicsContext2D();
		drawRedCircle2(gcRed2);        
				
		Canvas blue2 = new Canvas(50, 50);
		GraphicsContext gcBlue2 = blue2.getGraphicsContext2D();
		drawBlueCircle2(gcBlue2); 	

        Canvas red3 = new Canvas(50, 50);
		GraphicsContext gcRed3 = red3.getGraphicsContext2D();
		drawRedCircle3(gcRed3);        
				
		Canvas blue3 = new Canvas(50, 50);
		GraphicsContext gcBlue3 = blue3.getGraphicsContext2D();
		drawBlueCircle3(gcBlue3);		
       
	    Button btnNew = new Button();
        btnNew.setText("Start Over");
        btnNew.setOnAction(new EventHandler<ActionEvent>() {
 
            @Override
            public void handle(ActionEvent event) {
                System.out.println("New Game clicked");
            }
        });
		
		Button btnExit = new Button();
        btnExit.setText("Exit");
        btnExit.setOnAction(new EventHandler<ActionEvent>() {
 
            @Override
            public void handle(ActionEvent event) {
                System.out.println("Exit clicked");
            }
        });
	   
	    Button btnMoveLeft = new Button();
        btnMoveLeft.setText("Move Left");
        btnMoveLeft.setOnAction(new EventHandler<ActionEvent>() {
 
            @Override
            public void handle(ActionEvent event) {
                System.out.println("test clicked");
				box.getChildren().remove(red1);
				box.getChildren().add(blue1);
            }
        });
		
		Button btnTest2 = new Button();
        btnTest2.setText("test2");
        btnTest2.setOnAction(new EventHandler<ActionEvent>() {
 
            @Override
            public void handle(ActionEvent event) {
                System.out.println("test clicked");
				box.getChildren().remove(red3);
				box.getChildren().add(blue3);
            }
        });
		
		BorderPane gameBG = new BorderPane();
		gameBG.setStyle("-fx-background-color: #aaaaaa;");
				
		FlowPane playArea = new FlowPane();
		playArea.setStyle("-fx-background-color: #667733;");
		FlowPane buttonRow = new FlowPane();
		buttonRow.setStyle("-fx-background-color: #ccccaa;");
		
		gameBG.setCenter(playArea);
	    gameBG.setBottom(buttonRow);
		
		playArea.getChildren().add(box);
		playArea.setAlignment(Pos.CENTER);
		
		box.getChildren().add(holder);
		box.getChildren().add(red1);
		box.getChildren().add(red2);
		box.getChildren().add(red3);
		
        buttonRow.getChildren().add(btnNew);
		buttonRow.getChildren().add(btnExit);
		buttonRow.getChildren().add(btnMoveLeft);
		buttonRow.getChildren().add(btnTest2);
		buttonRow.setAlignment(Pos.CENTER);
			
        primaryStage.setScene(new Scene(gameBG, 400, 150));
        primaryStage.show();
    }
	
	private void drawFixedGraphics(GraphicsContext gc) {
		gc.setFill(Color.TAN);
        gc.fillRect(gc.getCanvas().getLayoutX(),      
                     gc.getCanvas().getLayoutY(), 
                     gc.getCanvas().getWidth(), 
                     gc.getCanvas().getHeight());
		gc.setFill(Color.GREY);
        gc.fillOval(10, 10, 30, 30);
	    gc.fillOval(50, 10, 30, 30);
	    gc.fillOval(90, 10, 30, 30);
	    gc.fillOval(130, 10, 30, 30);
	    gc.fillOval(170, 10, 30, 30);
	    gc.fillOval(210, 10, 30, 30);
	    gc.fillOval(250, 10, 30, 30);	 
    }
	private void drawRedCircle1(GraphicsContext gcRed1) {
		gcRed1.setFill(Color.RED);
		gcRed1.fillOval(10, 10, 30, 30);			 
	}
	private void drawBlueCircle1(GraphicsContext gcBlue1) {
		gcBlue1.setFill(Color.BLUE);
		gcBlue1.fillOval(10, 10, 30, 30);			 
	}
	private void drawRedCircle2(GraphicsContext gcRed2) {
		gcRed2.setFill(Color.RED);
		gcRed2.fillOval(50, 10, 30, 30);			 
	}
	private void drawBlueCircle2(GraphicsContext gcBlue2) {
		gcBlue2.setFill(Color.BLUE);
		gcBlue2.fillOval(50, 10, 30, 30);			 
	}
	private void drawRedCircle3(GraphicsContext gcRed3) {
		gcRed3.setFill(Color.RED);
		gcRed3.fillOval(90, 10, 30, 30);			 
	}
	private void drawBlueCircle3(GraphicsContext gcBlue3) {
		gcBlue3.setFill(Color.BLUE);
		gcBlue3.fillOval(90, 10, 30, 30);			 
	}
}
/*
 gc.setFill(Color.RED);
	  gc.fillOval(10, 10, 30, 30);
	  gc.fillOval(50, 10, 30, 30);
	  gc.fillOval(90, 10, 30, 30);
	  gc.setFill(Color.BLUE);
	  gc.fillOval(170, 10, 30, 30);
	  gc.fillOval(210, 10, 30, 30);
	  gc.fillOval(250, 10, 30, 30);
*/