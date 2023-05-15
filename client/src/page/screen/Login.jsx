import { Form, Input, Button, Checkbox, Typography } from "antd";
import { Fragment } from "react";
const { Title } = Typography;
const Login = () => {
    const handleSubmit = () => {}
    const handleChange = () => {}
    const handleBlur = () => {}
    const handleRememberMe = () => {}
    const values = {
        email:"zehan9211@gmail.com",
        password:""
    }

    const errors={
        email:"",
        password:""
    }

    const touched = {
        email:"",
        password:""
    }
    const rememberMe = true;
    const isSubmitting = false;
    const formErrorMessage = "";

  return ( 
    <Fragment>
    <div className="app">
      <Title level={2}>Log In</Title>
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
              errors.email && touched.email ? "text-input error" : "text-input"
            }
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
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
            <div className="input-feedback">{errors.password}</div>
          )}
        </Form.Item>

        {formErrorMessage && (
          <label>
            <p
              style={{
                color: "#ff0000bf",
                fontSize: "0.7rem",
                border: "1px solid",
                padding: "1rem",
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
    </Fragment>
  );
};


export default Login