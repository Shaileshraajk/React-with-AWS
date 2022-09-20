import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import EmployeeService from "./EmployeeService";
import Navbar from "../layout/Navbar";

export default function Home(){

    const [employees, setEmployees] = useState([]);

    const [searchval, setSearchval] = useState("");

    useEffect(() => {
        loadEmpData();
      }, []);

      function onChangeSearchEmp(e){
        const searchval = e.target.value
        setSearchval(searchval)
      }

      function searchEmp(){
        EmployeeService.searchEmpl(searchval)
        .then(response => {
            console.log(response.data)
            setEmployees(response.data)
        })
      }

      function loadEmpData(){
        EmployeeService.getAll()
        .then(response => {
            console.log(response.data)
            //toast.dark("Employees Loaded")
            setEmployees(response.data)
        })
      }



    return(
        <div className="container">
                <Navbar />
            <div className="py-4">
            <div className="input-group mb-3">
                  <input
                      type="text"
                      className="form-control"
                      placeholder="Search by Employee Name"
                      value={searchval}
                      onChange={onChangeSearchEmp}
                  />
                  <div className="input-group-append">
                      <button
                          className="btn btn-primary"
                          type="button"
                          onClick={searchEmp}
                      >
                          Search
                      </button>
                  </div>
                </div>
            <table className="table border shadow">
            <thead>
            <tr>
              <th scope="col">Sl.no.</th>
              <th scope="col">Name</th>
              <th scope="col">Location</th>
              <th scope="col">Department</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
                <tr>
                <th scope="row" key={index}>{index+1}</th>
                <td>{employee.ename}</td>
                <td>{employee.location}</td>
                <td>{employee.department}</td>
                <td>
                <Link to={`/viewempl/${employee.empid}`} className='btn btn-primary mx-2'>
                    View
                </Link>
                <Link to={`/editempl/${employee.empid}`} className='btn btn-warning mx-2'>
                    Edit
                </Link>
                <Link to={`/deleteempl/${employee.empid}`} className='btn btn-danger mx-2'>
                    Delete
                </Link>
                </td>
            </tr>
            )

            )}
            
                
                
          </tbody>

            </table>
            </div>
            <Link className="btn btn-outline-primary" to={"/"}> Back to Home</Link>
        </div>
        
    )
}