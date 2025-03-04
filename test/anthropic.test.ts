import { Anthropic } from '../dist';

let client: Anthropic;

beforeAll(() => {
  client = new Anthropic(process.env.ANTHROPIC_API_KEY!);
});

test('Anthropic text stream', async () => {
  const stream = await client.stream({
    model: 'claude-3-7-sonnet-latest',
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
