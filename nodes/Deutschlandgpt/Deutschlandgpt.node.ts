import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';
0;
import { deutschlandGPTFields, deutschlandGPTOperations } from './DeutschlandgptDescription';

export class Deutschlandgpt implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'DeutschlandGPT',
		name: 'deutschlandgpt',
		icon: 'file:deutschlandgpt.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Work with the DeutschlandGPT API',
		defaults: {
			name: 'DeutschlandGPT',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		usableAsTool: true,
		credentials: [
			{
				name: 'deutschlandGPTApi',
				required: false,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.deutschlandgpt.de/',
			url: '',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Model',
						value: 'model',
					},
					{
						name: 'Chat',
						value: 'chat',
					},
				],
				default: 'chat',
			},
			...deutschlandGPTOperations,
			...deutschlandGPTFields,
		],
	};
}
