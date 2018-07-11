import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';

import styles from './StyleInputLabel';

const Input = (props) => {
	const { inputStyle, inputStyleError, labelStyle, containerStyle, errorView, errorText } = styles;
	const { label, meta, input, ...inputProps } = props;

	return (
		<View>
			<View style={containerStyle}>
				{label && <Text style={labelStyle}>{label}</Text>}
				<TextInput
					{...inputProps}
					underlineColorAndroid='transparent'
					autoCorrect={false}
					style={meta.touched && meta.error ? inputStyleError : inputStyle}
					onChangeText={input.onChange}
					onBlur={input.onBlur}
					value={input.value} />
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

export default Input;