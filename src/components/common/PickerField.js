import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';

import styles from './StyleInputLabel';

const PickerField = (props) => {
	const { containerPicker, bgPickerStyle, bgPickerStyleError, pickerStyle, labelStyle, errorView, errorText } = styles;
	const { label, meta, input, children, ...inputProps } = props;
	return (
		<View>
			<View style={containerPicker}>
				{label && <Text style={labelStyle}>{label}</Text>}
				<View style={meta.touched && meta.error ? bgPickerStyleError : bgPickerStyle}>
					<Picker
						{...inputProps}
						autoCorrect={false}
						style={pickerStyle}
						onValueChange={input.onChange}
						selectedValue={input.value}
						children={children} />
				</View>
			</View>

			<View style={errorView}>
				{meta.touched && meta.error &&
					<Text
						style={errorText}>
						{meta.error}
					</Text>
				}
			</View>
		</View>
	);
};

export default PickerField;