import { MagmaAgent } from '@pompeii-labs/magma';
import { tool, toolparam } from '@pompeii-labs/magma/decorators';
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

    @tool({ description: 'Get the weather in a given city' })
    @toolparam({ key: 'city', description: 'The city to get the weather for', type: 'string', required: true })
    async getWeather(city: string) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}`);
        const data = await response.json();

        return data;
    }
}
