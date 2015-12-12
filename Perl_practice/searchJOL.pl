#!/usr/bin/perl
use strict;
use warnings;

my $file_in = $ARGV[0];
my $jsonKey1 = "product_name";
my $jsonKey2 = "manufacturer";
my @jsonKey = ("product_name","manufacturer","model","family");
my @jsonData;
my $divider = 3;
my $startJK;
my $startPadding;
my $startJD;
my $endJD;
my $lengthJD;

print $file_in . "\n";

open my $file, '<', $file_in;

while(my $line = <$file>){
    my $currentLine = $line;
    print $currentLine . "\n";

    for (my $i = 0; $i < 4; $i++){
	    $startJK = index($currentLine,$jsonKey[$i]);
	    print $startJK . "\n";
	    print length($jsonKey[$i]). "\n";

	    $startPadding = $startJK;
	    $startJD = length($jsonKey[$i]) + $startPadding + $divider;
	    print $startJD . "\n";

	    $endJD = index($currentLine,"\"", $startJD);
	    print $endJD . "\n";

	    $lengthJD = $endJD - $startJD;

	    $jsonData[$i] = substr($currentLine,$startJD,$lengthJD);
	    print $jsonData[$i] . "\n";
    }

    last if $. == 1;
}



close($file);
