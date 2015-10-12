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
import javafx.scene.text.Font;
import javafx.scene.text.FontWeight;
import javafx.scene.text.Text;
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
     
	    Group hazGroup = new Group();
		
		Canvas scoreBG = new Canvas(60, 60);
		GraphicsContext gcScoreBG = scoreBG.getGraphicsContext2D();
		createScoreBGRect(gcScoreBG);
		
		Canvas choiceBG1 = new Canvas(60, 60);
		GraphicsContext gcChoice1 = choiceBG1.getGraphicsContext2D();
		createChoice1Rect(gcChoice1);
		
		Canvas choiceBG2 = new Canvas(60, 60);
		GraphicsContext gcChoice2 = choiceBG2.getGraphicsContext2D();
		createChoice2Rect(gcChoice2);
		
		Canvas choiceBG3 = new Canvas(60, 60);
		GraphicsContext gcChoice3 = choiceBG3.getGraphicsContext2D();
		createChoice3Rect(gcChoice3);
                  
	    Button btnNew = new Button();
        btnNew.setText("New Game");
        
		
		Button btnExit = new Button();
        btnExit.setText("Exit");
        btnExit.setOnAction(new EventHandler<ActionEvent>() {
 
            @Override
            public void handle(ActionEvent event) {
                System.out.println("Exit clicked");
            }
        });
	   		
		BorderPane gameBG = new BorderPane();
		gameBG.setStyle("-fx-background-color: #881133;");
						
		FlowPane rowTop = new FlowPane();
		rowTop.setStyle("-fx-padding: 20px;");
				
		FlowPane rowMid = new FlowPane();
		rowMid.setStyle("-fx-background-color: #881133;");
		
		FlowPane buttonRow = new FlowPane();
		buttonRow.setStyle("-fx-background-color: #ccccaa;");
		
		gameBG.setTop(rowTop);
		gameBG.setCenter(rowMid);
	    gameBG.setBottom(buttonRow);
		
		StackPane scoreStack = new StackPane();
		
        Label score = new Label("20");
		score.setStyle("-fx-color: #000000;");
		score.setStyle("-fx-font-size: 30px;");
	
		scoreStack.getChildren().add(scoreBG);
		scoreStack.getChildren().add(score);
		rowTop.getChildren().add(scoreStack);
		
		StackPane choiceStack1 = new StackPane();
		choiceStack1.setStyle("-fx-padding: 20px;");
		StackPane choiceStack2 = new StackPane();
		choiceStack2.setStyle("-fx-padding: 20px;");
		StackPane choiceStack3 = new StackPane();
		choiceStack3.setStyle("-fx-padding: 20px;");
		
		Label choice1 = new Label("5");
		choice1.setStyle("-fx-color: #000000;");
		choice1.setStyle("-fx-font-size: 30px;");
		Label choice2 = new Label("15");
		choice2.setStyle("-fx-color: #000000;");
		choice2.setStyle("-fx-font-size: 30px;");
		Label choice3 = new Label("-10");
		choice3.setStyle("-fx-color:#ff0000;");
		choice3.setStyle("-fx-font-size: 30px;");
		
		choiceStack1.getChildren().add(choiceBG1);
		choiceStack2.getChildren().add(choiceBG2);
		choiceStack3.getChildren().add(choiceBG3);
		
		choiceStack1.getChildren().add(choice1);
		choiceStack2.getChildren().add(choice2);
		choiceStack3.getChildren().add(choice3);
		
		rowMid.getChildren().add(choiceStack1);
		rowMid.getChildren().add(choiceStack2);
		rowMid.getChildren().add(choiceStack3);
				
        buttonRow.getChildren().add(btnNew);
		buttonRow.getChildren().add(btnExit);
	
	    rowTop.setAlignment(Pos.CENTER);
		rowMid.setAlignment(Pos.CENTER);
		buttonRow.setAlignment(Pos.CENTER);
		scoreStack.setAlignment(Pos.CENTER);
		
		btnNew.setOnAction(new EventHandler<ActionEvent>() {
 
            @Override
            public void handle(ActionEvent event) {
				String check1;
				String check2;
				String check3;				
				
				int[] negPicker = {1,1,1};
                double negPick = Math.random() * 3;
		        int neg = (int)negPick;
				
				negPicker[neg] = -1;
				
				check1 = produceRandomNumber(negPicker[0]);
				check2 = produceRandomNumber(negPicker[1]);
				check3 = produceRandomNumber(negPicker[2]);
				
				choice1.setText(check1);
				choice2.setText(check2);
				choice3.setText(check3);
            }
        });
		
		Scene haznegGame = new Scene(gameBG, 400, 250);
		//haznegGame.getStylesheets().add("hazneg.css");	
        primaryStage.setScene(haznegGame);
        primaryStage.show();
    }
	
	private void createScoreBGRect(GraphicsContext gcScoreBG) {
		gcScoreBG.setFill(Color.WHITE);
		gcScoreBG.fillRect(0,0,60,60);			 
	}
	private void createChoice1Rect(GraphicsContext gcChoice1) {
		gcChoice1.setFill(Color.WHITE);
		gcChoice1.fillRect(0,0,60,60);			 
	}
	private void createChoice2Rect(GraphicsContext gcChoice2) {
		gcChoice2.setFill(Color.WHITE);
		gcChoice2.fillRect(0,0,60,60);			 
	}
	private void createChoice3Rect(GraphicsContext gcChoice3) {
		gcChoice3.setFill(Color.WHITE);
		gcChoice3.fillRect(0,0,60,60);			 
	}
	private String produceRandomNumber(int negInd){
		int endNumber = 0;
		double randomNumber = Math.random() * 4 + 1;
		int number = (int)randomNumber;
		endNumber = number * 5 * negInd;
		String displayNo = Integer.toString(endNumber);
		return displayNo;		
	}	
}
/*
// assuming you have defined a StringProperty called "valueProperty"
Label myLabel = new Label("Start");
myLabel.textProperty().bind(valueProperty);*/


/** Returns an integer between low and high, inclusive. */ /*
function Rnd(low: Integer, high: Integer): Integer
{
     return (low + (high - low) * Math.random() + 0.5) as Integer;
}
/** Returns an integer between 0 and limit, inclusive. */ /*
function Rnd(limit: Integer): Integer
{
  return Rnd(0, limit);
}*/

/*
public class ConvertDoubleToString {
  public static void main(String[] args) {
    double aDouble = 0.11;
    String aString = Double.toString(aDouble);
  }
}*/
/*
public class ConvertIntToString {
  public static void main(String[] args) {
    
    int aInt = 1;
    
    String aString = Integer.toString(aInt);
    
  }
}*/