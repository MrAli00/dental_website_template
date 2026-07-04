import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { clinicConfig } from '@/config/clinic';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai('gpt-4o-mini'),
    system: clinicConfig.ai.systemPrompt,
    messages,
  });

  return result.toDataStreamResponse();
}