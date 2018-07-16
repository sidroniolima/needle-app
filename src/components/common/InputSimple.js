import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';

const InputSimple = (props) => {
	const { textInput, textInputError } = styles;
	const { label, meta, input, ...inputProps } = props;

	return (
		<TextInput
			{...inputProps}
			underlineColorAndroid='transparent'
			autoCorrect={false}
			style={meta.touched && meta.error ? textInputError : textInput}
			onChangeText={input.onChange}
			onBlur={input.onBlur}
			value={input.value} 
		/>
	);
};

const styles =
	{
		textInput: {
			color: '#bfbfbf',
			alignSelf: 'stretch',
			padding: 12,
			marginBottom: 10,
			backgroundColor: 'rgba(255,255,255, 0.2)',
			borderColor: "#bfbfbf",
			borderWidth: 0.6
		},
		textInputError: {
			color: '#bfbfbf',
			alignSelf: 'stretch',
			padding: 12,
			marginBottom: 10,
			backgroundColor: 'rgba(255,255,255, 0.2)',
			borderColor: "#e74c3c",
			borderWidth: 0.6
		}
	}

export default InputSimple;