import { QianFan } from '../dist';

let client: QianFan;

beforeAll(() => {
    client = new QianFan(process.env.QIANFAN_API_KEY!);
});

test('QianFan text stream', async () => {
    const stream = await client.stream({
        model: 'ernie-4.0-8k',
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
