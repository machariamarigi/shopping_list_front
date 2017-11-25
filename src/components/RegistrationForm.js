import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';

import '../styles/authForm.css';
import { register } from '../actions/authActions';
import { email, required, minLength, alphaNumeric } from '../helpers/formValidators';

const style = {
  margin: 12,
};

const minlength8 = minLength(8);

const validate = (values) => {
  const errors = {};
  if (values.password !== values.confirmPassword) {
    errors.password = 'Must match confirm password';
    errors.confirmPassword = 'Must match password';
  }
  return errors;
};

class RegistrationForm extends Component {
  onSubmit(user) {
    const { dispatch } = this.props;
    dispatch(register(user, (path) => {
      this.props.history.push(path);
    }));
  }

  render() {
    const { handleSubmit, registering } = this.props;
    return (
      <div className="form-container">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="form">
          <div>
            <Field
              name="username"
              component={TextField}
              hintText="Username"
              validate={[required, alphaNumeric]}
              floatingLabelText="Username"
            />
          </div>
          <div>
            <Field
              name="email"
              component={TextField}
              hintText="Email"
              validate={[required, email]}
              floatingLabelText="Email"
            />
          </div>
          <div>
            <Field
              name="password"
              type="password"
              component={TextField}
              hintText="Password"
              validate={[required, minlength8]}
              floatingLabelText="Password"
            />
          </div>
          <div>
            <Field
              name="confirmPassword"
              component={TextField}
              hintText="Confirm Password"
              validate={[required, minlength8]}
              type="password"
              floatingLabelText="Confirm Password"
            />
          </div>
          <div>
            <RaisedButton label="Register" primary style={style} type="Submit" disabled={registering} />
            {registering && (
              <img
                alt="loading..."
                src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
              />
            )}
          </div>
          <hr />
          <div>
            <p>
              Already have an account? Please{' '}
              <Link to="/login" href>
                login
              </Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { registering } = state.registration;
  return {
    registering,
  };
}

export default reduxForm({
  form: 'REGISTERFORM',
  validate,
})(connect(mapStateToProps, { register })(RegistrationForm));
