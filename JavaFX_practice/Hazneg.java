import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.Group;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.layout.StackPane;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.FlowPane;
import javafx.scene.canvas.Canvas;
import javafx.scene.canvas.GraphicsContext;
import javafx.scene.paint.Color;
import javafx.scene.shape.ArcType;
import javafx.geometry.Pos;
import javafx.stage.Stage;
 
public class Hazneg extends Application {
	
    public static void main(String[] args) {
        launch(args);
    }
    
    @Override
    public void start(Stage primaryStage) {
        primaryStage.setTitle("Hazneg");       
     
	    Group haz = new Group();
		Canvas score1 = new Canvas(50, 50);
		GraphicsContext gcScore1 = score1.getGraphicsContext2D();
		createScore1Rect(gcScore1);
             
				
				
       
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
	   
	    
		
		
		
		BorderPane gameBG = new BorderPane();
		gameBG.setStyle("-fx-background-color: #aaaaaa;");
						
		FlowPane rowTop = new FlowPane();
		rowTop.setStyle("-fx-background-color: #881133;");
		
		FlowPane rowMid = new FlowPane();
		rowMid.setStyle("-fx-background-color: #881133;");
		
		FlowPane buttonRow = new FlowPane();
		buttonRow.setStyle("-fx-background-color: #ccccaa;");
		
		gameBG.setTop(rowTop);
		gameBG.setCenter(rowMid);
	    gameBG.setBottom(buttonRow);
		
	//	playArea.getChildren().add(box);
	//	playArea.setAlignment(Pos.CENTER);
	    rowTop.getChildren().add(haz);
		haz.getChildren().add(score1);
		
		Label score = new Label("20");
		score.setStyle("-fx-color: #000000;");
		score.setStyle("-fx-font-size: 22px;");
		score1.getChildren().add(score);
		
        buttonRow.getChildren().add(btnNew);
		buttonRow.getChildren().add(btnExit);
	
	    rowTop.setAlignment(Pos.CENTER);
		rowMid.setAlignment(Pos.CENTER);
		buttonRow.setAlignment(Pos.CENTER);
		
		Scene haznegGame = new Scene(gameBG, 400, 250);
		//haznegGame.getStylesheets().add("hazneg.css");	
        primaryStage.setScene(haznegGame);
        primaryStage.show();
    }
	
	private void createScore1Rect(GraphicsContext gcScore1) {
		gcScore1.setFill(Color.WHITE);
		gcScore1.fillRect(0,0,30, 30);			 
	}
}
