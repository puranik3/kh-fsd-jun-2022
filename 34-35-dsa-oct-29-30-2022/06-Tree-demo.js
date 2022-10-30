import Tree from './06-Tree.js';
import Employee from './06-Employee.js';

const orgChart = new Tree();

try {
    const johnDoeNode = orgChart.insert( new Employee( 'John Doe', 'CEO', '' ) );

    const janeDoeNode = orgChart.insert( new Employee( 'Jane Doe', 'VP', 'Marketing' ), johnDoeNode );
    const marySmith = orgChart.insert( new Employee( 'Mary Smith', 'Manager - Digital Marketing', 'Marketing' ), janeDoeNode );

    const dickSmith = orgChart.insert( new Employee( 'Dick Smith', 'VP', 'Sales' ), johnDoeNode );
    const moeMoney = orgChart.insert( new Employee( 'Moe Money', 'Sales', 'Sales' ), dickSmith );
    const gregSamson = orgChart.insert( new Employee( 'Greg Samson', 'Sales', 'Sales' ), dickSmith );

    orgChart.preOrder();
} catch( error ) {
    console.log( error.message );
}