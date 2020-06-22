export interface Bank {
  id?: any;
  cbnCode: string;
  bankName: string;
  bankCode: string;
}

export interface BankCustomer {
  bankCode: string;
  accountId: string;
}

export interface TransferRequest {
  transferCode: string;
  referenceCode: string;
  senderName: string;
  senderEmailAddress: string;
  senderPhoneNumber?: string;
  beneficiaryPhoneNumber?: string;
  beneficiaryAccountName: string;
  beneficiaryAccountNumber: string;
  beneficiaryAccountType: string;
  beneficiaryBankCode: string;
  beneficiaryBankName: string;
  customerUserCode?: string;
  amount: number;
  executingEntity: string;
  resolved: boolean;
  resolutionCode?: string;
  createdDate: Date;
  updatedDate: Date;
  createdBy?: string;
  updatedBy?: string;
}
}

export interface TransferBeneficiary {
  lastname: string;
  othernames: string;
  email: string;
  phone: string;
}

export interface TransferSender {
  lastname: string;
  othernames: string;
  email: string;
  phone: string;
}

export interface TransferInitiation {
  amount: number;
  channel: any;
  currencyCode: string;
  paymentMethodCode: string;
}

export interface TransferTermination {
  accountReceivable: any;
  amount: number;
  countryCode: string;
  currencyCode: string;
  entityCode: string;
  paymentMethodCode: string;
}

export interface TransferTerminationAccount {
  accountNumber: string;
  accountType: string;
}

export interface TransferAdvice {
  mac: string;
  beneficiary: TransferBeneficiary;
  initiatingEntityCode: string;
  initiation: TransferInitiation;
  sender: TransferSender;
  termination: TransferTermination;
  transferCode: string;
}
