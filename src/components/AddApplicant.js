import { useState } from "react";
import { addApplicant } from "../Service/api";

const AddApplicant = () => {

    const [applicantData, setApplicantData] = useState({
      studentName: "",
      registrationNumber: "",
      hostelPreference:"",
    });

    const { studentName, registrationNumber, hostelPreference } = applicantData;

    const handleChannge = (e) => {
        setApplicantData( {...applicantData, [e.target.name]: [e.target.value] } )
    }

    const addDetails = async (e) => {
      e.preventDefault();
      await addApplicant(applicantData);
    }
const handleCheckbox = (e) => {
  const isChecked = e.target.checked;

    setApplicantData({
      hostelPreference: [...applicantData.hostelPreference, e.target.value],
    });
   
};
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
          <label className="mb-2">Gender</label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
              checked
            ></input>
            <label class="form-check-label" for="exampleRadios1">
              Male
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="option2"
            ></input>
            <label class="form-check-label" for="exampleRadios2">
              Female
            </label>
          </div>
          <form>
            <label className="mb-2">Hostel Preferences </label>
            <div class="form-check">
              <input
                class="form-check-input mb-3"
                name="hostelPreference"
                onChange={(e) => handleCheckbox(e)}
                type="checkbox"
                value={"Johar Hall"}
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Johar Hall
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                name="hostelPreference"
                onChange={(e) => handleCheckbox(e)}
                type="checkbox"
                value={"MA Jinnah Hall"}
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                MA Jinnah Hall
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                name="hostelPreference"
                onChange={(e) => handleCheckbox(e)}
                type="checkbox"
                value={"Jupiter Hall"}
                id="flexCheckChecked"
              />
              <label class="form-check-label  mb-3" for="flexCheckChecked">
                Jupiter Hall
              </label>
            </div>
          </form>

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