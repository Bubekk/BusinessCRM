import '../styles/MenuButton.scss';

function MenuButton(props) {


    return (
        <button className="buttonContainer" onClick={props.onClick}>
            <p>{props.dest}</p>
        </button>
    )
}

export default MenuButton;