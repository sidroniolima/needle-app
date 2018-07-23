import React, { Component } from 'react';
import { Picker, View } from 'react-native';

const PickerSimple = (props) => {
	const { viewPicker, viewPickerError, textInput } = styles;
	const { label, meta, input, ...inputProps } = props;

	const items = props.options.map( (item, index) => {
		return (<Picker.Item value={item.value} label={item.label} key={item.value}/>)
	});

	return (
		<View style={meta.touched && meta.error ? viewPickerError : viewPicker}>
			<Picker
				{...inputProps}
				autoCorrect={false}
				onValueChange={input.onChange}
				onBlur={input.onBlur}
				style={textInput}
				selectedValue={input.value}
			>
				{items}
			</Picker>
		</View>
	);
};

const styles =
	{
		viewPicker: {
			backgroundColor: '#bfbfbf',
			alignSelf: 'stretch',
			backgroundColor: 'rgba(255,255,255, 0.2)',
			borderColor: "#bfbfbf",
			marginBottom: 10,
			borderWidth: 0.6,
		},
		viewPickerError: {
			backgroundColor: '#bfbfbf',
			alignSelf: 'stretch',
			backgroundColor: 'rgba(255,255,255, 0.2)',
			borderColor: "#e74c3c",
			marginBottom: 10,
			borderWidth: 0.6,
		},
		textInput: {
			color: '#bfbfbf',
		}
	}

export default PickerSimple;