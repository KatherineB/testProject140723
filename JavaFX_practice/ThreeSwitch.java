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
        Button btnNew = new Button();
        btnNew.setText("New Game");
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
        
      //  StackPane root = new StackPane();
	    Group box = new Group();
        Canvas holder = new Canvas(290, 50);
        GraphicsContext gc = holder.getGraphicsContext2D();
		/*Canvas holder2 = new Canvas(150, 250);
        GraphicsContext gc2 = holder2.getGraphicsContext2D();*/
        drawShapes(gc);
		//drawShapes2(gc2);
        box.getChildren().add(holder);
	//	box.getChildren().add(holder2);
       
		
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
        buttonRow.getChildren().add(btnNew);
		buttonRow.getChildren().add(btnExit);
		buttonRow.setAlignment(Pos.CENTER);
        primaryStage.setScene(new Scene(gameBG, 400, 150));
        primaryStage.show();
    }
	private void drawShapes2(GraphicsContext gc2) {
		gc2.setFill(Color.ORANGE);
		gc2.fillRect(gc2.getCanvas().getLayoutX(),      
                     gc2.getCanvas().getLayoutY(), 
                     gc2.getCanvas().getWidth(), 
                     gc2.getCanvas().getHeight());
	}
	private void drawShapes(GraphicsContext gc) {
		 gc.setFill(Color.TAN);
		// gc.setStroke(Color.BLUE);
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
	  gc.setFill(Color.RED);
	  gc.fillOval(10, 10, 30, 30);
	  gc.fillOval(50, 10, 30, 30);
	  gc.fillOval(90, 10, 30, 30);
	  gc.setFill(Color.BLUE);
	  gc.fillOval(170, 10, 30, 30);
	  gc.fillOval(210, 10, 30, 30);
	  gc.fillOval(250, 10, 30, 30);
	 
	//  gc.setLineWidth(5);
	//  gc.strokeLine(40, 10, 10, 40);
    //    gc.setLineWidth(3);
   //     gc.strokeLine(80, 20, 20, 80);
	//	gc.fillRoundRect(110, 60, 30, 30, 10, 10);
	//	gc.fillArc(110, 110, 30, 30, 45, 240, ArcType.ROUND);
		/*gc.setFill(Color.GREEN);
        gc.setStroke(Color.BLUE);
        gc.setLineWidth(5);
        gc.strokeLine(40, 10, 10, 40);
        gc.fillOval(10, 60, 30, 30);
        gc.strokeOval(60, 60, 30, 30);
        gc.fillRoundRect(110, 60, 30, 30, 10, 10);
        gc.strokeRoundRect(160, 60, 30, 30, 10, 10);
		 gc.fillArc(10, 110, 30, 30, 45, 240, ArcType.OPEN);
        gc.fillArc(60, 110, 30, 30, 45, 240, ArcType.CHORD);
        gc.fillArc(110, 110, 30, 30, 45, 240, ArcType.ROUND);
        gc.strokeArc(10, 160, 30, 30, 45, 240, ArcType.OPEN);
        gc.strokeArc(60, 160, 30, 30, 45, 240, ArcType.CHORD);
        gc.strokeArc(110, 160, 30, 30, 45, 240, ArcType.ROUND);
        gc.fillPolygon(new double[]{10, 40, 10, 40},
                       new double[]{210, 210, 240, 240}, 4);
        gc.strokePolygon(new double[]{60, 90, 60, 90},
                         new double[]{210, 210, 240, 240}, 4);
        gc.strokePolyline(new double[]{110, 140, 110, 140},
                          new double[]{210, 210, 240, 240}, 4);*/
		
		/* gc.setFill(Color.WHITESMOKE);
         gc.fillRect(gc.getCanvas().getLayoutX(),      
                     gc.getCanvas().getLayoutY(), 
                     gc.getCanvas().getWidth(), 
                     gc.getCanvas().getHeight());
         gc.setFill(Color.GREEN);
         gc.setStroke(Color.BLUE);

         gc.setLineWidth(5);
         gc.strokeLine(40, 10, 10, 40);
         gc.fillOval(10, 60, 30, 30);
         gc.strokeOval(60, 60, 30, 30);
         gc.fillRoundRect(110, 60, 30, 30, 10, 10);
         gc.strokeRoundRect(160, 60, 30, 30, 10, 10);
         gc.fillArc(10, 110, 30, 30, 45, 240, ArcType.OPEN);
         gc.fillArc(60, 110, 30, 30, 45, 240, ArcType.CHORD);
         gc.strokeArc(10, 160, 30, 30, 45, 240, ArcType.OPEN);*/
    }
}
