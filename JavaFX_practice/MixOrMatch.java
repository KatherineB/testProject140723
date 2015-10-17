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
		int i;
		int j;
		int colourNo;
		int circleNo;
		/* first dimension is position, 2nd dimension is colour */
		Canvas[][] circles;
		circles = new Canvas[4][4];
		
		int[][] circlesDisplayed = new int[4][4];
		for(j=0; j<4; j++){
			for(i=0; i<4; i++){
				circlesDisplayed[i][j] = 0;
			}
		}
		
        primaryStage.setTitle("MixOrMatch");       
     
	    Group box = new Group();
		
        Canvas holder = new Canvas(170, 50);
        GraphicsContext gc = holder.getGraphicsContext2D();
		drawFixedGraphics(gc);
				
		circles[0][0] = new Canvas(40, 50);
		GraphicsContext gcRed1 = circles[0][0].getGraphicsContext2D();
		drawRedCircle1(gcRed1);        
				
		circles[0][1] = new Canvas(40, 50);
		GraphicsContext gcBlue1 = circles[0][1].getGraphicsContext2D();
		drawBlueCircle1(gcBlue1);   
		
		circles[0][2] = new Canvas(40, 50);
		GraphicsContext gcGreen1 = circles[0][2].getGraphicsContext2D();
		drawGreenCircle1(gcGreen1);        
				
		circles[0][3] = new Canvas(40, 50);
		GraphicsContext gcYellow1 = circles[0][3].getGraphicsContext2D();
		drawYellowCircle1(gcYellow1);   

        circles[1][0] = new Canvas(80, 50);
		GraphicsContext gcRed2 = circles[1][0].getGraphicsContext2D();
		drawRedCircle2(gcRed2);        
				
		circles[1][1] = new Canvas(80, 50);
		GraphicsContext gcBlue2 = circles[1][1].getGraphicsContext2D();
		drawBlueCircle2(gcBlue2); 	
		
		circles[1][2] = new Canvas(80, 50);
		GraphicsContext gcGreen2 = circles[1][2].getGraphicsContext2D();
		drawGreenCircle2(gcGreen2);        
				
		circles[1][3] = new Canvas(80, 50);
		GraphicsContext gcYellow2 = circles[1][3].getGraphicsContext2D();
		drawYellowCircle2(gcYellow2);

        circles[2][0] = new Canvas(120, 50);
		GraphicsContext gcRed3 = circles[2][0].getGraphicsContext2D();
		drawRedCircle3(gcRed3);        
				
		circles[2][1] = new Canvas(120, 50);
		GraphicsContext gcBlue3 = circles[2][1].getGraphicsContext2D();
		drawBlueCircle3(gcBlue3);

        circles[2][2] = new Canvas(120, 50);
		GraphicsContext gcGreen3 = circles[2][2].getGraphicsContext2D();
		drawGreenCircle3(gcGreen3);        
				
		circles[2][3] = new Canvas(120, 50);
		GraphicsContext gcYellow3 = circles[2][3].getGraphicsContext2D();
		drawYellowCircle3(gcYellow3);		
		
		circles[3][0] = new Canvas(160, 50);
		GraphicsContext gcRed4 = circles[3][0].getGraphicsContext2D();
		drawRedCircle4(gcRed4);        
				
		circles[3][1] = new Canvas(160, 50);
		GraphicsContext gcBlue4 = circles[3][1].getGraphicsContext2D();
		drawBlueCircle4(gcBlue4);
		
		circles[3][2] = new Canvas(160, 50);
		GraphicsContext gcGreen4 = circles[3][2].getGraphicsContext2D();
		drawGreenCircle4(gcGreen4);        
				
		circles[3][3] = new Canvas(160, 50);
		GraphicsContext gcYellow4 = circles[3][3].getGraphicsContext2D();
		drawYellowCircle4(gcYellow4);
       
	    Button btnNew = new Button();
        btnNew.setText("New Game");
        btnNew.setOnAction(new EventHandler<ActionEvent>() {
 
            @Override
            public void handle(ActionEvent event) {
               // System.out.println("Start over clicked");
			    int i;
			    int j;
			    int colourNo;
				
			    for(j=0; j<4; j++){
					for(i=0; i<4; i++){
						circlesDisplayed[i][j] = 0;
						box.getChildren().remove(circles[i][j]);
					}
				}
				
			    for(i=0; i<4; i++){
				   colourNo = pickRand4();
				   box.getChildren().add(circles[i][colourNo]);
				   circlesDisplayed[i][colourNo] = 1;				   
			    }
            }
        });
		
	    Button btnChange = new Button();
        btnChange.setText("Change");
        btnChange.setOnAction(new EventHandler<ActionEvent>() {
 
            @Override
            public void handle(ActionEvent event) {
              //  System.out.println("change clicked");
				int circleNo;
				int colourNo;
				int colourChange=0;				
				
				do{
					circleNo = pickRand4();
				    colourNo = pickRand4();
					//System.out.println(circleNo);
					//System.out.println(colourNo);
					if(circlesDisplayed[circleNo][colourNo] == 1){
					  // System.out.println("It is alresdy that colour");
				    }
					else{
						colourChange = 1;
					}
				}while(colourChange == 0);
					
				if(circlesDisplayed[circleNo][0] == 1){
					box.getChildren().remove(circles[circleNo][0]);
					circlesDisplayed[circleNo][0] = 0;
				}
				else if(circlesDisplayed[circleNo][1] == 1){
					box.getChildren().remove(circles[circleNo][1]);
					circlesDisplayed[circleNo][1] = 0;
				}
			    else if(circlesDisplayed[circleNo][2] == 1){
					box.getChildren().remove(circles[circleNo][2]);
					circlesDisplayed[circleNo][2] = 0;
				}
				else if(circlesDisplayed[circleNo][3] == 1){
					box.getChildren().remove(circles[circleNo][3]);
					circlesDisplayed[circleNo][3] = 0;
				}
				box.getChildren().add(circles[circleNo][colourNo]);
				circlesDisplayed[circleNo][colourNo] = 1;
            }
        });
		
		Button btnTest2 = new Button();
        btnTest2.setText("test2");
        btnTest2.setOnAction(new EventHandler<ActionEvent>() {
 
            @Override
            public void handle(ActionEvent event) {
                System.out.println("test clicked");
				box.getChildren().remove(circles[1][1]);
				box.getChildren().add(circles[1][2]);
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
		
        buttonRow.getChildren().add(btnNew);		
		buttonRow.getChildren().add(btnChange);
		buttonRow.getChildren().add(btnTest2);
		buttonRow.getChildren().add(btnExit);
		buttonRow.setAlignment(Pos.CENTER);
			
        primaryStage.setScene(new Scene(gameBG, 300, 200));
        primaryStage.show();
    }
	private int pickRand4(){
		double rand4 = Math.random() * 4;
		int randNo4 = (int)rand4;
		return randNo4;
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
