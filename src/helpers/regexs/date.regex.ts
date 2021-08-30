import { regDate } from './regexPatterns';

export function pickOnlyDate(
	event: React.ChangeEvent<HTMLInputElement>,
): boolean {
	return regDate.test(event.target.value) ? true : false;
}
