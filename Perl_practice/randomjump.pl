#!/usr/bin/perl
use strict;
use warnings;

my $x = 0;
my $y = 0;

my @square;
 
$square[0][0] = 3;
$square[0][1] = 4;
$square[0][2] = 2;
$square[0][3] = 4;
$square[1][0] = 1;
$square[1][1] = 4;
$square[1][2] = 3;
$square[1][3] = 1;
$square[2][0] = 2;
$square[2][1] = 4;
$square[2][2] = 2;
$square[2][3] = 3;
$square[3][0] = 1;
$square[3][1] = 4;
$square[3][2] = 1;
$square[3][3] = 3;


for (my $i = 0; $i < 4; $i++){
      for (my $j = 0; $j < 4; $j++){
           print $square[$i][$j] , ' ';         
      }
      print "\n";
}

my @route = (1,2,3,3,1,2,3,2);


for (my $i = 0; $i < 8; $i++){
   print $route[$i] , ' ';
}
print "\n";

print "Current co-ordinates:", ' ' , $x , ' ' , $y , "\n";


