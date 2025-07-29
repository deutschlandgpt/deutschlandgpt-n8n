import { INodeProperties } from 'n8n-workflow';

export const deutschlandGPTOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['model'],
			},
		},
		options: [
			{
				name: 'Fetch Models',
				value: 'fetch_models',
				description: 'Fetch Models from DeutschlandGPT',
				action: 'Fetch models',
				routing: {
					request: {
						method: 'GET',
						url: 'v1/models',
					},
				},
			},
		],
		default: 'fetch_models',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['chat'],
			},
		},
		options: [
			{
				name: 'Send Chat Message',
				value: 'send_chat_message',
				description: 'Send a message to the chat',
				action: 'Send chat message',
				routing: {
					request: {
						method: 'POST',
						url: 'v1/chat/completions',
						json: true,
						body: {
							model: '={{$parameter["model"]}}',
							messages: [
								{
									role: 'user',
									content: '={{$parameter["user_message"]}}',
								},
							],
						},
					},
				},
			},
		],
		default: 'send_chat_message',
	},
];

const chatOperation: INodeProperties[] = [
	{
		displayName: 'Model',
		name: 'model',
		default: 'claude-4-sonnet',
		description: 'Select the model to use',
		displayOptions: {
			show: {
				resource: ['chat'],
				operation: ['send_chat_message'],
			},
		},
		type: 'string',
		required: true,
	},
	{
		displayName: 'User Message',
		name: 'user_message',
		default: 'Hello, how are you?',
		description: 'The message to send in the chat',
		displayOptions: {
			show: {
				resource: ['chat'],
				operation: ['send_chat_message'],
			},
		},
		type: 'string',
		required: true,
	},
];

export const deutschlandGPTFields: INodeProperties[] = [...chatOperation];
