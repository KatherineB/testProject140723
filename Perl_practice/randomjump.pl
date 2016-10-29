#!/usr/bin/perl
use strict;
use warnings;

my $x = 0;
my $y = 0;
my $x_prev = 0;
my $y_prev = 0;
my $k = 0;
my $squareTotal = 0;
my $score = 0;
my $step = 0;
my $nextStep = 0;
my $withinLimits = 0;
my $properDiff = 0;
my $legalMove = 0;
my $canMove = 0;

my @square;
 
for (my $i = 0; $i < 4; $i++){
      for (my $j = 0; $j < 4; $j++){
           $square[$i][$j] = 1 + int rand(4);         
      }
}

my @route;

for (my $i = 0; $i < 8; $i++){
   $route[$i] = 1 + int rand(3);
}




while ($k < 8){
	for (my $i = 0; $i < 4; $i++){
	      for (my $j = 0; $j < 4; $j++){
		   print $square[$i][$j] , ' ';         
	      }
	      print "\n";
	}
	print "\n";

	for (my $i = 0; $i < 8; $i++){
	   print $route[$i] , ' ';
	}

        print "\n";

        for (my $p = 0; $p < 8; $p++){
             if ($p == $k){
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
        if ($k < 7){
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
                
                if ($k < 7){
		       print "Score=", $score, "\n\n";
                }
        }
        else{
                print "Please enter a legal move.\n\n";
        }

        if ($nextStep == 3){
                print "In 3 check\n";
                $canMove = checkForLegalMoves($x,$y);
                if ($canMove == 0){
                       $k = 8;
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

        print "Diffs are ", $x_diff, " and ", $y_diff, "\n";

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

