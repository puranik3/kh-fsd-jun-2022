Sales
Distributor     Month   Year    Sales   Country
A               Jan     2021    100     USA
B               Jan     2021    200     France
C               Jan     2021    300     USA
A               Feb     2021    200     USA
B               Feb     2021    100     France
C               Feb     2021    400     USA
A               Jan     2022    500     USA  
B               Jan     2022    200     France
C               Jan     2022    100     USA
A               Feb     2022    200     USA
B               Feb     2022    400     France
C               Feb     2022    700     USA

- Total sales (year-wise: [ 2021, x ], [ 2022, y ] )
- Total sales (by distributor: [ 'A', x ], [ 'B', y ], [ 'C', z ] )

- Aggregation queries: Help us to summarize the data




Let's say we had to generate these reports manually

Report 1: Total sales of distributors in USA (by distributor: [ 'A', x ], [ 'B', y ], [ 'C', z ] )

0. Filter and select documents where Distrutor is in USA
Distributor     Month   Year    Sales   Country
A               Jan     2021    100     USA
C               Jan     2021    300     USA
A               Feb     2021    200     USA
C               Feb     2021    400     USA
A               Jan     2022    500     USA  
C               Jan     2022    100     USA
A               Feb     2022    200     USA
C               Feb     2022    700     USA

1. Group the documents by the "selected criteria" (we would like to group by the field "Distributor")

Distributor     Month   Year    Sales
A               Jan     2021    100     
A               Feb     2021    200
A               Jan     2022    500
A               Feb     2022    200

C               Jan     2021    300
C               Feb     2021    400
C               Jan     2022    100
C               Feb     2022    700

2. We would "aggregate" the value in certain fields. We end up generating a different collection of documents at the end of this step
Distributor (_id)       Total_Sales
A                       1000
C                       1500


Report 2: Total sales (by distributor and year combination)

1. Group the documents by the "selected criteria" (we would like to group by the field "Distributor" and "Year" combination)
Distributor     Month   Year    Sales
A               Jan     2021    100     
A               Feb     2021    200

A               Jan     2022    500
A               Feb     2022    200

B               Jan     2021    200     
B               Feb     2021    100

B               Jan     2022    200
B               Feb     2022    400

C               Jan     2021    300
C               Feb     2021    400

C               Jan     2022    100
C               Feb     2022    700

2. We would "aggregate" the value in certain fields. We end up generating a different collection of documents at the end of this step
Distributor     Year    Total_Sales     Average_monthly_sale    Max_monthly_sale
A               2021    300             150                     200
A               2022    700             350                     500

...