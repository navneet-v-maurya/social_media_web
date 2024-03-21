import axios from "axios";
import default_catch from "../utils/Error";

const instance = axios.create({
  baseURL: "http://localhost:3000/auth",
  timeout: 1000,
});

class Auth {
  static login(payload) {
    return new Promise((resolve) => {
      instance
        .post("/login", payload)
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
