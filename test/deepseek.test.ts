import { DeepSeek } from '../dist';

let client: DeepSeek;

beforeAll(() => {
    client = new DeepSeek(process.env.DEEPSEEK_API_KEY!);
});

test('DeepSeek text stream', async () => {
    const stream = await client.stream({
        model: 'deepseek-chat',
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
