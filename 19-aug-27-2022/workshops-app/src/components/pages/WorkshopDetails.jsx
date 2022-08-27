import { useParams } from 'react-router-dom';

// EXERCISE: Fetch the data https://workshops-server.herokuapp.com/workshops/:id where :id is the id of the workshop
// Example: https://workshops-server.herokuapp.com/workshops/2
const WorkshopDetails = () => {
    const { id } = useParams(); // { id: 3 }

    return (
        <div>WorkshopDetails page (show details for {id})</div>
    );
};

export default WorkshopDetails;