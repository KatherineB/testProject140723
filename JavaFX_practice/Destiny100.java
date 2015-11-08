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
 
public class Destiny100 extends Application {
	int canPick = 1;
	
    public static void main(String[] args) {
        launch(args);	
    }
    
    @Override
    public void start(Stage primaryStage) {
        primaryStage.setTitle("Destiny100");       
        
	    Group destGroup = new Group();
		
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
		buttonRow.setStyle("-fx-background-color: #9999dd;");
		
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
		
		Label choice1 = new Label("0");
		choice1.setStyle("-fx-font-size: 15px;");
		Label choice2 = new Label("0");
		choice2.setStyle("-fx-font-size: 15px;");
		Label choice3 = new Label("0");
		choice3.setStyle("-fx-font-size: 15px;");
		
		//canPick = 1;
		startNewGame(score, choice1, choice2, choice3);
		
		choiceStack1.getChildren().add(choiceBG1);
		choiceStack2.getChildren().add(choiceBG2);
		choiceStack3.getChildren().add(choiceBG3);
		
	//	choiceStack1.getChildren().add(choice1);
	//	choiceStack2.getChildren().add(choice2);
	//	choiceStack3.getChildren().add(choice3);
		
		rowMid.getChildren().add(choiceStack1);
		rowMid.getChildren().add(choiceStack2);
		rowMid.getChildren().add(choiceStack3);
					
	    rowTop.setAlignment(Pos.CENTER);
		rowMid.setAlignment(Pos.CENTER);
		buttonRow.setAlignment(Pos.CENTER);
		scoreStack.setAlignment(Pos.CENTER);
		
		Button btnNewGame = new Button();
        btnNewGame.setText("New Game");
		
		btnNewGame.setOnAction(new EventHandler<ActionEvent>() {
 
            @Override
            public void handle(ActionEvent event) {
				
				canPick = 1;
				choiceStack1.getChildren().remove(choice1);	
				choiceStack2.getChildren().remove(choice2);
				choiceStack3.getChildren().remove(choice3);
				startNewGame(score, choice1, choice2, choice3);
            }
        });
		
		
		Button btnPickLeft = new Button();
        btnPickLeft.setText("Pick Left");		
		btnPickLeft.setOnAction(new EventHandler<ActionEvent>() {
 
            @Override
            public void handle(ActionEvent event) {
				System.out.println(canPick);
				if(canPick == 1){
					String numL = choice1.getText();
					String numTop = score.getText();
					
					int numLeft = Integer.parseInt(numL);
					int numScore = Integer.parseInt(numTop);
					
					int newNum = numLeft + numScore;
					
					String newScore = Integer.toString(newNum);
					score.setText(newScore);
					
					choiceStack1.getChildren().add(choice1);
					canPick = 0;
				}
				else{
					choice1.setText("Click\n Next\n Cards");
				}
				
            }
        });
		
		Button btnPickCentre = new Button();
        btnPickCentre.setText("Pick Centre");		
		btnPickCentre.setOnAction(new EventHandler<ActionEvent>() {
 
            @Override
            public void handle(ActionEvent event) {
				System.out.println(canPick);
				if(canPick == 1){
					String numL = choice2.getText();
					String numTop = score.getText();
					
					int numLeft = Integer.parseInt(numL);
					int numScore = Integer.parseInt(numTop);
					
					int newNum = numLeft + numScore;
					
					String newScore = Integer.toString(newNum);
					score.setText(newScore);
					
					choiceStack2.getChildren().add(choice2);
					canPick = 0;
				}
				else{					
					choice2.setText("Click\n Next\n Cards");				
				}
				
            }
        });
		
		Button btnPickRight = new Button();
        btnPickRight.setText("Pick Right");		
		btnPickRight.setOnAction(new EventHandler<ActionEvent>() {
 
            @Override
            public void handle(ActionEvent event) {
				System.out.println(canPick);
				if(canPick == 1){
					
					String numL = choice3.getText();
					String numTop = score.getText();
					
					int numLeft = Integer.parseInt(numL);
					int numScore = Integer.parseInt(numTop);
					
					int newNum = numLeft + numScore;
					
					String newScore = Integer.toString(newNum);
					score.setText(newScore);
					
					choiceStack3.getChildren().add(choice3);
					canPick = 0;
				}
				else{
					choice3.setText("Click\n Next\n Cards");
				}
				
            }
        });
		
		Button btnNextPick = new Button();
        btnNextPick.setText("Next Cards");		
		btnNextPick.setOnAction(new EventHandler<ActionEvent>() {
 
            @Override
            public void handle(ActionEvent event) {		
			   System.out.println(canPick);
                choiceStack1.getChildren().remove(choice1);	
				choiceStack2.getChildren().remove(choice2);
				choiceStack3.getChildren().remove(choice3);
				canPick = 1;
				pickNewCards(choice1, choice2, choice3);
				System.out.println(canPick);
            }
        });
		
		buttonRow.getChildren().add(btnNewGame);
		buttonRow.getChildren().add(btnPickLeft);
		buttonRow.getChildren().add(btnPickCentre);
		buttonRow.getChildren().add(btnPickRight);
		buttonRow.getChildren().add(btnNextPick);
		buttonRow.getChildren().add(btnExit);
		
		Scene destGame = new Scene(gameBG, 450, 250);
		//destGame.getStylesheets().add("destiny100.css");	
		
        primaryStage.setScene(destGame);
        primaryStage.show();
    }
	private void startNewGame(Label score, Label choice1, Label choice2, Label choice3){
		score.setText("20");
		choice1.setStyle("-fx-color: #ffffff;");
		choice2.setStyle("-fx-color: #ffffff;");
		choice3.setStyle("-fx-color: #ffffff;");
		pickNewCards(choice1, choice2, choice3);
	}
	private void pickNewCards(Label choice1, Label choice2, Label choice3){
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
		double randomNumber = Math.random() * 4 + 1;
		int number = (int)randomNumber;
		int endNumber = number * 5 * negInd;
		String displayNo = Integer.toString(endNumber);
		return displayNo;		
	}	
}
/*
// assuming you have defined a StringProperty called "valueProperty"
Label myLabel = new Label("Start");
myLabel.textProperty().bind(valueProperty);*/


/* Returns an integer between low and high, inclusive. */ /*
function Rnd(low: Integer, high: Integer): Integer
{
     return (low + (high - low) * Math.random() + 0.5) as Integer;
}*/
/* Returns an integer between 0 and limit, inclusive. */ /*
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