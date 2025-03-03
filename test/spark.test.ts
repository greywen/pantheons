import { Spark } from '../dist';

let client: Spark;

beforeAll(() => {
  client = new Spark(process.env.SPARK_API_KEY!);
});

test('Spark text stream', async () => {
  const stream = await client.stream({
    model: '4.0Ultra',
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
