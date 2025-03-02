import { LingYiWanWu } from '../dist';

let client: LingYiWanWu;

beforeAll(() => {
    client = new LingYiWanWu(process.env.LINGYIWANWU_API_KEY!);
});

test('LingYiWanWu text stream', async () => {
    const stream = await client.stream({
        model: 'yi-large',
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
