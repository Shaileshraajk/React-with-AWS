import axios from "axios";

export default axios.create({
    baseURL: "http://employeespringbootbackend-env.eba-iuckfxfk.us-east-1.elasticbeanstalk.com/employees",
    headers: {
      "Content-type": "application/json"
    }
  });