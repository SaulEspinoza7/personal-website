import "./styles/Popup.css"

const Popup = (props) => {
    return (props.showPop) ? (
        <div className="outPop">
            <div className="popUp">
                <h1>Do you want to download the CV?</h1>

                <h2>A PDF file will be downloaded</h2>

                <div className="popUp-buttons-separate">
                    <button className="popUp-cancel" onClick={() => props.setTrigger(false)}>
                        <p>Cancel</p>
                    </button>

                    <a href="resume.pdf" download>
                        <button className="popUp-yes">
                            <p>Yes</p>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    ) : <div></div>
}

export default Popup;