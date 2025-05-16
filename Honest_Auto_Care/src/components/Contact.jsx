import { useState } from "react";

export default function VehicleRequestForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <div className="form-container">
        <form
          name="job-request"
          method="POST"
          data-netlify="true"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
            e.target.submit();
          }}
        >
          <input type="hidden" name="form-name" value="job-request" />

          <h2 style={{ textAlign: "center", color: "#d4af37", marginBottom: "1rem" }}>
            Request Service :
          </h2>

          <label>
            Name:
            <input type="text" name="name" required />
          </label>

          <label>
            Phone Number:
            <input type="tel" name="phone" required />
          </label>

          <label>
            VIN:
            <input type="text" name="vin" required />
          </label>

          <label>
            Year:
            <input type="text" name="year" required />
          </label>

          <label>
            Make:
            <input type="text" name="make" required />
          </label>

          <label>
            Model:
            <input type="text" name="model" required />
          </label>

          <label>
            Issues or Requested Services:
            <textarea
              name="issues"
              placeholder="Describe the issue or service you’re requesting..."
              required
            />
          </label>

          <button type="submit">Send Request</button>
        </form>

        {submitted && (
          <p className="thank-you">Thanks! Your request has been sent.</p>
        )}
      </div>
    </>
  );
}
