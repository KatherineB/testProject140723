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
print "Do you want instructions on how to play? (y or n): ";
$info = <STDIN>;

if ($info == "y" || $info == "Y"){
       showHowToPlay();
}


while ($k < $routeLength){
	for (my $i = 0; $i < 4; $i++){
	      for (my $j = 0; $j < 4; $j++){
		   print $square[$i][$j] , ' ';         
	      }
	      print "\n";
	}
	print "\n";

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
       print "step=", $step, "\n";

        $legalMove = validateMove($x,$y,$x_prev,$y_prev,$step);
        
        if ($legalMove == 1){
		$squareTotal = $square[$x][$y];
		$score = $score + $squareTotal;
		$square[$x][$y] = 0;

		$x_prev = $x;
		$y_prev = $y;

                $k++;
                
                if ($k < $routeLength){
		       print "Current Score=", $score, "\n\n";
                }
        }
        else{
                print "Please enter a legal move.\n\n";
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
              print "1 legal options found\n";
       }
       elsif ( ($x - 3) > -1 && ($x - 3) < 4 ){
             $option = 1;
             print "2 legal options found\n";
       }
       elsif ( ($y + 3) > -1 && ($y + 3) < 4 ){
             $option = 1;
             print "3 legal options found\n";
       }
       elsif ( ($y - 3) > -1 && ($y - 3) < 4 ){
             $option = 1;
             print "3 legal options found\n";
       }
       else{
             print "No legal options found\n";
       }
       return($option);
}

sub showHowToPlay {
       print "How to Play Random Jump\n";
       print "\n";   
       print "In Random Jump, the player is confronted with a 4 X 4 square of numbers\n"
       print "from 1 to 4 and a sequence of 8 numbers that contains numbers from 1 to 3.\"


       return;
}

