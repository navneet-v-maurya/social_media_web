//module imports
import axios from "axios";

//component imports
import default_catch from "../utils/error";

const instance = axios.create({
  baseURL: "http://localhost:3000/auth",
});

class Auth {
  static login(payload) {
    return new Promise((resolve) => {
      instance
        .post("/sign_in", payload)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          default_catch(err, resolve);
        });
    });
  }

  static register(payload) {
    return new Promise((resolve) => {
      instance
        .post("/register", payload)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          default_catch(err, resolve);
        });
    });
  }
}

export default Auth;
