export enum BillerSource {
  'BIZZDESK',
  'INTERSWITCH',
  'PAYSTACK',
  'UNIFIED_PAYMENTS',
  'REMITA',
}

export interface Biller {
  billerId?: any;
  sourceItemId?: any;
  billerCode?: string;
  billerName: string;
  billerUrlSlug: string;
  source: BillerSource;
  active?: boolean;
  billerCategoryId: any; //Mostly number
  billerCategoryName: string;
  customerField1: string;
  customerField2?: string;
  narration?: string;
  surcharge?: number;
  currencyCode: number;
  quicktellerSiteUrlName?: string;
  amountType: string;
  currencySymbol: string;
  logoUrl: string;
  createdDate: Date;
  updatedDate: Date;
  createdBy?: string;
  updatedBy?: string;
}

export interface BillerCategory {
  billerCategoryid?: any;
  sourceItemId: any;
  categoryCode?: string;
  categoryName: string;
  source: BillerSource;
  active: boolean;
  categoryDescription: string;
  createdDate: Date;
  updatedDate: Date;
  createdBy?: string;
  updatedBy?: string;
}
