import './PackageListItem.css';

// const PackageListItem = ( props ) => {
const PackageListItem = ( { name, description, tags, author, version, lastPublished } ) => {
    // const name = props.name, description = props.description;
    // const { name, description, tag, author, version, lastPublished } = props;

    // We can have number, string, React element, or an array having any of these as items within {} for setting text content of elements
    const header = <h3>{name}</h3>;
    console.log( header );

    return (
        <div>
            {header}
            <div>
                {description}
            </div>
            <div>
                {/* Approach 1 */}
                {/* <span>{tags}</span> */}
                
                {/* Approach 2 */}
                {/* <span>{tags.join( ', ' )}</span> */}
                
                {/* Approach 3 */}
                {/*
                    [ <span>{tags[0]}</span>, <span>{tags[1]}</span>, <span>{tags[2]}</span>, ... ]
                */}
                {
                    tags.map(
                        tag => <span className="tag">{tag}</span>
                    )
                }
            </div>
            <div>
                <strong>{author}</strong> published {version} • {lastPublished} month(s) ago
            </div>
        </div>
    );
};

export default PackageListItem;