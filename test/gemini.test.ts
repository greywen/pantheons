import { Gemini } from '../dist';

let client: Gemini;

beforeAll(() => {
    client = new Gemini(process.env.GEMINI_API_KEY!);
});

test('Gemini text stream', async () => {
    const stream = await client.stream({
        model: 'gemini-2.0-flash',
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
