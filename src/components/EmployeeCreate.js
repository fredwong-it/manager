import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Fred"
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="111-111-1111"
          />
        </CardSection>
        <CardSection>    
        </CardSection>
        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeCreate;
