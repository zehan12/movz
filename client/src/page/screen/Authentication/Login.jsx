import { Form, Input, Button, Checkbox, Typography } from "antd";
import { Fragment, useState } from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import {
  LOGIN_FORM_INITIAL_VALUES,
  LOGIN_FORM_VALIDATION_SCHEMA,
} from "../../../constants/authentication";
const { Title } = Typography;

const Login = ( ) => {
  const navigate = useNavigate();
  const rememberMeChecked = localStorage.getItem("rememberMe") ? true : false;
  const [formErrorMessage, setFormErrorMessage] = useState("");
  const [rememberMe, setRememberMe] = useState(rememberMeChecked);
  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };
  LOGIN_FORM_INITIAL_VALUES.email = localStorage.getItem("rememberMe")
    ? localStorage.getItem("rememberMe")
    : "";

  return (
    <Fragment>
      <Formik
        initialValues={LOGIN_FORM_INITIAL_VALUES}
        validationSchema={LOGIN_FORM_VALIDATION_SCHEMA}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(async () => {
            let userData = {
              email: values.email,
              password: values.password,
            };
            try {
              const res = await fetch(
                "http://localhost:4200/api/v1/authenticate/login",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(userData),
                }
              );
              if (res.status === 200) {
                console.log("---------success----------");
              }
              const data = await res.json();
              if (data.status === "error") {
                setFormErrorMessage(data.error);
              } else {
                const { user } = data
                window.localStorage.setItem("userId", user._id);
                if (rememberMe === true) {
                  window.localStorage.setItem("rememberMe", values.email);
                } else {
                  localStorage.removeItem("rememberMe");
                }
                navigate("/")
              }
            } catch (error) {
              setFormErrorMessage("Check out your Account or Password again");
              setTimeout(() => {
                setFormErrorMessage("");
              }, 3000);
            } finally {
              setSubmitting(false);
            }
          }, 500);
        }}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props;
          return (
            <div className="app">
              <Title level={3}>Log In</Title>
              <form onSubmit={handleSubmit} style={{ width: "350px" }}>
                <Form.Item required>
                  <Input
                    id="email"
                    // prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                    placeholder="Enter your email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.email && touched.email
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.email && touched.email && (
                    <div className="input-feedback py-4">{errors.email}</div>
                  )}
                </Form.Item>

                <Form.Item required>
                  <Input
                    id="password"
                    // prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                    placeholder="Enter your password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.password && touched.password
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.password && touched.password && (
                    <div className="input-feedback py-4">{errors.password}</div>
                  )}
                </Form.Item>

                {formErrorMessage && (
                  <label>
                    <p
                      style={{
                        color: "#ff0000bf",
                        fontSize: "0.7rem",
                        border: "1px solid",
                        padding: "2rem",
                        borderRadius: "10px",
                      }}
                    >
                      {formErrorMessage}
                    </p>
                  </label>
                )}

                <Form.Item>
                  <Checkbox
                    id="rememberMe"
                    onChange={handleRememberMe}
                    checked={rememberMe}
                  >
                    Remember me
                  </Checkbox>
                  <a
                    className="login-form-forgot"
                    href="/reset_user"
                    style={{ float: "right" }}
                  >
                    forgot password
                  </a>
                  <div>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      style={{ minWidth: "100%" }}
                      disabled={isSubmitting}
                      onSubmit={handleSubmit}
                    >
                      Log in
                    </Button>
                  </div>
                  Or <a href="/register">register now!</a>
                </Form.Item>
              </form>
            </div>
          );
        }}
      </Formik>
    </Fragment>
  );
};

export default Login;
