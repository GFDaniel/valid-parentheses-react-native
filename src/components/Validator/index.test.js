import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';
import Validator from './index';
import { TextInput } from 'react-native';

describe('Validator Component', () => {
  it('input validation', () => {
    const textInputRenderer = TestRenderer.create(<Validator />);
    const textInputInstance = textInputRenderer.root;
    const value =  'const addOne = value => { return value + 1; }};'
    act(() => {
      textInputInstance.findByType(TextInput).props.onChangeText(value);
    });
    expect(textInputInstance.findByType(TextInput).props.value).toEqual('const addOne = value => { return value + 1; }};');
  });

  it('should handle onChange event - balanced brackets', () => {
    const textInputRenderer = TestRenderer.create(<Validator />);
    const textInputInstance = textInputRenderer.root;
    const value =  'const addOne = value => { return value + 1; };'
    act(() => {
      textInputInstance.findByType(TextInput).props.onChangeText(value);
    });
    expect(textInputInstance.findByProps({className: "balancedBrackets"}));
  });

  it('should handle onChange event - unbalanced brackets', () => {
    const textInputRenderer = TestRenderer.create(<Validator />);
    const textInputInstance = textInputRenderer.root;
    const value =  'const addOne = value => { return value + 1; }};'
    act(() => {
      textInputInstance.findByType(TextInput).props.onChangeText(value);
    });
    expect(textInputInstance.findByProps({className: "unbalancedBrackets"}));
  });
  
});

    