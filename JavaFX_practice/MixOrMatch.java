import javafx.application.Application;
import javafx.event.ActionEvent;
//import javafx.event.ChangeListener;
import javafx.event.EventHandler;
import javafx.scene.Group;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.RadioButton;
import javafx.scene.control.ToggleGroup;
import javafx.scene.control.Label;
import javafx.scene.layout.StackPane;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.FlowPane;
import javafx.scene.layout.VBox;
import javafx.scene.canvas.Canvas;
import javafx.scene.canvas.GraphicsContext;
import javafx.scene.paint.Color;
import javafx.scene.shape.ArcType;
import javafx.scene.text.Text;
import javafx.scene.text.Font;
import javafx.scene.text.FontWeight;
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
              
			    int i;
			    int j;
			    int colourNo;
			
			    for(j=0; j<4; j++){
					for(i=0; i<4; i++){
						circlesDisplayed[i][j] = 0;
						box.getChildren().remove(circles[i][j]);
					}
				}
				
				/* this picks circle colours at random and displays them on screen */
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
			    int i;
				int j;
				int win=0;
				int circleNo;
				int colourNo;
				int colourChange=0;				
				int colourTotal=0;
				int colourSingle=0;
				
				/* pick position and new colour at random, making sure it isn't already
				   that colour */
				do{
					circleNo = pickRand4();
				    colourNo = pickRand4();
					if(circlesDisplayed[circleNo][colourNo] == 1){
				    }
					else{
						colourChange = 1;
					}
				}while(colourChange == 0);
					
				/* remove what ever circle is being replaced */
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
				
				/*add the newly chosen colour of circle*/
				box.getChildren().add(circles[circleNo][colourNo]);
				circlesDisplayed[circleNo][colourNo] = 1;
				
				/* check if all four circles same colour or all different */
				for(j=0;j<4;j++){
					for(i=0;i<4;i++){
						colourTotal += circlesDisplayed[i][j];					
					}
					if(colourTotal == 4){
						win = 1;
					}
					else if(colourTotal == 1){
						colourSingle++;
					}
					System.out.println(colourTotal); 
					colourTotal = 0;
				}
				
				if(win == 1 || colourSingle == 4){
					System.out.println("Game has been won!!!");
			    }
            }
        });
		
		Button btnTest2 = new Button();
        btnTest2.setText("test2");
        btnTest2.setOnAction(new EventHandler<ActionEvent>() {
 
            @Override
            public void handle(ActionEvent event) {
                System.out.println("test clicked");
				//box.getChildren().remove(circles[1][1]);
				//box.getChildren().add(circles[1][2]);
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
		displayArea.setStyle("-fx-background-color: #b97e4b;");
		FlowPane pickingRow = new FlowPane();
		pickingRow.setStyle("-fx-background-color: #b97e4b;");
	//	pickingRow.setStyle("-fx-background-color: #cc55cc;");
		FlowPane buttonRow = new FlowPane();
		buttonRow.setStyle("-fx-background-color: #aaaa88;");
		
		gameBG.setTop(displayArea);
		gameBG.setCenter(pickingRow);
	    gameBG.setBottom(buttonRow);
		
		displayArea.getChildren().add(box);
		displayArea.setAlignment(Pos.CENTER);
		
		box.getChildren().add(holder);
		
		VBox radioBtns1 = new VBox();
	    radioBtns1.setStyle("-fx-padding: 10px;");
		
		final ToggleGroup spot1 = new ToggleGroup();
		
		RadioButton red1 = new RadioButton(" ");
		red1.setToggleGroup(spot1);
		red1.setStyle("-fx-background-color: #ff0000;");
		
		red1.setOnAction(new EventHandler<ActionEvent>() { @Override public void handle(ActionEvent e) {  
			removeAndReplace(box,circles,circlesDisplayed,0,0);
		} 
		});
		
		RadioButton blue1 = new RadioButton(" ");
		blue1.setToggleGroup(spot1);
		blue1.setStyle("-fx-background-color: #0000ff;");
		
		blue1.setOnAction(new EventHandler<ActionEvent>() { @Override public void handle(ActionEvent e) {  
			removeAndReplace(box,circles,circlesDisplayed,0,1);
		} 
		});
		
		RadioButton green1 = new RadioButton(" ");
		green1.setToggleGroup(spot1);
		green1.setStyle("-fx-background-color: #008000;");
		
		green1.setOnAction(new EventHandler<ActionEvent>() { @Override public void handle(ActionEvent e) {  
			removeAndReplace(box,circles,circlesDisplayed,0,2);
		} 
		});
		
		RadioButton yellow1 = new RadioButton(" ");
		yellow1.setToggleGroup(spot1);
		yellow1.setStyle("-fx-background-color: #ffff00;");
		
		yellow1.setOnAction(new EventHandler<ActionEvent>() { @Override public void handle(ActionEvent e) {  
			removeAndReplace(box,circles,circlesDisplayed,0,3);
		} 
		});
		
        radioBtns1.getChildren().add(red1);
		radioBtns1.getChildren().add(blue1);
        radioBtns1.getChildren().add(green1);
		radioBtns1.getChildren().add(yellow1);		
		
		VBox radioBtns2 = new VBox();
	    radioBtns2.setStyle("-fx-padding: 10px;");
		final ToggleGroup spot2 = new ToggleGroup();
		RadioButton red2 = new RadioButton(" ");
		red2.setToggleGroup(spot2);
		red2.setStyle("-fx-background-color: #ff0000;");
		
		red2.setOnAction(new EventHandler<ActionEvent>() { @Override public void handle(ActionEvent e) {  
			removeAndReplace(box,circles,circlesDisplayed,1,0);
		} 
		});
		
		RadioButton blue2 = new RadioButton(" ");
		blue2.setToggleGroup(spot2);
		blue2.setStyle("-fx-background-color: #0000ff;");
		
		blue2.setOnAction(new EventHandler<ActionEvent>() { @Override public void handle(ActionEvent e) {  
			removeAndReplace(box,circles,circlesDisplayed,1,1);
		} 
		});
		
		RadioButton green2 = new RadioButton(" ");
		green2.setToggleGroup(spot2);
		green2.setStyle("-fx-background-color: #008000;");
		
		green2.setOnAction(new EventHandler<ActionEvent>() { @Override public void handle(ActionEvent e) {  
			removeAndReplace(box,circles,circlesDisplayed,1,2);
		} 
		});
		
		RadioButton yellow2 = new RadioButton(" ");
		yellow2.setToggleGroup(spot2);
		yellow2.setStyle("-fx-background-color: #ffff00;");
		
		yellow2.setOnAction(new EventHandler<ActionEvent>() { @Override public void handle(ActionEvent e) {  
			removeAndReplace(box,circles,circlesDisplayed,1,3);
		} 
		});
		
        radioBtns2.getChildren().add(red2);
		radioBtns2.getChildren().add(blue2);
        radioBtns2.getChildren().add(green2);
		radioBtns2.getChildren().add(yellow2);	
		
		VBox radioBtns3 = new VBox();
	    radioBtns3.setStyle("-fx-padding: 10px;");
		final ToggleGroup spot3 = new ToggleGroup();
		RadioButton red3 = new RadioButton(" ");
		red3.setToggleGroup(spot3);
		red3.setStyle("-fx-background-color: #ff0000;");
		
		red3.setOnAction(new EventHandler<ActionEvent>() { @Override public void handle(ActionEvent e) {  
			removeAndReplace(box,circles,circlesDisplayed,2,0);
		} 
		});
		
		RadioButton blue3 = new RadioButton(" ");
		blue3.setToggleGroup(spot3);
		blue3.setStyle("-fx-background-color: #0000ff;");
		
		blue3.setOnAction(new EventHandler<ActionEvent>() { @Override public void handle(ActionEvent e) {  
			removeAndReplace(box,circles,circlesDisplayed,2,1);
		} 
		});
		
		RadioButton green3 = new RadioButton(" ");
		green3.setToggleGroup(spot3);
		green3.setStyle("-fx-background-color: #008000;");
		
		green3.setOnAction(new EventHandler<ActionEvent>() { @Override public void handle(ActionEvent e) {  
			removeAndReplace(box,circles,circlesDisplayed,2,2);
		} 
		});
		
		RadioButton yellow3 = new RadioButton(" ");
		yellow3.setToggleGroup(spot3);
		yellow3.setStyle("-fx-background-color: #ffff00;");
		
		yellow3.setOnAction(new EventHandler<ActionEvent>() { @Override public void handle(ActionEvent e) {  
			removeAndReplace(box,circles,circlesDisplayed,2,3);
		} 
		});
		
        radioBtns3.getChildren().add(red3);
		radioBtns3.getChildren().add(blue3);
        radioBtns3.getChildren().add(green3);
		radioBtns3.getChildren().add(yellow3);		
		
		VBox radioBtns4 = new VBox();
	    radioBtns4.setStyle("-fx-padding: 10px;");
		final ToggleGroup spot4 = new ToggleGroup();
		RadioButton red4 = new RadioButton(" ");
		red4.setToggleGroup(spot4);
		red4.setStyle("-fx-background-color: #ff0000;");
		
		red4.setOnAction(new EventHandler<ActionEvent>() { @Override public void handle(ActionEvent e) {  
			removeAndReplace(box,circles,circlesDisplayed,3,0);
		} 
		});
		
		RadioButton blue4 = new RadioButton(" ");
		blue4.setToggleGroup(spot4);
		blue4.setStyle("-fx-background-color: #0000ff;");
		
		blue4.setOnAction(new EventHandler<ActionEvent>() { @Override public void handle(ActionEvent e) {  
			removeAndReplace(box,circles,circlesDisplayed,3,1);
		} 
		});
		
		RadioButton green4 = new RadioButton(" ");
		green4.setToggleGroup(spot4);
		green4.setStyle("-fx-background-color: #008000;");
		
		green4.setOnAction(new EventHandler<ActionEvent>() { @Override public void handle(ActionEvent e) {  
			removeAndReplace(box,circles,circlesDisplayed,3,2);
		} 
		});
		
		RadioButton yellow4 = new RadioButton(" ");
		yellow4.setToggleGroup(spot4);
		yellow4.setStyle("-fx-background-color: #ffff00;");
		
		yellow4.setOnAction(new EventHandler<ActionEvent>() { @Override public void handle(ActionEvent e) {  
			removeAndReplace(box,circles,circlesDisplayed,3,3);
		} 
		});
		
        radioBtns4.getChildren().add(red4);
		radioBtns4.getChildren().add(blue4);
        radioBtns4.getChildren().add(green4);
		radioBtns4.getChildren().add(yellow4);	
		
		pickingRow.setAlignment(Pos.CENTER);
		pickingRow.getChildren().add(radioBtns1);
		pickingRow.getChildren().add(radioBtns2);
		pickingRow.getChildren().add(radioBtns3);
		pickingRow.getChildren().add(radioBtns4);
	
        buttonRow.getChildren().add(btnNew);		
		buttonRow.getChildren().add(btnChange);
		buttonRow.getChildren().add(btnTest2);
		buttonRow.getChildren().add(btnExit);
		buttonRow.setAlignment(Pos.CENTER);
			
        primaryStage.setScene(new Scene(gameBG, 300, 200));
        primaryStage.show();
    }
	private void removeAndReplace(Group box,Canvas[][] circles, int[][] circlesDisplayed, int x,int y){
		/* remove what ever circle is being replaced */
				if(circlesDisplayed[x][0] == 1){
					box.getChildren().remove(circles[x][0]);
					circlesDisplayed[x][0] = 0;
				}
				else if(circlesDisplayed[x][1] == 1){
					box.getChildren().remove(circles[x][1]);
					circlesDisplayed[x][1] = 0;
				}
			    else if(circlesDisplayed[x][2] == 1){
					box.getChildren().remove(circles[x][2]);
					circlesDisplayed[x][2] = 0;
				}
				else if(circlesDisplayed[x][3] == 1){
					box.getChildren().remove(circles[x][3]);
					circlesDisplayed[x][3] = 0;
				}	
				
		box.getChildren().add(circles[x][y]);
		circlesDisplayed[x][y] = 1;
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
