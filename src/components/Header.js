import '../App.css';

const Header = ({onRegister, onLogin, onPlay, onLiveDraw, onRules, onAbout}) => {
    return (

        <div className="header">
            <p onClick={onRegister}>Register</p>
            <p onClick={onLogin}>Log-in</p>
            <p onClick={onPlay} className="playBtn">PLAY</p>
            <p onClick={onRules}>Rules</p>
            <p onClick={onAbout}>About</p>
            <p onClick={onLiveDraw} className="playBtn" >Live Draw</p>
        </div>
    )
}

export default Header
