import { XAI } from '../dist';

let client: XAI;

beforeAll(() => {
  client = new XAI(process.env.XAI_API_KEY!);
});

test('XAI text stream', async () => {
  const stream = await client.stream({
    model: 'grok-2-latest',
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
