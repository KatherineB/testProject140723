#!/usr/bin/perl
use strict;
use warnings;

my $file_in = $ARGV[0];
my $file_list = $ARGV[1];
 #my @jsonKey = ("product_name","manufacturer","model","family");
 my @jsonKey = ("space_vehicle","manufacturer","model","manu_date");
my $numberOfKeys = 4;
my @jsonData;
my $divider = 3;
my $startJK;
my $startPadding;
my $startJD;
my $endJD;
my $lengthJD;
my $lineCounter = 0;
my $line2Counter = 0;
my $check;

open my $file, '<', $file_in;
open my $file2, '<', $file_list;

while(my $line = <$file>){
    my $currentLine = $line;
   # print $currentLine . "\n";
    $lineCounter++;
    for (my $i = 0; $i < $numberOfKeys; $i++){
	    $startJK = index($currentLine,$jsonKey[$i]);
	   # print $startJK . "\n";
	   # print length($jsonKey[$i]). "\n";

	    $startPadding = $startJK;
	    $startJD = length($jsonKey[$i]) + $startPadding + $divider;
	   # print $startJD . "\n";

	    $endJD = index($currentLine,"\"", $startJD);
	   # print $endJD . "\n";

	    $lengthJD = $endJD - $startJD;

	    $jsonData[$i] = substr($currentLine,$startJD,$lengthJD);
	   # print $jsonData[$i] . "\n";
    }
    print "Item Line:" . "\n";
    print $currentLine . "\n";
   
    while(my $line2 = <$file2>){
         my $currentLine2 = $line2;
         $line2Counter++;
         #print $currentLine2 . "\n";
         my $matches = 0;
         for (my $j = 0; $j < $numberOfKeys; $j++){
               if (index($currentLine2,$jsonData[$j]) != -1){
                   $matches++;
               }
               if ($matches == 4){
                  print "Found " .  $jsonData[$j] . " in line " . $line2Counter . " with matches: " . $matches . "\n";
                  print $currentLine2 . "\n";
               }
         }
        
         #last if $line2Counter > 500;
          #last if ($matches == 4 || $line2Counter > 10000);
          last if $matches == 4;
    }
   

    last if $lineCounter > 0;
}


close($file2);
close($file);
