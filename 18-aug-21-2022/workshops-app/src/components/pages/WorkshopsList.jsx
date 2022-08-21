const WorkshopsList = ( { sm, lg } ) => {
    return (
        <div>
            <h1 className="my-3">List of Workshops</h1>
            <hr />
            {
                <div>Fetching list of workshops. Please wait...</div>
            }
        </div>
    );
};

export default WorkshopsList;