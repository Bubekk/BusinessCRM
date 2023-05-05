import '../styles/TileStyle.scss';

function Tile(props) {
    return (
        <div className="tile">
            <h2 className='tile-header'>{props.title}</h2>
            <div className="tile-content">
                
            </div>
        </div>
    )
}

export default Tile;