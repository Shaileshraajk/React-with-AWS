import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import EmployeeService from "../pages/EmployeeService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EditEmployee(){

    const history = useHistory();

    const { id } = useParams();

    const [empl, setEmpl] = useState({});

    useEffect(() => {
        loadEmpDetails();
      }, []);

    function loadEmpDetails(){

        EmployeeService.getById(id)
        .then(response=>{
            console.log(response.data)
            setEmpl(response.data)

        })
    }

    const handleform=(e) => {
        UpdateData(empl,id)
        e.preventDefault();
      }

    const UpdateData = (data,empid) => {
        EmployeeService.editEmployee(data,empid)
        .then(response => {
            console.log(response.data)
            toast.success('Employee Details Updated!', {
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
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Employee Detils</h2>

          <form onSubmit={handleform}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                <b>Name</b>
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Employee Name"
                name="name"
                value={empl.ename}
                required
                onChange={(e)=>{
                    setEmpl({...empl,ename:e.target.value})
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
              <b>Location</b>
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Location"
                name="location"
                value={empl.location}
                required
                onChange={(e)=>{
                    setEmpl({...empl,location:e.target.value})
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
              <b>Department</b>
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Department"
                name="dept"
                value={empl.department}
                required
                onChange={(e)=>{
                    setEmpl({...empl,department:e.target.value})
                }}
              />
            </div>
            <button type="submit" className="btn btn-outline-success">
              Update
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/rglist">
              Cancel
            </Link>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
    )

    
}