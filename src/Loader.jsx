import "./loader.css";

export default function Loader() {
    return (
        <div className="container_loader">
            <div className="cloud_loader front_loader">
                <span className="left-front_loader"></span>
                <span className="right-front_loader"></span>
            </div>
            <span className="sun_loader sunshine_loader"></span>
            <span className="sun_loader"></span>
            <div className="cloud_loader back_loader">
                <span className="left-back_loader"></span>
                <span className="right-back_loader"></span>
            </div>
        </div>
    );
}
