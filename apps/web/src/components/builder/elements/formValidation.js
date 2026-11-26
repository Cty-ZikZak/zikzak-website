const EMAIL_PATTERN = /^[\p{L}\p{N}+._&-]{1,80}@[\p{L}\p{N}.-]{1,80}\.[A-Za-z]{1,15}$/u;
const DEFAULT_REQUIRED_MESSAGE = 'This field is required';
const DEFAULT_EMAIL_MESSAGE = 'Please enter a valid email address';

const isChoiceField = (field) => field.control === 'checkbox' || field.control === 'radio';

export function getFormFieldLabel(field, fieldCount) {
	const isAsteriskVisible = field.required && (isChoiceField(field) || fieldCount > 1);

	return `${field.label}${isAsteriskVisible ? '*' : ''}`;
}

export function getFormFieldError(field, value) {
	const isEmpty = Array.isArray(value)
		? !value.length
		: !String(value ?? '').replace(/ /g, '');

	if (isEmpty) {
		return field.required ? field.requiredMessage || DEFAULT_REQUIRED_MESSAGE : null;
	}

	if (field.type === 'email' && !EMAIL_PATTERN.test(String(value).trim())) {
		return field.emailMessage || DEFAULT_EMAIL_MESSAGE;
	}

	return null;
}

export function getFormErrors(fields, values) {
	return Object.fromEntries(fields
		.map((field) => [field.key, getFormFieldError(field, values[field.key])])
		.filter(([, message]) => message));
}
