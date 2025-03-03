import { OpenAI } from '../dist';

let client: OpenAI;

beforeAll(() => {
  client = new OpenAI(process.env.OPENAI_API_KEY!);
});

test('OpenAI text stream', async () => {
  const stream = await client.stream({
    model: 'gpt-4o-mini',
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
