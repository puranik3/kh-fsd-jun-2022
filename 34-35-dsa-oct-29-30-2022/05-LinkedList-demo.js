import LinkedList from "./05-LinkedList.js";
import Job from './02-Job.js';

const job1 = new Job( 'John Doe', 'Credit card outstanding', '12:08' );
const job2 = new Job( 'Jane Doe', 'Home loan', '12:15' );
const job3 = new Job( 'Mark Smith', 'Loan prepayment', '12:16' );

const jobs = new LinkedList();

jobs.push( job1 );
jobs.push( job2 );
jobs.push( job3 );

jobs.print();