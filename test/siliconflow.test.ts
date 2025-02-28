import { Siliconflow } from '../dist';

let client: Siliconflow;

beforeAll(() => {
    client = new Siliconflow(process.env.SILICONFLOW_API_KEY!);
});

test('Siliconflow text stream', async () => {
    const stream = await client.stream({
        model: 'deepseek-ai/DeepSeek-V3',
        stream: true,
        messages: [{ role: 'user', content: 'Hi!' }],
    });

    let actual = '';
    for await (const chunk of stream) {
        actual += chunk.choices[0].delta?.content;
    }

    console.log(actual);
    expect(actual).not.toBe('');
});
