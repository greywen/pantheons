import { ZhiPu } from '../dist';

let client: ZhiPu;

beforeAll(() => {
    client = new ZhiPu(process.env.ZHIPU_API_KEY!);
});

test('ZhiPu text stream', async () => {
    const stream = await client.stream({
        model: 'glm-zero-preview',
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
