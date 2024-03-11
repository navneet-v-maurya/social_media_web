import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const initial_user_details = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    gender: "",
    birth_date: "1999-04-22",
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
    <div className="auth">
      <div className="logo">Logo</div>
      <form className="flex-vertical-container" onSubmit={handle_submit}>
        <input
          className="input"
          type="text"
          placeholder="Name"
          name="name"
          value={user_details.name}
          onChange={handle_input_change}
        />
        <input
          className="input"
          type="email"
          placeholder="Email"
          name="email"
          value={user_details.email}
          onChange={handle_input_change}
        />
        <div className="flex-horizontal-container" style={{ gap: "1rem" }}>
          <div
            className="flex-horizontal-container"
            style={{ gap: "0.5rem", width: "50%" }}
          >
            <span style={{ display: "block" }}>Birth Date:</span>
            <input
              className="input"
              style={{ width: "100%" }}
              type="date"
              name="birth_date"
              value={user_details.birth_date}
              onChange={handle_input_change}
            />
          </div>

          <div
            className="flex-horizontal-container"
            style={{ gap: "0.5rem", width: "50%" }}
          >
            <span>Gender:</span>
            <select
              className="input"
              style={{ width: "100%" }}
              value={user_details.gender}
              name="gender"
              onChange={handle_input_change}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <input
          className="input"
          type="password"
          placeholder="Password"
          name="password"
          value={user_details.password}
          onChange={handle_input_change}
        />
        <input
          className="input"
          type="password"
          name="confirm_password"
          placeholder="Confirm Password"
          value={user_details.confirm_password}
          onChange={handle_input_change}
        />

        <button className="button" type="submit">
          Register
        </button>
        <button className="button" type="button" onClick={handle_reset}>
          Reset
        </button>
        <p style={{ textDecoration: "underline", fontSize: "20px" }}>
          Already have an Account&nbsp;
          <span
            onClick={() => navigate("/auth/signin")}
            style={{ color: "blue", cursor: "pointer", fontWeight: "bold" }}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

export default Register;
