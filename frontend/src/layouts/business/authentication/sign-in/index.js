import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// react-router-dom components
import { Link, json, useNavigate } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import CoverLayout from "layouts/business/authentication/components/CoverLayout";
import axios from "axios";
// Images
import curved9 from "assets/images/curved-images/curved-6a.jpeg";
import { Alert } from "bootstrap";

function SignIn() {
  const [adminEmail, setAdminEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState(null);
  const [showAdminPassword, setShowAdminPassword] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowAdminPassword(!showAdminPassword);
  };

  //Signin Function
  const isValidEmail = (adminEmail) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(adminEmail);
  };
  const isValidPassword = (adminPassword) => {
    return adminPassword.length >= 8;
  };
  const businessSignin = async () => {
    if (adminEmail == "" || adminEmail == null) {
      setEmailErr("please enter your email");
    } else if (!isValidEmail(adminEmail)) {
      setEmailErr("please enter valid email: example@gmail.com");
    }
    if (adminPassword == "" || adminPassword == null) {
      setPasswordErr("password must not be null");
    } else if (!isValidPassword(adminPassword)) {
      setPasswordErr("password must be 8 character long.");
    }
    if (
      !adminEmail ||
      !adminPassword ||
      !isValidEmail(adminEmail) ||
      !isValidPassword(adminPassword)
    ) {
      return false;
    }
    // navigate("/dashboard");
    const formData = new FormData();
    formData.append("email", adminEmail);
    formData.append("password", adminPassword);

    axios({
      method: "post",
      url: `http://localhost:8888/adminLogin`,
      headers: { "Content-Type": "multipart/form-data" },
      data: formData,
    })
    .then((response) => {
      console.log(response.data);
      if (response.data.match) {
        localStorage.setItem("admin", JSON.stringify(response.data));
        navigate("/dashboard");
      } else {
        alert("Invalid user");
      }
    })
    .catch((error) => {
      console.log(error);
    });
    
  };
  const buttonStyle = {
    background: 'linear-gradient(to right, #009387, #023e8a)',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };
  const textGradientStyle = {
    backgroundImage: 'linear-gradient(to right,#4cb8c4, #3cd3ad, #009387, #023e8a)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    fontSize: '24px', // Adjust the font size as needed
    fontWeight: 'bold', // Adjust the font weight as needed
  };
  return (
    <CoverLayout
      title="Dream Organizer"
      description="Enter your email and password to sign in"
      image={curved9}
    >
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
        <div style={{ display: 'inline-block' }}>
      <h1 style={textGradientStyle}>Dream Organizers</h1>
    </div>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Email
            </SoftTypography>
          </SoftBox>

          <SoftInput
            type="email"
            placeholder="Email"
            value={adminEmail}
            onChange={(e) => {
              setAdminEmail(e.target.value);
              setEmailErr("");
            }}
          />
          {emailErr ? (
            <div>
              <p
                style={{
                  color: "#FF0000",
                  fontSize: 14,
                  fontFamily: "Poppins-Regular",
                }}
              >
                {emailErr}
              </p>
            </div>
          ) : null}
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Password
            </SoftTypography>
          </SoftBox>
          <div style={{ position: "relative" }}>
            <SoftInput
              type={showAdminPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={adminPassword}
              onChange={(e) => {
                setAdminPassword(e.target.value);
                setPasswordErr(null);
              }}
            />
            <span
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
              onClick={togglePasswordVisibility}
            >
              {showAdminPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </span>
          </div>
          {passwordErr ? (
            <div>
              <p
                style={{
                  color: "#FF0000",
                  fontSize: 14,
                  fontFamily: "Poppins-Regular",
                }}
              >
                {passwordErr}
              </p>
            </div>
          ) : null}
        </SoftBox>

        <SoftBox mt={4} mb={1}>
        <button style={buttonStyle} type="button"  onClick={() => {
              businessSignin();
            }}>
      Login
    </button>
          {/* <SoftButton
            onClick={() => {
              businessSignin();
            }}
            variant="gradient"
            color="info"
            fullWidth
          >
            sign in
          </SoftButton> */}
        </SoftBox>
      </SoftBox>
    </CoverLayout>
  );
}

export default SignIn;
