#!/usr/bin/perl
use strict;
use warnings;

my $x = 0;
my $y = 0;
my $x_prev = 0;
my $y_prev = 0;
my $squareTotal = 0;
my $score = 0;
my $step = 0;
my $withinLimits = 0;

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




for (my $k = 0; $k<8; $k++){
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

        if ($x > -1 && $x < 4 && $y > -1 && $y < 4){
            $withinLimits = 1;
            print "Co-ordinates are within limits.";
        }
        else{
            print "Co-ordinates outside limits.";
        }

        $step = $route[$k];
       # print "step=", $step, "\n";

        

	$squareTotal = $square[$x][$y];
	$score = $score + $squareTotal;
	$square[$x][$y] = 0;

        $x_prev = $x;
        $y_prev = $y;

        print "Score=", $score, "\n\n";
}
print "Game over, your final score is ", $score, "\n";

