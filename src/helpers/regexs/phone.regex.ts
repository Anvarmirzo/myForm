import { regOmitLetters, regPhone } from './regexPatterns';

export function pickOnlyPhone(
	event: React.ChangeEvent<HTMLInputElement>,
): boolean {
	if (event.target.value.match(regOmitLetters)) {
		event.target.value = event.target.value.replace(regOmitLetters, '');
	}
	return regPhone.test(event.target.value) ? true : false;
}
