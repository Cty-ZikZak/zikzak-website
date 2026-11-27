import pocketbaseClient from '@/lib/pocketbaseClient';

/*
  Gửi form đăng ký tư vấn.
  - Có biến môi trường VITE_FORM_WEBHOOK_URL (Google Sheets, Make, Zapier…): gửi về webhook đó.
  - Không có: lưu vào bảng "leads" trên PocketBase.
*/
export async function submitLead(data) {
	const webhookUrl = import.meta.env.VITE_FORM_WEBHOOK_URL;

	if (webhookUrl) {
		const response = await fetch(webhookUrl, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				formId: 'zikzak-lead',
				collectionName: 'leads',
				submittedAt: new Date().toISOString(),
				page: typeof window !== 'undefined' ? window.location.pathname : '',
				data,
			}),
		});

		if (!response.ok) {
			throw new Error(`Webhook HTTP ${response.status}`);
		}

		return;
	}

	await pocketbaseClient.collection('leads').create({
		...data,
		page: typeof window !== 'undefined' ? window.location.pathname : '',
	});
}
