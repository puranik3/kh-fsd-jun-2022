const AddWorkshop = () => {
    return (
        <div className="my-3">
            <h1>Add a workshop</h1>
            <hr />
            <form>
                <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                    <label for="imageUrl" className="form-label">Image URL</label>
                    <input type="url" className="form-control" id="imageUrl" placeholder="https://www.example.com/logo" />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Add a workshop</button>
                </div>
            </form>
        </div>
    );
};

export default AddWorkshop;