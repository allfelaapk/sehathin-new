import React, { Component } from 'react';
import { Button } from '@mui/material';
import InputText from '../formBmi/InputText';
import RadioInput from '../formBmi/RadioInput';
import SelectInput from '../formBmi/SelectInput';

type Props = {
  currentTarget: any;
};

type State = {
  data: {};
};

class Form extends Component<Props, State> {
  state = { data: {} };

  doSubmit = () => {
    console.log(this.state.data);
  };

  handleChange = ({ currentTarget: input } = this.props) => {
    const data = [{ ...this.state.data }];
    data[input.name] = input.value;
    this.setState({ data });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.doSubmit();
  };

  renderInputText(name: any, label: any, type = 'text', required = true) {
    const data = this.state;
    return (
      <InputText
        name={name}
        value={data[name]}
        type={type}
        required={required}
        label={label}
        onChange={this.handleChange}
      />
    );
  }

  renderRadioInput(name: any, label: any, options: any, required = true) {
    const { data } = this.state;
    return (
      <RadioInput
        name={name}
        value={data[name]}
        onChange={this.handleChange}
        label={label}
        options={options}
        required={required}
      />
    );
  }

  renderSelectInput(name: any, label: any, options: any, required = true) {
    const { data } = this.state;
    return (
      <SelectInput
        name={name}
        value={data[name]}
        options={options}
        label={label}
        required={required}
        onChange={this.handleChange}
      />
    );
  }

  renderSubmitBtn(name: any) {
    return (
      <Button
        type="submit"
        style={{ marginLeft: 'auto' }}
        variant="contained"
        size="medium"
        color="primary"
      >
        {name}
      </Button>
    );
  }
}

export default Form;
