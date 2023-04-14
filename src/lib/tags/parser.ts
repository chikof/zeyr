import type { TagOptions } from '../types/Tag';

export class TagParser {
	filter: TagOptions;
	constructor(filter: TagOptions) {
		this.filter = filter;
	}

	public parse(query: string) {
		return query.replaceAll(
			new RegExp(Object.keys(this.filter).join('|'), 'g'),
			(m) => this.filter[m] as string
		);
	}
}