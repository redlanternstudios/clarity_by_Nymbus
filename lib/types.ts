export interface Loan {
  id: string;
  principalBalance: number;
  interestRate: number;
  currentPayment: number;
  previousPayment: number;
  nextDueDate: string;
  effectiveDate: string;
  escrowBalance: number;
  escrowShortage: number;
  borrowerName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
}

export interface Notice {
  id: string;
  loanId: string;
  type: string;
  title: string;
  originalContent: string;
  monthlyPayment: number;
  paymentIncrease: number;
  effectiveDate: string;
  changeItems: ChangeItem[];
  issuedDate: string;
  readOnly: boolean;
}

export interface ChangeItem {
  label: string;
  monthlyImpact: number;
  source: string;
}

export interface SuggestedQuestion {
  id: string;
  text: string;
  category: string;
}

export interface EscalationRequest {
  id: string;
  loanId: string;
  reason: string;
  note: string;
  destination: string;
  createdAt: string;
  status: "pending" | "submitted" | "resolved";
}

export interface HistoryEvent {
  date: string;
  type: string;
  description: string;
  reference?: string;
}

export interface AskClarityResponse {
  question: string;
  answer: string;
  sources: Array<{
    source: string;
    reference: string;
  }>;
  confidence: number;
}
