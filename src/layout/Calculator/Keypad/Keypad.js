import React from 'react';
import KeypadRow from './KeypadRow/KeypadRow';
import Button from '../../../components/Button/Button';
import LargeButton from '../../../components/Button/LargeButton/LargeButton';
import ClearButton from '../../../components/Button/LargeButton/ClearButton';
import ZeroButton from '../../../components/Button/LargeButton/ZeroButton';
const keypad = (props) => (
  <section className="keypad"> 
    <KeypadRow>
      <Button className="try" type="operator" onButtonPress={props.onButtonPress}>(</Button>
      <Button type="operator" onButtonPress={props.onButtonPress}>)</Button>
      <Button type="primary" onButtonPress={props.onButtonPress}>&larr;</Button>
      <Button type="operator" onButtonPress={props.onButtonPress}>%</Button>
      <Button onButtonPress={props.onButtonPress}>7</Button>
      <Button onButtonPress={props.onButtonPress}>8</Button>
      <Button onButtonPress={props.onButtonPress}>9</Button>
      <Button type="operator" onButtonPress={props.onButtonPress}>+</Button>
      <ClearButton onButtonPress={props.onButtonPress}>C</ClearButton>
      <Button onButtonPress={props.onButtonPress}>4</Button>
      <Button onButtonPress={props.onButtonPress}>5</Button>
      <Button onButtonPress={props.onButtonPress}>6</Button>
      <Button type="operator" onButtonPress={props.onButtonPress}>-</Button>
      <Button onButtonPress={props.onButtonPress}>1</Button>
      <Button onButtonPress={props.onButtonPress}>2</Button>
      <Button onButtonPress={props.onButtonPress}>3</Button>
      <Button type="operator" onButtonPress={props.onButtonPress}>*</Button>
      <ZeroButton onButtonPress={props.onButtonPress}>0</ZeroButton>
      <Button onButtonPress={props.onButtonPress}>.</Button>
      <Button type="operator" onButtonPress={props.onButtonPress}>/</Button>
      <LargeButton onButtonPress={props.onButtonPress}>=</LargeButton>
    </KeypadRow>

  </section>
);
export default keypad;