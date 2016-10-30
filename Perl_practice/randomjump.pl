#!/usr/bin/perl
use strict;
use warnings;

my $x = 0;
my $y = 0;
my $x_prev;
my $y_prev;
my $k = 0;
my $squareTotal;
my $score;
my $step;
my $nextStep;
my $withinLimits;
my $properDiff;
my $legalMove;
my $canMove;
my $info = "";

my @square;
 
for (my $i = 0; $i < 4; $i++){
      for (my $j = 0; $j < 4; $j++){
           $square[$i][$j] = 1 + int rand(4);         
      }
}

my @route;
my $routeLength = 8;

for (my $i = 0; $i < 8; $i++){
   $route[$i] = 1 + int rand(3);
}

print "\n";
print "Welcome to Random Jump\n";
#print "Do you want instructions on how to play? (y or n): ";
print "Do you want instructions on how to play? (Enter 1 for Yes, 0 for No.): ";
$info = <STDIN>;

#if ($info == "y" || $info == "Y"){               
if ($info == 1){    # Temporary fix until problem is solved
       showHowToPlay();     
}
print "\n";

while ($k < $routeLength){
	for (my $i = 0; $i < 4; $i++){
	      for (my $j = 0; $j < 4; $j++){
		   print $square[$i][$j] , ' ';         
	      }
	      print "\n";
	}
	print "\n";

        print "Jump Sequence:\n";

	for (my $i = 0; $i < $routeLength; $i++){
	   print $route[$i] , ' ';
	}

        print "\n";
   
        # This is to print a caret pointing at the number in the sequence that is the number
        # of places the player must move next.

        for (my $position = 0; $position < $routeLength; $position++){
             if ($position == $k){
	        print '^ ';
             }
             else{
                 print '  ';
             }
	}
	print "\n";

	print "Current co-ordinates:", ' ' , $x , ' ' , $y , "\n";	

	print "Enter X: ";
	$x = <STDIN>;
	chomp $x;
	print "Enter Y: ";
	$y = <STDIN>;
        
        print "\n";

        $step = $route[$k];
        if ($k < $routeLength - 1){
          $nextStep = $route[$k+1];
        }
   #    print "step=", $step, "\n";

        $legalMove = validateMove($x,$y,$x_prev,$y_prev,$step);
        
        if ($legalMove == 1){
		$squareTotal = $square[$x][$y];
		$score = $score + $squareTotal;
		$square[$x][$y] = 0;

		$x_prev = $x;
		$y_prev = $y;

                $k++;
                
                if ($k < $routeLength){
		       print "Current Score = ", $score, "\n\n";
                }
        }
        else{
                print "Please try again.\n\n";
        }

        # It is only possible for there to be no legal moves available when the player must
        # move 3.  There are always ways to move 1 or 2.
        if ($nextStep == 3){
                print "In 3 check\n";
                $canMove = checkForLegalMoves($x,$y);
                if ($canMove == 0){
                       $k = $routeLength;
                       print "Sorry, there are no legal moves possible now.\n\n";
                }
                
        }
}
print "Game over, your final score is ", $score, "\n";

sub validateMove {
       $x = $_[0];
       $y = $_[1];
       $x_prev = $_[2];
       $y_prev = $_[3];
       $step = $_[4];
       my $x_diff = 0;
       my $y_diff = 0;
   
       if ($x > -1 && $x < 4 && $y > -1 && $y < 4){
            $withinLimits = 1;
            #print "Co-ordinates are within limits.\n";
        }
        else{
            print "Sorry, you have entered co-ordinates that are outside the play area.\n";
            $withinLimits = 0;
        }

        $x_diff = abs($x - $x_prev);
        $y_diff = abs($y - $y_prev);

       # print "Diffs are ", $x_diff, " and ", $y_diff, "\n";

        if ( ($x_diff == 0 && $y_diff == $step) || ($x_diff == $step && $y_diff == 0) ){
             $properDiff = 1;
        }
        elsif ($x_diff == $step && $y_diff == $step){
             print "Sorry, diagonal moves are not allowed in this game.\n";
             $properDiff = 0;
             $x = $x_prev;
             $y = $y_prev;
        }
        else{
             print "Sorry, that is not a legal move.\n";
             $properDiff = 0;
             $x = $x_prev;
             $y = $y_prev;
        }

       if ($withinLimits == 1 && $properDiff == 1){
            $legalMove = 1;
       }
       else{
            $legalMove = 0;
       }

       return($legalMove);
}

sub checkForLegalMoves {

       print "in new function\n";
       $x = $_[0];
       $y = $_[1];

      print "x=", $x, "\n";
      print "y=", $y, "\n";

       my $option = 0;

       if ( ($x + 3) > -1 && ($x + 3) < 4 ){
             $option = 1;
       }
       elsif ( ($x - 3) > -1 && ($x - 3) < 4 ){
             $option = 1;
       }
       elsif ( ($y + 3) > -1 && ($y + 3) < 4 ){
             $option = 1;
       }
       elsif ( ($y - 3) > -1 && ($y - 3) < 4 ){
             $option = 1;
       }
       else{
             $option = 0;
       }
       return($option);
}

sub showHowToPlay {
       my $blank;
       print "\n"; 
       print "How to Play Random Jump\n";
       print "\n";   
       print "In Random Jump, the player is confronted with a 4 X 4 square of numbers from\n";
       print "1 to 4 and a jump sequence of 8 numbers that contains numbers from 1 to 3.\n";
       print "\n";
       print "At the start of the game, the player is considered to be in the upper left\n";
       print "corner, co-ordinates 0,0.  The player must jump around the square in different\n";
       print "directions, always moving the number of spaces dictated by the sequence of 8\n";
       print "numbers.  For example, starting at 0,0, if the first number in the sequence is\n";
       print "3, one legal move would be 0,3, a move of 3 to the right.  A move of only 2 to\n";
       print "the right would not be allowed in this example.  The player makes 8 moves\n";
       print "according to the 8 numbers in the jump sequence and then the game ends.\n";
       print "Diagonal moves are not allowed.\n";
       print "\n";
       print "There is no particular destination that the player must get to.  Instead, the\n";
       print "goal is to accumulate points by landing on numbers.  What ever number the player\n";
       print "lands on, the player gets to score that number of points.  However, the points\n";
       print "are only there for the first landing.  After that, the spot is only zero.  It is\n";
       print "legal to land on a zero but it earns no points.\n";
       print "\n";
       print "Players should try to plan their routes so that they land on the highest\n";
       print "numbers.  There is also another reason for careful route planning.  It\n";
       print "is possible to get stuck in a position where no legal moves are possible.  If \n";
       print "this happens, the game ends early and the player gets stuck with a lower score.\n";
       print "It is only possible to get stuck when a move of 3 must be made.  For 1 or 2,\n";
       print "there is always enough space to move somewhere without going outside the square.\n";
       print "Thus, players must watch for threes in the jump sequence and plan a route that\n";
       print "avoids this hazard.\n";
       print "\n\n";
       print "Hit enter when ready to continue with game.";
       $blank = <STDIN>;
       return;
}

