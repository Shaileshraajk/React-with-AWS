import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import EmployeeService from "../pages/EmployeeService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddEmployee() {

    const history = useHistory();

    const [empl, setEmpl] = useState({});

      const handleform=(e) => {
        postData(empl)
        e.preventDefault();
      }

      const postData = (data) =>{
        EmployeeService.addEmployee(data)
        .then(response => {
            console.log(response.data)
            toast.success('Employee Added!', {
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
          <h2 className="text-center m-4">Register Employee</h2>

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
                required
                onChange={(e)=>{
                    setEmpl({...empl,department:e.target.value})
                }}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
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