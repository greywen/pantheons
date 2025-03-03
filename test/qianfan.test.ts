import { Qianfan } from '../dist';

let client: Qianfan;

beforeAll(() => {
  client = new Qianfan(process.env.QIANFAN_API_KEY!);
});

test('Qianfan text stream', async () => {
  const stream = await client.stream({
    model: 'ernie-4.0-turbo-8k-latest',
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
