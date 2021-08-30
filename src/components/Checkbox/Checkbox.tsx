import React from 'react';
import { Checkboxprops } from './Checkbox.props';

export const Checkbox = ({ id, ...props }: Checkboxprops) => {
	return (
		<div className='input-wrapper'>
			<p className='radio-label'>Группа клиентов*</p>

			<span>
				<input name='clientGroup' id='vip' type='checkbox' {...props} />
				<label htmlFor='vip'>VIP</label>
			</span>

			<span>
				<input name='clientGroup' id='problem' type='checkbox' {...props} />
				<label htmlFor='problem'>Проблемные</label>
			</span>

			<span>
				<input name='clientGroup' id='oms' type='checkbox' {...props} />
				<label htmlFor='oms'>ОМС</label>
			</span>

			<span>
				<input name='clientGroup' id='spam' type='checkbox' {...props} />
				<label htmlFor='spam'>Не отправлять СМС.</label>
			</span>
		</div>
	);
};
