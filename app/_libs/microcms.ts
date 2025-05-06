export type News = {
	id: string;
	title: string;
	category: {
		name: string;
	};
	pubulishedAt: string;
	createdAt: string;
};

export type Category = {
	name: string;
};
