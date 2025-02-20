import { MagmaAgent } from '@pompeii-labs/magma';
import { MagmaSystemMessage } from '@pompeii-labs/magma/types';

export default class HelloWorld extends MagmaAgent {
    constructor() {
        super({
            provider: 'openai',
            model: 'gpt-4o',
        });
    }

    getSystemPrompts(): MagmaSystemMessage[] {
        return [
            {
                role: 'system',
                content: `
                You are an AI agent that has a polite and friendly conversation with the user.
                Ask questions to learn more about them.
                `,
            },
        ];
    }
}
