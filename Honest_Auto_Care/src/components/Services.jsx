import ImageSlider from "./ImageSlider"
import img1 from "../assets/Honest1.jpg"
import img2 from "../assets/Honest2.jpg"
import img3 from "../assets/Honest3.jpg"
import img4 from "../assets/Honest4.jpg"
import img5 from "../assets/Honest5.jpg"
import img6 from "../assets/Honest6.avif"

export default function Services() {

    const leftImages = [img1, img2, img3]
    const rightImages = [img4, img5, img6]

    return (
        <>
            <h1 style={{textAlign:"center"}}>Below are some of the services we offer: </h1>
            <div className="listHolder fade-in">
            <ul>
                <li>Oil Change</li>
                <li>Trans Service</li>
                <li>Diff Service</li>
                <li>Fuel System Service</li>
                <li>Tune Up</li>
                <li>Timing Chain/Belt</li>
            </ul>
            <ul>
                <li>Brakes (cars/truck)</li>
                <li>Suspension Repairs </li>
                <li>Water Pumps</li>
                <li>Alternator</li>
                <li>Starter</li>
                <li>Wheel Bearing</li>
            </ul>
            <ul>
                <li>Mechanical Diag</li>
                <li>Electrical Diag</li>
                <li>Batteries</li>
                <li>General Maintenance</li>
                <li>Struts</li>
                <li>Inqure About Other Repairs</li>
            </ul>
            </div>
            <div className="ServicesPhotos">
            <ImageSlider images={leftImages} />
            <ImageSlider images={rightImages} />
            </div>
            <p style={{textAlign:"center", color:"#b59045"}}>Not Offering Tires / Alignments at This Time</p>
            <h2 style={{textAlign:"center"}}>All Labor Times are Taken Straight from Manufacture Listed Times:</h2>
            <h3 style={{textAlign:"center", 
                color:"#b59045", 
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9), 0 0 4px rgba(0, 0, 0, 0.6)"}}>
                $75.00 - Initial Diag/Show up fee 
                <br />
                <br />
                $125.00 - Per Hour
                <br />
                <br />
                $125.00 Pre-Purchase inspection
                <br />
                <br />
                $175.00 - EMERGENCY SERVICE 
                <br />
                <br />
            </h3>

        </>
    )
}