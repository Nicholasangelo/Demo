import React from "react";
import "./style.css";

function AdminManage() {
  return (
    <div>

      <div className="row text-center">
        <div className="col-11">
          <h1>Event Manager</h1>
        </div>
      </div>
      <div className="row text-center my-4">
        <div className="col-12">
          <a className="btn btn-large" href="/manage-event/add-project">Add Project</a>
        </div>
      </div>
      <div className="row text-center my-4">
        <div className="col-12">
          <a className="btn btn-large" href="/manage-event/view-data">View Data</a>
        </div>


      </div>
      <div className="adminManLogoDiv">
        <a href="/"><img className="adminManLogo" src="./images/demoDayBeer.png" alt="Demo Day Logo"></img></a>

        <div>
          <a href="/"><button className="btn btn-lg">Sign Out</button></a>
        </div>
      </div>

    </div>
  );
}

export default AdminManage;