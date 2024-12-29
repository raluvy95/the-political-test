export const questions = [
	{
		q: 'I love capitalist',
		type: 'liberty'
	},
	{
		q: "Our votes don't matter",
		type: 'democracy',
		subtractOnAgree: true
	},
	{
		q: 'Are socialist and fascist identical?',
		type: 'liberty'
	},
	{
		q: 'Centralized planned economy are the most efficient way to manage economy',
		type: 'liberty',
		subtractOnAgree: true
	},
	{
		q: 'Democracy is the best for the people.',
		type: 'democracy'
	},
	{
		q: 'People can vote whatever they want',
		type: 'democracy'
	},
	{
		q: "Land shouldn't be bought and sold.",
		type: 'liberty',
		subtractOnAgree: true
	},
	{
		q: 'Democracy is when people choose the leader',
		type: 'democracy'
	},
	{
		q: 'It is undemocratic when people are brainwashed into voting for the same leader',
		type: 'democracy'
	},
	{
		q: "We have to ban religion because they're more likely to be corrupt",
		type: 'liberty',
		subtractOnAgree: true
	},
	{
		q: 'Going to the vote bailot is a waste of time',
		type: 'democracy',
		subtractOnAgree: true
	},
	{
		q: 'Democratic People\'s Republic of Korea has "democratic" on it, so therefore it is democratic.',
		type: 'democracy'
	},
	{
		q: 'The government must ditch Ministry of Education so that the children cannot get indoctrinate.',
		type: 'liberty'
	},
	{
		q: "Monarchy is the best form of the government. It has been ruled for more than a millenial, therefore it's more stable than republic.",
		type: 'democracy',
		subtractOnAgree: true
	},
	{
		q: 'The national legistature are mostly represented by people.',
		type: 'democracy'
	},
	{
		q: '🗿',
		type: 'liberty'
	},
	{
		q: 'We need to deport illegal immigration.',
		type: 'liberty',
		subtractOnAgree: true
	},
	{
		q: 'Slurs are very offensive for some people. We need to ban it.',
		type: 'liberty',
		subtractOnAgree: true
	},
	{
		q: 'Only landlords and the best people have the right to vote',
		type: 'democracy',
		subtractOnAgree: true
	},
	{
		q: "Good parents don't punish their children.",
		type: 'liberty'
	},
	{
		q: 'King or Queen is the true head of the state',
		type: 'democracy',
		subtractOnAgree: true
	},
	{
		q: 'Globalization improves the economy',
		type: 'liberty'
	},
	{
		q: 'The state can cancel the election if the result was fraud',
		type: 'democracy'
	},
	{
		q: 'Socialist is when the government does stuff.',
		type: 'liberty',
		subtractOnAgree: true
	},
	{
		q: 'You cannot trust the population to pick the leader.',
		type: 'democracy',
		subtractOnAgree: true
	},
	{
		q: 'Freedom of business is the best practical way a society can prosper.',
		type: 'liberty'
	},
	{
		q: 'A government that provides for everyone is an inherently good idea.',
		type: 'democracy'
	},
	{
		q: 'The smaller the government, the freer the people.',
		type: 'democracy',
		subtractOnAgree: true
	}
] satisfies Questions[];

export interface Questions {
	q: string;
	type: 'democracy' | 'liberty';
	subtractOnAgree?: boolean;
}
