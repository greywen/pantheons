**[简体中文](README_CN.md)** | **English**

# Pantheons
`Pantheons.js` is a unified conversational library built on top of the OpenAI Node.js SDK. It provides a seamless interface to interact with multiple large language models (LLMs) like OpenAI, Deepseek, DashScope, Gemini and more. Inspired by the mythological pantheon of gods—each representing unique powers and attributes—this library unifies various models under a single.

## Supported large models
- [OpenAI](https://platform.openai.com/docs/api-reference/introduction)
- [Aliyun DashScope](https://help.aliyun.com/zh/model-studio/developer-reference)
- [Tencent HunYuan](https://cloud.tencent.com/document/product/1729/101839)
- [Moonshot](https://platform.moonshot.cn/docs/intro)
- [SiliconFlow](https://docs.siliconflow.cn/cn/userguide/introduction)
- [DeepSeek](https://api-docs.deepseek.com/)
- [Wenxin Qianfan](https://cloud.baidu.com/doc/WENXINWORKSHOP/s/7ltgucw50)
- [Gemini](https://ai.google.dev/gemini-api/docs)
- [Ollama](https://github.com/ollama/ollama/blob/main/docs/api.md)
- [ZhiPu](https://open.bigmodel.cn/dev/api/normal-model/glm-4)
- [XAI](https://docs.x.ai/docs/overview)
- [YiLarge](https://platform.lingyiwanwu.com/docs/api-reference)

## Installation

```
npm install pantheons
bunx jsr add @greywen/pantheons
```

## Usages

#### Nodejs

```typescript
import { Deepseek } from 'pantheons';

(async () => {
    const client = new Deepseek('Your key');
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
})()
```

#### Bun

```typescript
import { Deepseek } from "@greywen/pantheons";


const client = new Deepseek('Your key');
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