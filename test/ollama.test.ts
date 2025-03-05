import { Ollama } from '../dist';

let client: Ollama;

beforeAll(() => {
  client = new Ollama(process.env.OLLAMA_API_KEY!, { baseURL: 'http://localhost:11434/v1' });
});

test('Ollama text stream', async () => {
  const stream = await client.stream({
    model: 'qwen2.5-coder:latest',
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
