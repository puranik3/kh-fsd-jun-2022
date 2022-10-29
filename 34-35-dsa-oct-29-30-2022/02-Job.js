class Job {
    // a piece of data that is created at the level of the class (and not one per object)
    static jobId = 1;

    constructor( name, query, time ) {
        this.id = Job.jobId;
        this.name = name;
        this.query = query;
        this.time = time;

        // next job's id
        Job.jobId++;
    }
}

export default Job;