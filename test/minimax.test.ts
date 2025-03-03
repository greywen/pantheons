import { MiniMax } from '../dist';

let client: MiniMax;

beforeAll(() => {
  client = new MiniMax(process.env.MINIMAX_API_KEY!);
});

test('MiniMax text stream', async () => {
  const stream = await client.stream({
    model: 'minimax-text-01',
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
