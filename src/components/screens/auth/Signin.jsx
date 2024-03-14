import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

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
    console.log(user_details);
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
