import "./Loader.css"

export default function Loader(props) {
    return (
        <div>
            <div className="absolute">
                <div className="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>  
        </div>
        
    )
}