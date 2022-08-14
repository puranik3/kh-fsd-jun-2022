// const PackageListItem = ( props ) => {
const PackageListItem = ( { name, description, tags, author, version, lastPublished } ) => {
    // const name = props.name, description = props.description;
    // const { name, description, tag, author, version, lastPublished } = props;

    const header = <h3>{name}</h3>;

    return (
        <div>
            {header}
            <div>
                {description}
            </div>
            <div>
                <span>{tags.join( ', ' )}</span>
            </div>
            <div>
                <strong>{author}</strong> published {version} • {lastPublished} month(s) ago
            </div>
        </div>
    );
};

export default PackageListItem;