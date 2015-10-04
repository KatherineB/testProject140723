import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.StackPane;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.FlowPane;
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
		BorderPane gameBG = new BorderPane();
		gameBG.setStyle("-fx-background-color: #aaaaaa;");
		
		FlowPane playArea = new FlowPane();
		playArea.setStyle("-fx-background-color: #667733;");
		FlowPane buttonRow = new FlowPane();
		buttonRow.setStyle("-fx-background-color: #ccccaa;");
		
		gameBG.setCenter(playArea);
	    gameBG.setBottom(buttonRow);
		
        buttonRow.getChildren().add(btnNew);
		buttonRow.getChildren().add(btnExit);
        primaryStage.setScene(new Scene(gameBG, 300, 250));
        primaryStage.show();
    }
}