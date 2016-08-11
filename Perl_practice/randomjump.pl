use strict;
use warnings;

my $x = 0;
my $y = 0;
my @row1 = (3,4,2,1);
my @row2 = (4,4,2,3);
my @row3 = (3,1,2,1);
my @row4 = (2,2,3,1);



my @route = (1,2,3,3,1,2,3,2);

for (my $i = 0; $i < 4; $i++){
   print $row1[$i . ' '];
}
print "\n";
for (my $i = 0; $i < 4; $i++){
   print $row2[$i . ' '];
}
print "\n";
for (my $i = 0; $i < 4; $i++){
   print $row3[$i . ' '];
}
print "\n";
for (my $i = 0; $i < 4; $i++){
   print $row4[$i . ' '];
}
print "\n";

for (my $i = 0; $i < 8; $i++){
   print $route[$i . ' '];
}
print "\n";

print "Current co-ordinates:" . $x  . $y . "\n";


