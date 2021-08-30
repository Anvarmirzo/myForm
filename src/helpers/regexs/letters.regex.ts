import { regOmitNumbers } from './regexPatterns';

export function pickOnlyLetters(
	event: React.ChangeEvent<HTMLInputElement>,
): boolean {
	if (event.target.value.match(regOmitNumbers)) {
		event.target.value = event.target.value.replace(regOmitNumbers, '');
	}
	return event.target.value ? true : false;
}
