import React from 'react';
import { RadioProps } from './Radio.props';

export const Radio = ({ ...props }: RadioProps) => {
	return (
		<div className='input-wrapper'>
			<p className='radio-label'>Пол</p>

			<span>
				<input name='gender' id='male' type='radio' {...props} />
				<label htmlFor='male'>Мужской</label>
			</span>

			<span>
				<input name='gender' id='female' type='radio' {...props} />
				<label htmlFor='female'>Женский</label>
			</span>
		</div>
	);
};
