import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class DeutschlandGPTApi implements ICredentialType {
	name = 'deutschlandGPTApi';
	displayName = 'Deutschland GPT API';

	documentationUrl = 'https://platform.deutschlandgpt.de/docs';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			required: true,
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '={{"Bearer " + $credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://platform.deutschlandgpt.de/api/v1',
			url: '/models',
		},
	};
}
