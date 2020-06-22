import { BillerSource } from '../billers/biller';

export interface PaymentValidationRequest {
  customerId: string;
  paymentCode: string;
  billerSource: BillerSource;
}

export interface PaymentValidationResponse {
  paymentCode?: string;
  customerId: any;
  responseCode: any;
  fullName: string;
  anount: number;
  amountType: any;
  amountTypeDescription: string;
}

export interface PaymentAdvice {
  paymentAdviceId: any;
  invoiceCode: string;
  paymentCode: string;
  transactionReference: string;
  customerId?: any;
  billerId: any;
  billerName: string;
  billerPaymentItemId: any;
  billerPaymentItem: string;
  emailAddress: string;
  phoneNumber?: string;
  amount: number;
  paymentFee?: number;
  requestReference: string;
  resolved: boolean;
  sourceNotified: boolean;
  billerSource: BillerSource;
  resolvedRequestreference?: string;
  createdDate: Date;
  updatedDate: Date;
  createdBy?: string;
  updatedBy?: string;
}

export interface BillPaymentAdvice {
  TerminalId: string;
  paymentCode: string;
  customerId?: any;
  customerMobile?: string;
  customerEmailAddress: string;
  amount: number;
  requestReference: string;
}

export interface InterswitchBillPaymentResponse {
  TransactionReference: string;
  MiscData: string;
  PIN: string;
  ResponseCodeGrouping: string;
}

export interface TransactionQuery {
  terminalId: string;
  requestreference: string;
  billerSource: BillerSource;
}

export interface Invoice {
  invoiceId?: any;
  invoiceCode?: string;
  customerEmailAddress: string;
  paymentCode: string;
  billerId: any;
  customerId?: any;
  customerUserCode?: any;
  paymentItemAmount: number;
  paymentFee: number;
  billerSource: BillerSource;
  createdDate: Date;
  updatedDate: Date;
  createdBy?: string;
  updatedBy?: string;
}

export interface PaymentItem {
  paymentItemId?: any;
  transactionreference: string;
  sourcePaymentItemId?: any;
  source: BillerSource;
  isAmountFixed: boolean;
  paymentItemName: string;
  categoryId: any;
  billerId: any;
  paymentItemAmount: number;
  paymentItemFee: number;
  paymentItemCurrencyCode: string;
  itemCurrencySymbol: string;
  paymentItemCurrencySymbol?: string;
  paymentItemSortOrer?: string;
  paymentItemPictureId?: any;
  paydirectItemCode?: any;
  createdDate: Date;
  updatedDate: Date;
  createdBy?: string;
  updatedBy?: string;
}
