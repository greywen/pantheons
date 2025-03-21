import { DashScope } from '../dist';

let client: DashScope;

beforeAll(() => {
  client = new DashScope(process.env.DASHSCOPE_API_KEY!);
});

test('DashScope text stream', async () => {
  const stream = await client.stream({
    model: 'qwen-plus',
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
