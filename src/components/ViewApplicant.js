import { getApplicant } from "../Service/api";
import { useState, useEffect } from 'react';

const ViewApplicant = () => {

  const [ applicantData, setApplicantData ] = useState([]);

  useEffect(() => {
    getApplicatsDetails();
  },[]);

  const getApplicatsDetails = async () => {
    const result = await getApplicant();
    setApplicantData(result.data);
  }

  return (
    <div className="col-md-6 position-absolute start-50 translate-middle-x mt-5">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Registration Number</th>
            <th scope="col">Preferences</th>
            <th scope="col">gender</th>
          </tr>
        </thead>
        <tbody>
          {applicantData.map((details) => (
            <tr>
              <td>{details.studentName}</td>
              <td>{details.registrationNumber}</td>
              <td>{details.gender}</td>
              <td>
                {details.hostelPreference.map((dat) => {
                  return <span>{dat}</span>;
                })}
              </td>

              <button type="button" class="btn btn-primary">
                delete
              </button>
              <button
                className="btn btn-primary form-control"
                type="button"
                value="Submit"
              >
                update
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewApplicant;
