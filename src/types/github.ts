export interface GitHubIssue {
	number: number,
	url: string,
	title: string,
	user: {
		login: string,
		avatar_url: string,
		html_url: string,
	} | null,
	state?: 'open' | 'closed' | 'all' | undefined,
	locked: boolean,
	pull_request?: {
		merged_at?: string | null | undefined;
		html_url: string | null;
	} | undefined,
	body?: string | null | undefined,
}