import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { mockLoan, mockNotice } from '@/lib/data';

export async function POST(request: Request) {
  const { question } = await request.json();

  if (!question) {
    return new Response('Question is required', { status: 400 });
  }

  // Build context from mock data
  const context = `
You are Clarity, an AI assistant for loan servicing. You are helping a borrower named Maya Thompson understand her loan and recent changes.

Current Loan Information:
- Loan ID: ${mockLoan.id}
- Borrower: ${mockLoan.borrowerName}
- Address: ${mockLoan.address}, ${mockLoan.city}, ${mockLoan.state} ${mockLoan.zip}
- Principal Balance: $${mockLoan.principalBalance.toLocaleString()}
- Interest Rate: ${mockLoan.interestRate}%
- Current Monthly Payment: $${mockLoan.currentPayment} (effective ${mockLoan.effectiveDate})
- Previous Monthly Payment: $${mockLoan.previousPayment}
- Next Due Date: ${mockLoan.nextDueDate}
- Escrow Balance: $${mockLoan.escrowBalance}
- Escrow Shortage: $${mockLoan.escrowShortage}

Recent Notice - ${mockNotice.title} (${mockNotice.id}):
${mockNotice.originalContent}

Payment Changes:
${mockNotice.changeItems.map((item) => `- ${item.label}: +$${item.monthlyImpact}/month`).join('\n')}

Total Payment Increase: $${mockNotice.paymentIncrease}/month
Effective Date: ${mockNotice.effectiveDate}

Guidelines:
1. Provide clear, concise answers about the borrower's loan
2. Use specific numbers from the loan data when possible
3. Reference the notice and changes when relevant
4. Be empathetic and helpful
5. Keep answers to 2-3 sentences unless more detail is needed
6. Do not make up information not in the provided data
`;

  const systemPrompt = `${context}

Borrower Question: "${question}"

Provide a helpful answer that directly addresses the question using the loan information provided. Focus on being clear and reassuring.`;

  const result = streamText({
    model: openai('gpt-4o-mini'),
    system: systemPrompt,
    prompt: `Answer the borrower's question: "${question}"`,
  });

  return result.toTextStreamResponse();
}
