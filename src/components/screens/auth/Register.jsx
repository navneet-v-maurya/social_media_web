//module imports
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
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
    <form className="auth-form" onSubmit={handle_submit}>
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
      <div className="buttons">
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <span style={{ whiteSpace: "nowrap" }}>Birth Date:</span>
          <input
            className="input"
            style={{ width: "100%" }}
            type="date"
            name="birth_date"
            value={user_details.birth_date}
            onChange={handle_input_change}
          />
        </div>

        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
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

      <div className="buttons">
        <input
          className="input"
          type="password"
          style={{ width: "70%" }}
          placeholder="Password"
          name="password"
          value={user_details.password}
          onChange={handle_input_change}
        />
        <input
          className="input"
          type="password"
          style={{ width: "70%" }}
          name="confirm_password"
          placeholder="Confirm Password"
          value={user_details.confirm_password}
          onChange={handle_input_change}
        />
      </div>

      <div className="buttons">
        <button className="button" type="submit">
          Register
        </button>
        <button className="button" type="button" onClick={handle_reset}>
          Reset
        </button>
      </div>

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
  );
};

export default Register;
