import { HunYuan } from '../dist';

let client: HunYuan;

beforeAll(() => {
  client = new HunYuan(process.env.HUNYUAN_API_KEY!);
});

test('HunYuan stream', async () => {
  const stream = await client.stream({
    model: 'hunyuan-turbo',
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
