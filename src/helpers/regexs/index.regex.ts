import { regOmitLetters } from './regexPatterns';

export function pickOnlyIndex(
	event: React.ChangeEvent<HTMLInputElement>,
): boolean {
	if (event.target.value.match(regOmitLetters)) {
		event.target.value = event.target.value.replace(regOmitLetters, '');
	}
	return event.target.value ? true : false;
}
