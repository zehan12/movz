import { Fragment } from "react";
import { Form, Input, Button, Typography } from "antd";
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
    const isSubmitting = false;

  return (
    <Fragment>
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
                errors.name && touched.name ? "text-input error" : "text-input"
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
            validateStatus={errors.email && touched.email ? "error" : "success"}
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
              id="confirmPassword"
              placeholder="Enter your confirmPassword"
              type="password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.confirmPassword && touched.confirmPassword
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <div className="input-feedback">{errors.confirmPassword}</div>
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
    </Fragment>
  );
};

export default Register;