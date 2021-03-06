import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div>
        <div className="w-100 bg-danger">
          <Link
            to="/hostelApplicants"
            className="ms-5 me-5 text-decoration-none text-white"
          >
            Apply
          </Link>
          <Link
            to="/viewApplicants"
            className="ms-5 me-5 text-decoration-none text-white"
          >
            View-Applicants
          </Link>
          <Link
            to="/DeleteRecord"
            className="ms-5 me-5 text-decoration-none text-white"
          >
            DeleteRecord
          </Link>
          <Link
            to="/UpdateRecord"
            className="ms-5 me-5 text-decoration-none text-white"
          >
            UpdateRecord
          </Link>
        </div>
      </div>
    );
}

export default Navbar;