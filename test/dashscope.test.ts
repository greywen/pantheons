import { DashScope } from '../dist';

let dashScopeClient: DashScope;

beforeAll(() => {
  dashScopeClient = new DashScope(process.env.DASHSCOPE_API_KEY!);
});

test('DashScope stream', async () => {
  const stream = await dashScopeClient.stream({
    model: 'qwen-plus',
    stream: true,
    messages: [{ role: 'user', content: 'Hi!' }],
  });

  let actual = '';
  for await (const chunk of stream) {
    actual += chunk.choices[0].delta?.content;
  }

  expect(actual).not.toBe('');
});
