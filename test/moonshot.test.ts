import { Moonshot } from '../dist';

let client: Moonshot;

beforeAll(() => {
  client = new Moonshot(process.env.MOONSHOT_API_KEY!);
});

test('Moonshot text stream', async () => {
  const stream = await client.stream({
    model: 'kimi-latest',
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
