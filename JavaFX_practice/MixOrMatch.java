import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.Group;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.layout.StackPane;
import javafx.scene.layout.StackPane;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.FlowPane;
import javafx.scene.canvas.Canvas;
import javafx.scene.canvas.GraphicsContext;
import javafx.scene.paint.Color;
import javafx.scene.shape.ArcType;
import javafx.geometry.Pos;
import javafx.stage.Stage;
 
public class MixOrMatch extends Application {
	
    public static void main(String[] args) {
        launch(args);
    }
    
    @Override
    public void start(Stage primaryStage) {
		int[] positionColour = {0,0,0,0};
        primaryStage.setTitle("MixOrMatch");       
     
	    Group box = new Group();
		
        Canvas holder = new Canvas(170, 50);
        GraphicsContext gc = holder.getGraphicsContext2D();
		drawFixedGraphics(gc);
				
		Canvas red1 = new Canvas(40, 50);
		GraphicsContext gcRed1 = red1.getGraphicsContext2D();
		drawRedCircle1(gcRed1);        
				
		Canvas blue1 = new Canvas(40, 50);
		GraphicsContext gcBlue1 = blue1.getGraphicsContext2D();
		drawBlueCircle1(gcBlue1);   
		
		Canvas green1 = new Canvas(40, 50);
		GraphicsContext gcGreen1 = green1.getGraphicsContext2D();
		drawGreenCircle1(gcGreen1);        
				
		Canvas yellow1 = new Canvas(40, 50);
		GraphicsContext gcYellow1 = yellow1.getGraphicsContext2D();
		drawYellowCircle1(gcYellow1);   

        Canvas red2 = new Canvas(80, 50);
		GraphicsContext gcRed2 = red2.getGraphicsContext2D();
		drawRedCircle2(gcRed2);        
				
		Canvas blue2 = new Canvas(80, 50);
		GraphicsContext gcBlue2 = blue2.getGraphicsContext2D();
		drawBlueCircle2(gcBlue2); 	
		
		Canvas green2 = new Canvas(80, 50);
		GraphicsContext gcGreen2 = green2.getGraphicsContext2D();
		drawGreenCircle2(gcGreen2);        
				
		Canvas yellow2 = new Canvas(80, 50);
		GraphicsContext gcYellow2 = yellow2.getGraphicsContext2D();
		drawYellowCircle2(gcYellow2);

        Canvas red3 = new Canvas(120, 50);
		GraphicsContext gcRed3 = red3.getGraphicsContext2D();
		drawRedCircle3(gcRed3);        
				
		Canvas blue3 = new Canvas(120, 50);
		GraphicsContext gcBlue3 = blue3.getGraphicsContext2D();
		drawBlueCircle3(gcBlue3);

        Canvas green3 = new Canvas(120, 50);
		GraphicsContext gcGreen3 = green3.getGraphicsContext2D();
		drawGreenCircle3(gcGreen3);        
				
		Canvas yellow3 = new Canvas(120, 50);
		GraphicsContext gcYellow3 = yellow3.getGraphicsContext2D();
		drawYellowCircle3(gcYellow3);		
		
		Canvas red4 = new Canvas(160, 50);
		GraphicsContext gcRed4 = red4.getGraphicsContext2D();
		drawRedCircle4(gcRed4);        
				
		Canvas blue4 = new Canvas(160, 50);
		GraphicsContext gcBlue4 = blue4.getGraphicsContext2D();
		drawBlueCircle4(gcBlue4);
		
		Canvas green4 = new Canvas(160, 50);
		GraphicsContext gcGreen4 = green4.getGraphicsContext2D();
		drawGreenCircle4(gcGreen4);        
				
		Canvas yellow4 = new Canvas(160, 50);
		GraphicsContext gcYellow4 = yellow4.getGraphicsContext2D();
		drawYellowCircle4(gcYellow4);
       
	    Button btnNew = new Button();
        btnNew.setText("Start Over");
        btnNew.setOnAction(new EventHandler<ActionEvent>() {
 
            @Override
            public void handle(ActionEvent event) {
                System.out.println("Start over clicked");
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
	   
	    Button btnChange = new Button();
        btnChange.setText("Change");
        btnChange.setOnAction(new EventHandler<ActionEvent>() {
 
            @Override
            public void handle(ActionEvent event) {
              //  System.out.println("change clicked");
				int circleNo;
				circleNo = chooseCircle();
				System.out.println(circleNo);
				/*box.getChildren().remove(red1);
				box.getChildren().add(blue1);*/
            }
        });
		
		Button btnTest2 = new Button();
        btnTest2.setText("test2");
        btnTest2.setOnAction(new EventHandler<ActionEvent>() {
 
            @Override
            public void handle(ActionEvent event) {
                System.out.println("test clicked");
				box.getChildren().remove(blue2);
				box.getChildren().add(green2);
            }
        });
		
		BorderPane gameBG = new BorderPane();
		gameBG.setStyle("-fx-background-color: #aaaaaa;");
				
		FlowPane displayArea = new FlowPane();
		displayArea.setStyle("-fx-background-color: #115544;");
		FlowPane pickingRow = new FlowPane();
		pickingRow.setStyle("-fx-background-color: #115544;");
		FlowPane buttonRow = new FlowPane();
		buttonRow.setStyle("-fx-background-color: #ccccaa;");
		
		gameBG.setTop(displayArea);
		gameBG.setCenter(pickingRow);
	    gameBG.setBottom(buttonRow);
		
		displayArea.getChildren().add(box);
		displayArea.setAlignment(Pos.CENTER);
		
		box.getChildren().add(holder);
		box.getChildren().add(red1);
		box.getChildren().add(blue2);
		box.getChildren().add(green3);
		box.getChildren().add(yellow4);
		
        buttonRow.getChildren().add(btnNew);
		buttonRow.getChildren().add(btnExit);
		buttonRow.getChildren().add(btnChange);
		buttonRow.getChildren().add(btnTest2);
		buttonRow.setAlignment(Pos.CENTER);
			
        primaryStage.setScene(new Scene(gameBG, 300, 200));
        primaryStage.show();
    }
	private int chooseCircle(){
		double circle = Math.random() * 4 + 1;
		int circleNo = (int)circle;
		return circleNo;
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
    }
	private void drawRedCircle1(GraphicsContext gcRed1) {
		gcRed1.setFill(Color.RED);
		gcRed1.fillOval(10, 10, 30, 30);			 
	}
	private void drawBlueCircle1(GraphicsContext gcBlue1) {
		gcBlue1.setFill(Color.BLUE);
		gcBlue1.fillOval(10, 10, 30, 30);			 
	}
	private void drawGreenCircle1(GraphicsContext gcGreen1) {
		gcGreen1.setFill(Color.GREEN);
		gcGreen1.fillOval(10, 10, 30, 30);			 
	}
	private void drawYellowCircle1(GraphicsContext gcYellow1) {
		gcYellow1.setFill(Color.YELLOW);
		gcYellow1.fillOval(10, 10, 30, 30);			 
	}
	private void drawRedCircle2(GraphicsContext gcRed2) {
		gcRed2.setFill(Color.RED);
		gcRed2.fillOval(50, 10, 30, 30);			 
	}
	private void drawBlueCircle2(GraphicsContext gcBlue2) {
		gcBlue2.setFill(Color.BLUE);
		gcBlue2.fillOval(50, 10, 30, 30);			 
	}
	private void drawGreenCircle2(GraphicsContext gcGreen2) {
		gcGreen2.setFill(Color.GREEN);
		gcGreen2.fillOval(50, 10, 30, 30);			 
	}
	private void drawYellowCircle2(GraphicsContext gcYellow2) {
		gcYellow2.setFill(Color.YELLOW);
		gcYellow2.fillOval(50, 10, 30, 30);			 
	}
	private void drawRedCircle3(GraphicsContext gcRed3) {
		gcRed3.setFill(Color.RED);
		gcRed3.fillOval(90, 10, 30, 30);			 
	}
	private void drawBlueCircle3(GraphicsContext gcBlue3) {
		gcBlue3.setFill(Color.BLUE);
		gcBlue3.fillOval(90, 10, 30, 30);		
	}
	private void drawGreenCircle3(GraphicsContext gcGreen3) {
		gcGreen3.setFill(Color.GREEN);
		gcGreen3.fillOval(90, 10, 30, 30);			 
	}
	private void drawYellowCircle3(GraphicsContext gcYellow3) {
		gcYellow3.setFill(Color.YELLOW);
		gcYellow3.fillOval(90, 10, 30, 30);			 
	}
	private void drawRedCircle4(GraphicsContext gcRed4) {
		gcRed4.setFill(Color.RED);
		gcRed4.fillOval(130, 10, 30, 30);			 
	}
	private void drawBlueCircle4(GraphicsContext gcBlue4) {
		gcBlue4.setFill(Color.BLUE);
		gcBlue4.fillOval(130, 10, 30, 30);			 
	}
	private void drawGreenCircle4(GraphicsContext gcGreen4) {
		gcGreen4.setFill(Color.GREEN);
		gcGreen4.fillOval(130, 10, 30, 30);			 
	}
	private void drawYellowCircle4(GraphicsContext gcYellow4) {
		gcYellow4.setFill(Color.YELLOW);
		gcYellow4.fillOval(130, 10, 30, 30);			 
	}
}
