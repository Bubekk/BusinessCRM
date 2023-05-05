import '../styles/MainPageStyle.scss';
import Tile from '../components/Tile';

function MainPage() {
    return (
        <div className="mainpage">
            <div className="notifications">
                <h2>NOTIFICATIONS</h2>
                <div className="notifications-circle">
                    <p className="notifications-circle-count">3</p>
                </div>
            </div>
            <Tile title="THINGS TO DO" />
            <Tile title="EMPLOYEES PROGRESS" />
        </div>
    )
}
export default MainPage;