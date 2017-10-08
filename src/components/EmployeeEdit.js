import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate } from '../actions';

class EmployeeEdit extends Component {
  componentWillMount() {
    console.log(this.props.employee);
    // const { name, phone, shift } = this.props.employee;
    // this.props.employeeUpdate({ prop: 'name', value: name });
    // this.props.employeeUpdate({ prop: 'phone', value: phone });
    // this.props.employeeUpdate({ prop: 'shift', value: shift });

    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    console.log(name, phone, shift);
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mspStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mspStateToProps, {
  employeeUpdate
})(EmployeeEdit);
