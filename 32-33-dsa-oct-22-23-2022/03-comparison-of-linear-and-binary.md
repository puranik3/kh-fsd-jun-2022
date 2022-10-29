## Comparison of different algorithms for a problem
n   Linear ( 3n )   Binary ( 8 * ( log n + 1) )
4   12              24
8   24              32
16  48              40

The difference in constant factor ( 3 vs 8 does not matter as n increases. Binary search will be faster for large n)
What matters is n vs log n. The function n grows much faster than log n

n   log n
4   2
8   3
16  4
32  5

// We compare running times of algorithms using the Big-O notation
O( log n ) < O( n )

We say binary search is an O( log n ) algorithm
We say linear search is an O( n ) algorithm

When analusing running times of algorithms T( n ) usually does an exact analysis that includes constant factors. Whereas in the Big-O notation we do not generally include the constant factors (the constant factors do not matter anyway for large n).