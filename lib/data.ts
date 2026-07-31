import { Loan, Notice, SuggestedQuestion, HistoryEvent } from './types';

export const mockLoan: Loan = {
  id: 'LN-20481',
  principalBalance: 286420,
  interestRate: 4.25,
  currentPayment: 1982,
  previousPayment: 1895,
  nextDueDate: 'September 1, 2026',
  effectiveDate: 'September 1, 2026',
  escrowBalance: 2460,
  escrowShortage: 264,
  borrowerName: 'Maya Thompson',
  address: '1842 Harbor Ridge Drive',
  city: 'San Diego',
  state: 'CA',
  zip: '92109',
  type: '30-Year Fixed Mortgage',
  status: 'Current',
};

export const mockNotice: Notice = {
  id: 'NT-7821',
  loanId: 'LN-20481',
  type: 'Annual Escrow Analysis',
  title: 'Annual Escrow Analysis',
  originalContent:
    'Your annual escrow analysis is complete. Property taxes and homeowners insurance increased. Your monthly payment will change from $1,895 to $1,982 effective September 1, 2026. The new payment includes a $22 monthly escrow-shortage repayment.',
  monthlyPayment: 1982,
  paymentIncrease: 87,
  effectiveDate: 'September 1, 2026',
  changeItems: [
    { label: 'Tax adjustment', monthlyImpact: 42, source: 'NT-7821' },
    { label: 'Insurance adjustment', monthlyImpact: 23, source: 'NT-7821' },
    { label: 'Shortage repayment', monthlyImpact: 22, source: 'NT-7821' },
  ],
  issuedDate: 'July 18, 2026',
  readOnly: false,
};

export const suggestedQuestions: SuggestedQuestion[] = [
  {
    id: 'q1',
    text: 'Why did my payment increase?',
    category: 'payment_change',
  },
  {
    id: 'q2',
    text: 'What is an escrow shortage?',
    category: 'escrow',
  },
  {
    id: 'q3',
    text: 'When does the new payment begin?',
    category: 'payment_change',
  },
  {
    id: 'q4',
    text: 'Can I pay the shortage at once?',
    category: 'escrow',
  },
];

export const mockHistory: HistoryEvent[] = [
  {
    date: 'July 18, 2026',
    type: 'notice',
    description: 'Annual Escrow Analysis issued.',
    reference: 'NT-7821',
  },
  {
    date: 'July 19, 2026',
    type: 'question',
    description: 'Asked Clarity: Why did my payment increase?',
  },
  {
    date: 'July 19, 2026',
    type: 'outcome',
    description: 'Outcome: explanation viewed',
  },
  {
    date: 'July 20, 2026',
    type: 'escalation',
    description: 'Support request created',
    reference: 'CL-1047',
  },
];
