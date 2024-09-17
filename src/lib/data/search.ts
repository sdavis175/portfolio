import { writable } from 'svelte/store';
import { selectedLanguage } from '@stores/language';

export const searchData = writable<{
	title: string;
	searchPlaceholder: string;
	tryTypingPlaceholder: string
	nothingFoundPlaceholder: string
}>({
	title: 'N/A',
	searchPlaceholder: 'N/A',
	tryTypingPlaceholder: 'N/A',
	nothingFoundPlaceholder: 'N/A'
});

selectedLanguage.subscribe((language) => {
	switch (language) {
		case 'en':
			searchData.set({
				title: 'Search',
				searchPlaceholder: 'Search...',
				tryTypingPlaceholder: 'Try typing something...',
				nothingFoundPlaceholder: 'Could not find anything...'
			});
			break;

		case 'ja':
			searchData.set({
				title: '検索',
				searchPlaceholder: '検索...',
				tryTypingPlaceholder: '何か入力してみて下さい...',
				nothingFoundPlaceholder: '何も見つかりません'
			});
			break;

		default:
			console.error("Loading Search - Unknown language selected.")
			searchData.set({
				title: 'N/A',
				searchPlaceholder: 'N/A',
				tryTypingPlaceholder: 'N/A',
				nothingFoundPlaceholder: 'N/A'
			});
			break;
	}
})
