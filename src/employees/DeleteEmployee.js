import React, { useEffect,useState } from "react";
import EmployeeService from "../pages/EmployeeService";
import { Link, useParams, useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

export default function DeleteEmployee(){

    const history = useHistory();

    const [emp, setEmp] = useState({});

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

    function deleteEmpl(id){
        EmployeeService.deleteEmployee(id)
        .then(response => {
            console.log(response.data)
            toast.success('Employee Deleted!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
                });
            setTimeout(() => history.push('/rglist'), 2500)
        })
    }

    return(
        <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow text-center">
          <h3 className="text-center m-4">Employee Details</h3>
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
            <br></br>
            <h4>Delete this employee?</h4>
            <button type="submit" className="btn btn-outline-danger" onClick={()=>deleteEmpl(emp.empid)}>
              Delete
            </button>
            <Link className="btn btn-outline-success mx-2" to="/rglist">
              Cancel
            </Link>
          </div>
          </div>
          <ToastContainer />
          </div>
    )
}