import Queue from './02-Queue.js';
import Job from './02-Job.js';

const jobsQueue = new Queue();

jobsQueue.enqueue( new Job( 'John Doe', 'Credit card outstanding', '12:08' ) );
jobsQueue.enqueue( new Job( 'Jane Doe', 'Home loan', '12:15' ) );
jobsQueue.enqueue( new Job( 'Mark Smith', 'Loan prepayment', '12:16' ) );

jobsQueue.print();

const nextJob = jobsQueue.dequeue();

console.log( nextJob );

jobsQueue.print();