import { Fragment } from "react";
import { Formik } from "formik";
import { Form, Input, Button, Typography } from "antd";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import {
  SIGNUP_FORM_INITIAL_VALUES,
  SIGNUP_FORM_VALIDATION_SCHEMA,
} from "../../../constants/authentication";
const { Title } = Typography;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Register = () => {
  const navigate = useNavigate()

  return (
    <Fragment>
      <Formik
        initialValues={SIGNUP_FORM_INITIAL_VALUES}
        validationSchema={SIGNUP_FORM_VALIDATION_SCHEMA}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(async() => {
            let userData = {
              email: values.email,
              password: values.password,
              name: values.name,
              lastName: values.lastName,
              image: `http://gravatar.com/avatar/${moment().unix()}?d=identicon`,
            };

            try {
              const res = await fetch(
                "http://localhost:4200/api/v1/register",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(userData),
                }
              );
              console.log(res)
              if (res.status === 200) {
                console.log("---------success----------");
              }
              const data = await res.json();
              if (data.status === "error") {
                console.log("signup error",data)
                console.log("api error messages:",data.error)
                // setFormErrorMessage(data.error);
              } else {
                console.log("login success")
                navigate("/login")
              }
            } catch (error) {
              console.log(error,"catch error")
              // setFormErrorMessage("Check out your Account or Password again");
              // setTimeout(() => {
                // setFormErrorMessage("");
              // }, 3000);
            } finally {
              setSubmitting(false);
            }

            setSubmitting(false);
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
              <Title level={2}>Sign up</Title>
              <Form
                style={{ minWidth: "375px" }}
                {...formItemLayout}
                onSubmit={handleSubmit}
              >
                <Form.Item required label="Name">
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.name && touched.name
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.name && touched.name && (
                    <div className="input-feedback">{errors.name}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Last Name">
                  <Input
                    id="lastName"
                    placeholder="Enter your Last Name"
                    type="text"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.lastName && touched.lastName
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.lastName && touched.lastName && (
                    <div className="input-feedback">{errors.lastName}</div>
                  )}
                </Form.Item>

                <Form.Item
                  required
                  label="Email"
                  hasFeedback
                  validateStatus={
                    errors.email && touched.email ? "error" : "success"
                  }
                >
                  <Input
                    id="email"
                    placeholder="Enter your Email"
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
                    <div className="input-feedback">{errors.email}</div>
                  )}
                </Form.Item>

                <Form.Item
                  required
                  label="Password"
                  hasFeedback
                  validateStatus={
                    errors.password && touched.password ? "error" : "success"
                  }
                >
                  <Input
                    id="password"
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
                    <div className="input-feedback">{errors.password}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Confirm" hasFeedback>
                  <Input
                    id="passwordConfirmation"
                    placeholder="Enter your confirmPassword"
                    type="password"
                    value={values.passwordConfirmation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.passwordConfirmation && touched.passwordConfirmation
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.passwordConfirmation && touched.passwordConfirmation && (
                    <div className="input-feedback">
                      {errors.passwordConfirmation}
                    </div>
                  )}
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                  <Button
                    onClick={handleSubmit}
                    type="primary"
                    disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          );
        }}
      </Formik>
    </Fragment>
  );
};

export default Register;
