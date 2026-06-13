import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovDgecerttnApi implements ICredentialType {
        name = 'N8nDevApisetuGovDgecerttnApi';

        displayName = 'Apisetu Gov Dgecerttn API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovDgecerttn/apisetu-gov-dgecerttn.svg', dark: 'file:../nodes/ApisetuGovDgecerttn/apisetu-gov-dgecerttn.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/dgecerttn/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/dgecerttn/v3',
                        description: 'The base URL of your Apisetu Gov Dgecerttn API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
