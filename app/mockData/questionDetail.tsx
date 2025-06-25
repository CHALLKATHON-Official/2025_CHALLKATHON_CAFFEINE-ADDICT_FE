export interface Answer {
	nickname: string;
	role: 'dad' | 'mom' | 'son' | 'daghter';
	answer: string | null;
	isMe: boolean;
}

export const questionMock: {
	question: string;
	answers: Answer[];
} = {
	question: '초등학생 시절, 가장 기억에 남는 순간은?',
	answers: [
		{ nickname: '아빠', role: 'dad', answer: '가나다라마바사', isMe: false },
		{ nickname: '아들', role: 'son', answer: null, isMe: false },
		{ nickname: '딸', role: 'daghter', answer: null, isMe: false },
		{ nickname: '엄마', role: 'mom', answer: null, isMe: true },
	],
};