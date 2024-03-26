//module imports
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

//component imports
import Auth from "../../../apis/auth";
import { loading, success, error } from "../../../redux/authReducer";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initial_user_details = {
    email: "",
    password: "",
  };

  const [user_details, set_user_details] = useState(initial_user_details);

  const handle_input_change = (e) => {
    set_user_details({ ...user_details, [e.target.name]: e.target.value });
  };

  const handle_submit = (e) => {
    e.preventDefault();
    dispatch(loading());
    Auth.login(user_details)
      .then((res) => {
        if (res.status === 200) {
          dispatch(success(res?.data?.data));
        } else {
          dispatch(error());
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(error());
        toast.error("Something went Wrong!");
      });
  };

  const handle_reset = () => {
    set_user_details(initial_user_details);
  };

  return (
    <form className="auth-form" onSubmit={handle_submit}>
      <input
        className="input"
        type="email"
        placeholder="Email"
        name="email"
        value={user_details.email}
        onChange={handle_input_change}
      />

      <input
        className="input"
        type="password"
        placeholder="Password"
        name="password"
        value={user_details.password}
        onChange={handle_input_change}
      />
      <div className="buttons">
        <button className="button" type="submit">
          Login
        </button>
        <button className="button" type="button" onClick={handle_reset}>
          Reset
        </button>
      </div>
      <p style={{ textDecoration: "underline", fontSize: "20px" }}>
        Dont&apos;t have an Account&nbsp;
        <span
          onClick={() => navigate("/auth/register")}
          style={{ color: "blue", cursor: "pointer", fontWeight: "bold" }}
        >
          Register
        </span>
      </p>
    </form>
  );
};

export default Signin;
