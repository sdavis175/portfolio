import { writable } from 'svelte/store';
import { selectedLanguage } from '@stores/language';
import { enResume, enResumeBase64 } from '@data/resumes_data/en-resume';
import { jaRirekisho, jaRirekishoBase64 } from '@data/resumes_data/ja-rirekisho';
import { jaShokumukeirekisho, jaShokumukeirekishoBase64 } from '@data/resumes_data/ja-shokumukeirekisho';
// Base64: https://base64.guru/converter/encode/pdf

export const resumeData = writable<{
	title: string;
	resumes: Array<[string, string, string]>;
}>({
	title: 'N/A',
	resumes: [],
});

selectedLanguage.subscribe((language) => {
	switch (language) {
		case 'en':
			resumeData.set({
				title: 'Resumé',
				resumes: [['Shane K Davis Resumé', enResume, enResumeBase64]]
			});
			break;

		case 'ja':
			resumeData.set({
				title: '履歴書',
				resumes: [
					['履歴書', jaRirekisho, jaRirekishoBase64],
					['職務経歴書', jaShokumukeirekisho, jaShokumukeirekishoBase64]
				]
			});
			break;

		default:
			console.error("Loading Resume - Unknown language selected.")
			resumeData.set({
				title: 'N/A',
				resumes: []
			});
			break;
	}
})