import wrenches from "../assets/wrenches.png"
import CEL from "../assets/Cel.png"

export default function Services() {

    return (
        <>
            <h1 style={{textAlign:"center"}}>Below are some of the services we offer:</h1>
            <div>
                <div className="TopPics">
                    <img src={wrenches} className="icon"></img>
                    <img src={CEL} className="icon"></img>
                </div> 
               
            </div>
        </>
    )
}