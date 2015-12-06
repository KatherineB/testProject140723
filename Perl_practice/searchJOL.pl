#!/usr/bin/perl
use strict;
use warnings;

my $file_in = $ARGV[0];
my $jsonKey1 = "product_name";

print $file_in . "\n";

open my $file, '<', $file_in;

while(my $line = <$file>){
    my $currentLine = $line;
    print $currentLine . "\n";
    my $location = index($currentLine,$jsonKey1);
    print $location . "\n";
    print length($jsonKey1). "\n";
    my $offset = length($jsonKey1) + $location + 3;
    my $limit = index($currentLine,"\"", $offset);
    print $limit . "\n";
    last if $. == 1;
}



close($file);
