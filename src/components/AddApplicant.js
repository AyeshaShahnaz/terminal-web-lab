import { useState } from "react";
import { addApplicant } from "../Service/api";

const AddApplicant = () => {

    const [ applicantData, setApplicantData] = useState({
        studentName: "",
        registrationNumber: ""
    })

    const { studentName, registrationNumber } = applicantData;

    const handleChannge = (e) => {
        setApplicantData( {...applicantData, [e.target.name]: [e.target.value] } )
    }

    const addDetails = async (e) => {
      e.preventDefault();
      await addApplicant(applicantData);
    }

    return (
      <div className="col-md-6 position-absolute start-50 translate-middle-x mt-5">
        <form>
          <label className="mb-2">Student Name</label>
          <input
            type="text"
            className="form-control mb-3"
            name="studentName"
            onChange={(e) => handleChannge(e)}
          />

          <label className="mb-2">Registration Number</label>
          <input
            type="text"
            className="form-control mb-3"
            name="registrationNumber"
            onChange={(e) => handleChannge(e)}
          />
         

          {/* <div className="mt-3">
            <label class="form-label me-3">Preferred Date</label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                name="pDate"
                type="checkbox"
                id="1"
                value="22-11-2021"
                checked={this.state.data.pDate === "22-11-2021"}
                onChange={this.handleChange}
              />
              <label class="form-check-label" for="inlineCheckbox1">
                22-11-2021
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                name="pDate"
                type="checkbox"
                id="2"
                value="25-11-2021"
                checked={this.state.data.pDate === "25-11-2021"}
                onChange={this.handleChange}
              />
              <label class="form-check-label" for="inlineCheckbox2">
                25-11-2021
              </label>
            </div>
          </div>
          {this.state.errors.pDate && (
            <div className="alert alert-danger">{this.state.errors.pDate}</div>
          )} */}

          <button
            className="btn btn-primary form-control"
            onClick={(e) => addDetails(e)}
          >
            Apply
          </button>
        </form>
      </div>
    );
}

export default AddApplicant;