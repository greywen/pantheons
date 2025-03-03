**[English](README_EN.md)** | **简体中文**

# Pantheons(众神殿)

`Pantheons` 是一个使用 TypeScript 基于 OpenAI Node.js SDK 构建的统一对话库。它提供了一个无缝的接口，可以与多个大型语言模型（LLMs）进行交互，如 OpenAI、DeepSeek、DashScope、Gemini 等。

`该库的灵感来源于神话中的众神殿，每个神明代表着独特的力量和属性，Pantheons将各种大模型统一在一个库中。`

## 支持的大模型

- [OpenAI](https://platform.openai.com/docs/api-reference/introduction)
- [Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai)
- [通义千问(DashScope)](https://help.aliyun.com/zh/model-studio/developer-reference)
- [腾讯混元(HunYuan)](https://cloud.tencent.com/document/product/1729/101839)
- [月之暗面(Moonshot)](https://platform.moonshot.cn/docs/intro)
- [硅基流动(SiliconFlow)](https://docs.siliconflow.cn/cn/userguide/introduction)
- [DeepSeek](https://api-docs.deepseek.com/)
- [文心一言(QianFan)](https://cloud.baidu.com/doc/WENXINWORKSHOP/s/7ltgucw50)
- [Gemini](https://ai.google.dev/gemini-api/docs)
- [Ollama](https://github.com/ollama/ollama/blob/main/docs/api.md)
- [智谱清言(ZhiPu)](https://open.bigmodel.cn/dev/api/normal-model/glm-4)
- [XAI](https://docs.x.ai/docs/overview)
- [零一万物(LingYiWanWu)](https://platform.lingyiwanwu.com/docs/api-reference)
- [MiniMax](https://platform.minimaxi.com/document/Fast%20access)
- [讯飞星火(Spark)](https://console.xfyun.cn/services/sparkapiCenter)

## 安装方法

```
npm install pantheons
bunx jsr add @greywen/pantheons
```

## 使用方法

#### Nodejs

```typescript
import { DeepSeek } from 'pantheons';

(async () => {
  const client = new DeepSeek('Your key');
  const stream = await client.stream({
    model: 'deepseek-chat',
    stream: true,
    messages: [{ role: 'user', content: 'Hi!' }],
  });

  let result = '';
  for await (const chunk of stream) {
    result += chunk.choices[0].delta?.content;
  }

  console.log(result);
})();
```

#### Bun

```typescript
import { DeepSeek } from '@greywen/pantheons';

const client = new DeepSeek('Your key');
const stream = await client.stream({
  model: 'deepseek-chat',
  stream: true,
  messages: [{ role: 'user', content: 'Hi!' }],
});

let result = '';
for await (const chunk of stream) {
  result += chunk.choices[0].delta?.content;
}

console.log(result);
```

#### 多模型

```typescript
import { DashScope, Moonshot } from 'pantheons';

const dashScopeClient = new DashScope('Your key');
const moonshotClient = new Moonshot('Your key');

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

console.log(dashScopeOutput, moonshotOutput);
```

## 许可证

Pantheons 遵循 MIT 许可证。 请参阅[LICENSE.txt](LICENSE.txt)文件以获取更多信息。
