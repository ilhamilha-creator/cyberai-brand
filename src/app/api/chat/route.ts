import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const message = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20240620',
      max_tokens: 1024,
      messages: messages.map((msg: any) => ({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.content,
      })),
      system: `You are a CyberAI Task Automation Agent, specialized in cybersecurity and AI-powered assistance. 
      Your role is to help users with:
      - Security analysis and threat detection
      - Vulnerability assessment
      - Security best practices
      - Task automation for cybersecurity
      - Log analysis and monitoring
      
      Be professional, concise, and provide actionable insights. Always prioritize security and safety in your recommendations.`,
    });

    const responseText = message.content[0]?.type === 'text' ? message.content[0].text : '';

    return NextResponse.json({ response: responseText });
  } catch (error) {
    console.error('Claude API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}