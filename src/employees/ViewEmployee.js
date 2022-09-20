import React, { useEffect,useState } from "react";
import EmployeeService from "../pages/EmployeeService";
import { Link, useParams } from "react-router-dom";

export default function ViewEmployee(){

    const [emp, setEmp] = useState({
        empid:0,
        ename: "",
        location: "",
        department: "",
      });

      const { id } = useParams();

      useEffect(() => {
        loadEmpDetails();
      }, []);

      function loadEmpDetails(){

        EmployeeService.getById(id)
        .then(response=>{
            console.log(response.data)
            setEmp(response.data)

        })
      }
 

      return(
        <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow ">
          <h2 className="text-center m-4">Employee Details</h2>
          <div className="card">
            <div className="card-header">
            <ul className="list-group list-group-flush ">
            <li className="list-group-item text-center">
                  <b>Employee ID: </b>
                  {emp.empid}
            </li>
            <li className="list-group-item text-center">
                  <b>Name: </b>
                  {emp.ename}
            </li>
            <li className="list-group-item text-center">
                  <b>Location: </b>
                  {emp.location}
            </li>
            <li className="list-group-item text-center">
                  <b>Department: </b>
                  {emp.department}
            </li>
            </ul>
            </div>
            </div>
            <Link className="btn btn-primary my-2" to={"/rglist"}>
            Back to List
          </Link>
          </div>
          </div>
          </div>

      )


}