#!/usr/bin/perl
use strict;
use warnings;

my $x = 0;
my $y = 0;
my $squareTotal = 0;
my $score = 0;

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

print "Current co-ordinates:", ' ' , $x , ' ' , $y , "\n";

print "Enter X: ";
$x = <STDIN>;
chomp $x;
print "Enter Y: ";
$y = <STDIN>;

$squareTotal = $square[$x][$y];
$score = $score + $squareTotal;
$square[$x][$y] = 0;

print "Current co-ordinates:", ' ' , $x , ' ' , $y , "\n";

for (my $i = 0; $i < 4; $i++){
      for (my $j = 0; $j < 4; $j++){
           print $square[$i][$j] , ' ';         
      }
      print "\n";
}
print "\n";

print "Score=", $score, "\n";

