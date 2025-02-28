import { Deepseek } from '../dist';

let client: Deepseek;

beforeAll(() => {
    client = new Deepseek(process.env.DEEPSEEK_API_KEY!);
});

test('Deepseek text stream', async () => {
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
