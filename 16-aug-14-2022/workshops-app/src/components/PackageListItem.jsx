const PackageListItem = ( props ) => {
    console.log( props );

    return (
        <div>
            <h3>{props.name}</h3>
            <div>
                {props.description}
            </div>
            <div>
                <span>{props.tag}</span>
            </div>
            <div>
                <strong>{props.author}</strong> published {props.version} • {props.lastPublished}
            </div>
        </div>
    );
};

export default PackageListItem;