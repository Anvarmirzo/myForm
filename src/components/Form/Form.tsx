import React from 'react';

import { FormProps } from './Form.props';
import { Input } from '../Input/Input';
import { Radio } from '../Radio/Radio';
import { Checkbox } from '../Checkbox/Checkbox';

import {
	pickOnlyDate,
	pickOnlyLetters,
	pickOnlyPhone,
	pickOnlyIndex,
} from '../../helpers/regexs';

export const Form = ({ className, ...props }: FormProps): JSX.Element => {
	const inputChangeHandler = (
		event: React.ChangeEvent<HTMLInputElement>,
		cb: (event: React.ChangeEvent<HTMLInputElement>) => boolean,
	) => {
		if (cb(event)) {
			event.target.classList.add('success');
			event.target.classList.remove('error');
		} else {
			event.target.classList.add('error');
			event.target.classList.remove('success');
		}
	};

	return (
		<form className={`${className ? className : ''} form`} {...props}>
			<Input
				label='Фамилия*'
				id='surname'
				type='text'
				onChange={(event) => inputChangeHandler(event, pickOnlyLetters)}
			/>
			<Input
				label='Имя*'
				id='name'
				type='text'
				onChange={(event) => inputChangeHandler(event, pickOnlyLetters)}
			/>
			<Input
				label='Отчество'
				id='patronymic'
				type='text'
				onChange={(event) => inputChangeHandler(event, pickOnlyLetters)}
			/>
			<Input
				label='Дата рождения*'
				id='date'
				type='text'
				onChange={(event) => inputChangeHandler(event, pickOnlyDate)}
			/>
			<Input
				label='Номер телефона*'
				id='phone'
				type='text'
				onChange={(event) => inputChangeHandler(event, pickOnlyPhone)}
			/>
			<Radio />
			<Checkbox />

			<hr />

			<Input
				id='index'
				type='text'
				label='Индекс'
				onChange={(event) => inputChangeHandler(event, pickOnlyIndex)}
			/>

			<Input
				id='country'
				type='text'
				label='Страна'
				onChange={(event) => inputChangeHandler(event, pickOnlyLetters)}
			/>

			<Input
				id='region'
				type='text'
				label='Область'
				onChange={(event) => inputChangeHandler(event, pickOnlyLetters)}
			/>

			<Input
				id='city'
				type='text'
				label='Город*'
				onChange={(event) => inputChangeHandler(event, pickOnlyLetters)}
			/>

			<Input
				id='street'
				type='text'
				label='Улица'
				onChange={(event) => inputChangeHandler(event, pickOnlyLetters)}
			/>

			<Input
				id='home'
				type='text'
				label='Дом'
				onChange={(event) => inputChangeHandler(event, pickOnlyLetters)}
			/>
		</form>
	);
};
