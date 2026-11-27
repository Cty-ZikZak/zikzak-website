import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';
import Orb from './Orb.jsx';
import { submitLead } from '../lib/submitLead.js';
import { contact, interestOptions } from '../data/site.js';

const empty = { name: '', phone: '', learner_age: '', interest: '', email: '', message: '' };
const PHONE = /^(\+?84|0)[\s.-]?\d(?:[\s.-]?\d){8}$/;

const validate = (values) => {
	const errors = {};

	if (values.name.trim().length < 2) errors.name = 'Vui lòng nhập họ tên.';
	if (!PHONE.test(values.phone.trim())) errors.phone = 'Số điện thoại chưa đúng (10 số, ví dụ 0912 345 678).';
	if (values.email.trim() && !/^\S+@\S+\.\S+$/.test(values.email.trim())) errors.email = 'Email chưa đúng.';

	return errors;
};

export default function LeadForm({ defaultInterest = '', title = 'Đăng ký học thử miễn phí 1 buổi', hint }) {
	const [values, setValues] = useState({ ...empty, interest: defaultInterest });
	const [errors, setErrors] = useState({});
	const [status, setStatus] = useState('idle');

	const update = (key) => (event) => {
		setValues((v) => ({ ...v, [key]: event.target.value }));
		if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		const found = validate(values);
		setErrors(found);

		if (Object.keys(found).length) {
			event.currentTarget.querySelector(`[name="${Object.keys(found)[0]}"]`)?.focus();
			return;
		}

		setStatus('loading');

		try {
			const payload = Object.fromEntries(Object.entries(values).map(([k, v]) => [k, v.trim()]));
			await submitLead(payload);
			setStatus('success');
			setValues({ ...empty, interest: defaultInterest });
		} catch (error) {
			console.error('[LeadForm] submit failed', error);
			setStatus('error');
		}
	};

	if (status === 'success') {
		return (
			<div className="zz-form-success zz-glass" role="status">
				<Orb size={88} color="var(--zz-green)" label="✓" />
				<h3>Cảm ơn bạn!</h3>
				<p>ZikZak sẽ liên hệ lại để tư vấn lớp phù hợp. Cần gấp? Gọi ngay {contact.hotlineDisplay}.</p>
				<button type="button" className="zz-btn" onClick={() => setStatus('idle')}>Gửi thêm một đăng ký</button>
			</div>
		);
	}

	const field = (key, label, input, full = false) => (
		<label className={['zz-field', full ? 'zz-field--full' : ''].filter(Boolean).join(' ')}>
			{label}
			{input}
			{errors[key] ? <span className="zz-field__error" id={`lead-${key}-error`}>{errors[key]}</span> : null}
		</label>
	);

	const inputProps = (key) => ({
		name: key,
		className: 'zz-input',
		value: values[key],
		onChange: update(key),
		'aria-invalid': errors[key] ? 'true' : undefined,
		'aria-describedby': errors[key] ? `lead-${key}-error` : undefined,
	});

	return (
		<form className="zz-form zz-glass" onSubmit={onSubmit} noValidate>
			<h3>{title}</h3>
			<p className="zz-form__hint">{hint || 'Để lại thông tin, ZikZak gọi lại tư vấn lớp phù hợp với độ tuổi và mục tiêu.'}</p>

			{field('name', 'Họ tên phụ huynh / học viên *', <input {...inputProps('name')} autoComplete="name" placeholder="Nguyễn Văn A" />)}
			{field('phone', 'Số điện thoại / Zalo *', <input {...inputProps('phone')} type="tel" inputMode="tel" autoComplete="tel" placeholder="09xx xxx xxx" />)}
			{field('learner_age', 'Độ tuổi người học', (
				<select {...inputProps('learner_age')}>
					<option value="">Chọn độ tuổi</option>
					<option>3 – 5 tuổi</option>
					<option>6 – 10 tuổi</option>
					<option>11 – 15 tuổi</option>
					<option>16 – 18 tuổi</option>
					<option>Trên 18 tuổi</option>
				</select>
			))}
			{field('interest', 'Quan tâm đến', (
				<select {...inputProps('interest')}>
					<option value="">Chọn chương trình</option>
					{interestOptions.map((option) => <option key={option}>{option}</option>)}
				</select>
			))}
			{field('email', 'Email (không bắt buộc)', <input {...inputProps('email')} type="email" autoComplete="email" placeholder="ban@email.com" />, true)}
			{field('message', 'Lời nhắn (không bắt buộc)', <textarea {...inputProps('message')} rows={3} placeholder="Ví dụ: con 7 tuổi, muốn học cuối tuần" />, true)}

			{status === 'error' ? (
				<p className="zz-form__status zz-form__status--error" role="alert">
					Chưa gửi được. Vui lòng thử lại hoặc gọi <a href={`tel:${contact.hotline}`}><strong>{contact.hotlineDisplay}</strong></a>.
				</p>
			) : null}

			<div className="zz-form__submit">
				<button type="submit" className="zz-btn zz-btn--primary" disabled={status === 'loading'}>
					<Send />
					{status === 'loading' ? 'Đang gửi…' : 'Gửi đăng ký'}
				</button>
			</div>
			<p className="zz-form__note">
				Hoặc nhắn nhanh qua <a href={contact.zalo} target="_blank" rel="noreferrer"><strong>Zalo</strong></a> · <Link to="/trien-lam">Xem tranh học viên</Link>
			</p>
		</form>
	);
}
