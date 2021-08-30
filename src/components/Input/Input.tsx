import React from 'react';
import { InputProps } from './Input.props';

export const Input = ({ label, className, id, ...props }: InputProps) => {
	return (
		<div className='input-wrapper'>
			<input
				id={id}
				className={`input ${className ? className : ''}`}
				{...props}
				placeholder=' '
			/>
			<label className='input-label' htmlFor={id}>
				{label}
			</label>
		</div>
	);
};
