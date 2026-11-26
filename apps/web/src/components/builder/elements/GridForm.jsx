import React, { useMemo, useState } from 'react';
import pocketbaseClient from '@/lib/pocketbaseClient';
import { getFormErrors, getFormFieldError, getFormFieldLabel } from './formValidation.js';

const toPx = (value) => (value != null ? `${value}px` : undefined);

export default function GridForm({
	id,
	formId,
	collectionName,
	fields = [],
	successMessage = 'Thank you',
	formBackgroundColor,
	formBorderWidth,
	formBorderColor,
	formBorderRadius,
	formPadding,
	formFontFamily,
	formFontWeight,
	inputFillColor,
	inputFillColorHover,
	inputTextColor,
	inputTextColorHover,
	labelTextColor,
	inputBorderColor,
	inputBorderColorHover,
	inputBorderWidth,
	inputBorderRadius,
	submitButtonBackgroundColor,
	submitButtonBackgroundColorHover,
	submitButtonFontColor,
	submitButtonFontColorHover,
	submitButtonFontFamily,
	submitButtonFontWeight,
	submitButtonBorderColor,
	submitButtonBorderColorHover,
	submitButtonBorderWidth,
	submitButtonBorderRadius,
	submitLabel = 'Submit',
	submitAlign,
}) {
	const initialValues = useMemo(() => {
		const values = {};
		for (const field of fields) {
			values[field.key] = field.control === 'checkbox' ? [] : '';
		}
		return values;
	}, [fields]);

	const [values, setValues] = useState(initialValues);
	const [status, setStatus] = useState('idle');
	const [errors, setErrors] = useState({});
	const [areErrorsShown, setAreErrorsShown] = useState(false);

	const updateValue = (field, value) => {
		setValues((current) => ({
			...current,
			[field.key]: value,
		}));
		setErrors((current) => ({
			...current,
			[field.key]: getFormFieldError(field, value),
		}));
	};

	const handleCheckboxToggle = (field, option) => {
		const selected = Array.isArray(values[field.key]) ? values[field.key] : [];

		updateValue(field, selected.includes(option)
			? selected.filter((value) => value !== option)
			: [...selected, option]);
	};

	const renderError = (field) => (areErrorsShown && errors[field.key]
		? <p id={`${id}-${field.key}-error`} className="grid-form__error-message">{errors[field.key]}</p>
		: null);

	const getInvalidProps = (field) => (areErrorsShown && errors[field.key]
		? { 'aria-invalid': true, 'aria-describedby': `${id}-${field.key}-error` }
		: {});

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!collectionName) {
			console.warn(`[GridForm] Missing collection name for formId="${formId}"`);
			setStatus('error');
			return;
		}

		const submitErrors = getFormErrors(fields, values);
		const firstInvalidField = fields.find((field) => submitErrors[field.key]);

		setErrors(submitErrors);
		setAreErrorsShown(Boolean(firstInvalidField));

		if (firstInvalidField) {
			setStatus('idle');
			event.currentTarget.querySelector(`[name="${firstInvalidField.key}"]`)
				?.scrollIntoView({ behavior: 'smooth', block: 'center' });
			return;
		}

		setStatus('loading');

		try {
			const payload = {};
			for (const field of fields) {
				const rawValue = values[field.key];
				const value = typeof rawValue === 'string' ? rawValue.trim() : rawValue;
				const isEmpty = value == null || value === '' || (Array.isArray(value) && !value.length);

				if (!isEmpty) {
					payload[field.key] = value;
				}
			}

			const customWebhookUrl = import.meta.env.VITE_FORM_WEBHOOK_URL;
			if (customWebhookUrl) {
				const response = await fetch(customWebhookUrl, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						formId,
						collectionName,
						submittedAt: new Date().toISOString(),
						data: payload,
					}),
				});
				if (!response.ok) {
					throw new Error(`Webhook HTTP ${response.status}`);
				}
			} else {
				await pocketbaseClient.collection(collectionName).create(payload);
			}

			setStatus('success');
			setValues(initialValues);
			setErrors({});
			setAreErrorsShown(false);
		} catch (error) {
			console.error('[GridForm] submit failed', error);
			setStatus('error');
		}
	};

	const formStyle = {
		'--form-bg': formBackgroundColor,
		'--form-border-width': toPx(formBorderWidth),
		'--form-border-color': formBorderColor,
		'--form-border-radius': toPx(formBorderRadius),
		'--form-padding': toPx(formPadding),
		'--form-font-family': formFontFamily,
		'--form-font-weight': formFontWeight,
		'--input-fill': inputFillColor,
		'--input-fill-hover': inputFillColorHover || inputFillColor,
		'--input-text': inputTextColor,
		'--input-text-hover': inputTextColorHover || inputTextColor,
		'--label-text': labelTextColor,
		'--input-border': inputBorderColor,
		'--input-border-hover': inputBorderColorHover || inputBorderColor,
		'--input-border-width': toPx(inputBorderWidth),
		'--input-radius': toPx(inputBorderRadius),
		'--submit-bg': submitButtonBackgroundColor,
		'--submit-bg-hover': submitButtonBackgroundColorHover || submitButtonBackgroundColor,
		'--submit-color': submitButtonFontColor,
		'--submit-color-hover': submitButtonFontColorHover || submitButtonFontColor,
		'--submit-font-family': submitButtonFontFamily,
		'--submit-font-weight': submitButtonFontWeight,
		'--submit-border': submitButtonBorderColor,
		'--submit-border-hover': submitButtonBorderColorHover || submitButtonBorderColor,
		'--submit-border-width': toPx(submitButtonBorderWidth),
		'--submit-radius': toPx(submitButtonBorderRadius),
		'--submit-align': submitAlign === 'start' ? 'flex-start' : 'stretch',
	};

	if (status === 'success') {
		return (
			<div className="grid-form grid-form--success" data-element-id={id} style={formStyle}>
				<p>{successMessage}</p>
			</div>
		);
	}

	return (
		<form className="grid-form" data-element-id={id} name={formId} onSubmit={handleSubmit} style={formStyle} noValidate>
			{fields.map((field) => {
				if (field.control === 'radio' || field.control === 'checkbox') {
					return (
						<fieldset key={field.key} className="grid-form__label grid-form__fieldset">
							<legend className="grid-form__legend">{getFormFieldLabel(field, fields.length)}</legend>
							{(field.values || []).map((option) => (
								<label key={option} className="grid-form__option">
									<input
										type={field.control}
										name={field.key}
										value={option}
										required={field.control === 'radio' ? field.required : undefined}
										checked={field.control === 'checkbox'
											? (values[field.key] || []).includes(option)
											: values[field.key] === option}
										onChange={() => (field.control === 'checkbox'
											? handleCheckboxToggle(field, option)
											: updateValue(field, option))}
									/>
									<span>{option}</span>
								</label>
							))}
							{renderError(field)}
						</fieldset>
					);
				}

				if (field.control === 'textarea') {
					return (
						<label key={field.key} className="grid-form__label">
							{field.label ? <span>{getFormFieldLabel(field, fields.length)}</span> : null}
							<textarea
								name={field.key}
								placeholder={field.placeholder || ''}
								aria-label={field.label ? undefined : field.placeholder || field.key}
								required={field.required}
								rows={4}
								value={values[field.key] || ''}
								onChange={(event) => updateValue(field, event.target.value)}
								className="grid-form__input"
								{...getInvalidProps(field)}
							/>
							{renderError(field)}
						</label>
					);
				}

				return (
					<label key={field.key} className="grid-form__label">
						{field.label ? <span>{getFormFieldLabel(field, fields.length)}</span> : null}
						<input
							type={field.type === 'email' ? 'email' : 'text'}
							name={field.key}
							placeholder={field.placeholder || ''}
							aria-label={field.label ? undefined : field.placeholder || field.key}
							required={field.required}
							value={values[field.key] || ''}
							onChange={(event) => updateValue(field, event.target.value)}
							className="grid-form__input"
							{...getInvalidProps(field)}
						/>
						{renderError(field)}
					</label>
				);
			})}
			<button
				type="submit"
				className="grid-form__submit"
				disabled={status === 'loading'}
			>
				{submitLabel}
			</button>
			{status === 'error' ? <p>Something went wrong</p> : null}
		</form>
	);
}
