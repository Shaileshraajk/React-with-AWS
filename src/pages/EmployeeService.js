import http from './../Employee-http'

class EmployeeService {

    getAll(){
        return http.get("/getAll")
    }

    getById(id){
        return http.get(`/getById?id=${id}`)
    }

    searchEmpl(ename){
        return http.get(`/searchEmployee?ename=${ename}`)
    }

    addEmployee(data){
        return http.post("/add",data)
    }

    editEmployee(data, id){
        return http.put(`/edit/${id}`,data)
    }

    deleteEmployee(id){
        return http.delete(`/delete/${id}`)
    }
}

export default new  EmployeeService()