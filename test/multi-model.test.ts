import { DashScope, Moonshot } from '../dist';

let dashScopeClient: DashScope;
let moonshotClient: Moonshot;

beforeAll(() => {
  dashScopeClient = new DashScope(process.env.DASHSCOPE_API_KEY!);
  moonshotClient = new Moonshot(process.env.MOONSHOT_API_KEY!);
});

test('Multi-model text stream', async () => {
  const dashScopeStream = await dashScopeClient.stream({
    model: 'qwen-max',
    stream: true,
    messages: [{ role: 'user', content: 'Hi!' }],
  });

  const moonshotStream = await moonshotClient.stream({
    model: 'kimi-latest',
    stream: true,
    messages: [{ role: 'user', content: 'Hi!' }],
  });

  async function readStream(stream: AsyncIterable<any>, output: string[]) {
    for await (const chunk of stream) {
      const content = chunk.choices[0].delta?.content || '';
      output.push(content);
    }
  }

  const dashScopeOutput: string[] = [];
  const moonshotOutput: string[] = [];

  await Promise.all([
    readStream(dashScopeStream, dashScopeOutput),
    readStream(moonshotStream, moonshotOutput),
  ]);

  expect(dashScopeOutput.join('')).not.toBe('');
  expect(moonshotOutput.join('')).not.toBe('');
});
