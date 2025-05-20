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
      <h1 style={{ textAlign: "center" }}>Below are some of the services we offer:</h1>

      <div className="services-flex">
        <div className="slider-wrapper">
          <ImageSlider images={leftImages} />
        </div>

        <div className="services-center">
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
              <li>Suspension Repairs</li>
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
              <li>Inquire About Other Repairs</li>
            </ul>
          </div>

          <p style={{ textAlign: "center", color: "#b59045" }}>Not Offering Tires or Alignments at This Time</p>
          <h2 style={{ textAlign: "center" }}>All Labor Times are Taken Straight from Manufacturer List Times:</h2>
          <p style={{ textAlign: "center", color: "#b59045" }}>* Parts not included *</p>
          <h3 style={{
            textAlign: "center",
            color: "#b59045",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9), 0 0 4px rgba(0, 0, 0, 0.6)"
          }}>
            $40.00 - Show-Up Fee
            <br />
            $125.00 - Diag Fee (per hour)
            <br />
            *1 hour minimum*
            <br /><br />
            $150.00 - EMERGENCY SERVICE
            <br />
            *24 hour service*
            <br />
          </h3>
        </div>

        <div className="slider-wrapper">
          <ImageSlider images={rightImages} />
        </div>
      </div>
    </>
  )
}
