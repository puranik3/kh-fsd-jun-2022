import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [gender, setGender] = useState("male");
  const [users, setUsers] = useState([]);
  const [usersFetchError, setUsersFetchError] = useState(null);
  const [createUserError, setCreateUserError] = useState(null);
  const [valid, setValid] = useState(false);

  const getUsers = () => {
    axios
      .get("http://localhost:3001/users")
      .then((response) => {
        return response.data;
      })
      .then((users) => {
        setUsers(users);
        setUsersFetchError(null);
      })
      .catch((error) => {
        setUsers([]);
        setUsersFetchError(error);
      });
  };

  useEffect(getUsers, []);

  const createUser = (event) => {
    event.preventDefault();

    axios
      .post(
        "http://localhost:3001/users",
        {
          username,
          email,
          gender,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        getUsers();
        setCreateUserError(null);
      })
      .catch(setCreateUserError);
  };

  const updateValue = (event) => {
    const { value, name } = event.target;

    if (name === "username") {
      setUsername(value);
    }

    if (name === "email") {
      setEmail(value);
    }

    if (name === "gender") {
      setGender(value);
    }
  };

  useEffect(() => {
    let valid = true;

    if (username === "" || username.length > 10) {
      valid = false;
      setUsernameError(
        "Username must be provided and must not exceed 10 characters"
      );
    } else {
      valid &&= true;
      setUsernameError("");
    }

    const emailPattern = /^[A-Za-z0-9\.\-]+@[A-Za-z0-9\.]+$/;
    if (email === "" || !emailPattern.test(email)) {
      valid = false;
      setEmailError("Email must be provided and must be valid");
    } else {
      valid &&= true;
      setEmailError("");
    }

    setValid(valid);
  }, [username, email, gender]);

  return (
    <div className="container my-5" onSubmit={createUser}>
      <form className="row needs-validation" noValidate>
        <div className="col-12 my-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control w-100"
              id="username"
              name="username"
              aria-describedby="username-requirements"
              required
              value={username}
              onChange={updateValue}
              placeholder="Please type in the username"
            />
            <div id="username-requirements " className="w-100">
              Username should not exceed 10 characters
            </div>
            {usernameError && (
              <div className="w-100 text-danger" id="username-error">
                {usernameError}
              </div>
            )}
          </div>
        </div>
        <div className="col-12 my-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <div className="input-group">
            <input
              type="email"
              className="form-control w-100"
              id="email"
              name="email"
              aria-describedby="email-requirements"
              required
              value={email}
              onChange={updateValue}
              placeholder="Please type in the email"
            />
            <div id="email-requirements" className="w-100">
              Any valid email id
            </div>
            {emailError && (
              <div className="w-100 text-danger" id="email-error">
                {emailError}
              </div>
            )}
          </div>
        </div>
        <div className="col-12 my-3">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <select
            className="form-select w-100"
            id="gender"
            name="gender"
            required
            value={gender}
            onChange={updateValue}
          >
            <option disabled value="">
              -- Select Gender --
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        {/*
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required>
            <label className="form-check-label" htmlFor=="invalidCheck">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        */}
        <div className="col-12 my-3">
          <button
            className="btn btn-primary w-100"
            type="submit"
            disabled={!valid}
          >
            Create a user
          </button>
        </div>
        <div className="text-center mt-3" style={{ fontStyle: "italic" }}>
          Total number of users created:{" "}
          <span className="number-of-users">{users && users.length}</span>
        </div>
        {usersFetchError && (
          <div className="alert alert-danger my-3">
            {usersFetchError.message}
          </div>
        )}
        {createUserError && (
          <div className="alert alert-danger my-3">
            {createUserError.message}
          </div>
        )}
      </form>
    </div>
  );
}

export default App;
