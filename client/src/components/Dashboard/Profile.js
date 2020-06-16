import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const Profile = ({ profile: { experience, education } }) => {
  return (
    <Fragment>
      <h2 className="my-2">Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {experience.length === 0 ? (
            <tr>
              <td></td>
              <td>
                <Link to="/addExperience">Add experience</Link>
              </td>
            </tr>
          ) : (
            experience.map((exp) => (
              <tr key={exp._id}>
                <td>{exp.company}</td>
                <td className="hide-sm">{exp.title}</td>
                <td className="hide-sm">
                  <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{" "}
                  {exp.to === null ? (
                    <p>TBD</p>
                  ) : (
                    <Moment format="YYYY/MM/DD">{exp.to}</Moment>
                  )}
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <h2 className="my-2">Education Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {education.length === 0 ? (
            <tr>
              <td></td>
              <td>
                <Link to="/addEducation">Add education</Link>
              </td>
            </tr>
          ) : (
            education.map((exp) => (
              <tr key={exp._id}>
                <td>{exp.school}</td>
                <td className="hide-sm">{exp.degree}</td>
                {/* <td className="hide-sm">{exp.fieldOfStudy}</td> */}
                <td className="hide-sm">
                  <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{" "}
                  {exp.to === null ? (
                    <p>TBD</p>
                  ) : (
                    <Moment format="YYYY/MM/DD">{exp.to}</Moment>
                  )}
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="my-2">
        <button className="btn btn-danger">
          <i className="fas fa-user-minus"> </i>
          Delete My Account
        </button>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.profile.userProfile,
  };
};

export default connect(mapStateToProps)(Profile);
