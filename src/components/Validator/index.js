import React, { Component } from 'react';
import { TextInput } from "@react-native-material/core";
import { View, Text } from 'react-native';

const validateString = (text) => {
  let stack = []
  
  for (var i = 0; i < text.length; i++) {
    let current = text.charAt(i);
    
    if (current == '(' || current == '{' || current == '['){
      stack.push(current)
    } else {
      
      if (current == '}' || current == ']' || current == ')'){
        switch(stack[stack.length-1]){        
          case '(':
            if (current == ')'){
              stack.pop()  
            }
            break;
          case '{':
            if (current =='}'){
              stack.pop() 
            }
            break;
          case '[':
            if (current == ']'){
              stack.pop() 
            }
            break;
          default:
            if (stack.length == 0){
              return false 
            }
            break;
        }
      } 
    }
  }

  if (stack) {
    if (stack.length == 0){
      return true
    } else {
      return false
    }    
  } else {
    return false
  }

}

const Validator = () => {
  const [text, onChangeText] = React.useState("const addOne = value => { return value + 1; }};");

  return (
    <View style={{paddingTop: 100, paddingHorizontal: 20 }}>
      
      {validateString(text) && (
        <Text style={{ marginBottom:50, fontSize:20, color:'green', fontWeight:"bold", textAlign:"center"}}>Los parentesis, Corchetes, etc estan equilibrados</Text>
      )}

      {!validateString(text) && (
        <Text style={{ marginBottom:50, fontSize:20, color:'red', fontWeight:"bold", textAlign:"center"}}>Los parentesis, Corchetes, etc no estan equilibrados</Text>
      )}

      <Text style={{ marginBottom:10, fontSize:14, color:'grey'}}>Ingresa tu codigo:</Text>
      <TextInput multiline={true} numberOfLines={10}
          style={{ flex: 1, height:200, textAlignVertical: 'top'}} 
          variant="standard" value={text} onChangeText={onChangeText}/>
    </View>
    
  )
};

export default Validator;
