
export interface Contributor {
	Id: number;
	DocTopicId: number;
	Title: string;
	CreationDate: string;
	LastEditDate: string;
	Score: number;
	ContributorCount: number;
	BodyHtml: string;
	BodyMarkdown: string;
	IsPinned: boolean;
};
