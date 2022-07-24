/**
 * units = 220
 * 
 * sum = 0
 * units >= 50 -> sum = sum + 50 * 20
 * units = units - 50; // units = 170
 * 
 * units >= (100 - 50) -> sum = sum + (100 - 50) * 25
 * units = units - (100 - 50); // units = 120
 * 
 * units >= (200 - 100) -> sum = sum + (200 - 100) * 30
 * units = units - (200 - 100); // units = 20
 * 
 * sum = sum + (units - 200) * 30
 */