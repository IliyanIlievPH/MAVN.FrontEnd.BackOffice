export interface Transaction {
  Id: string;
  TransactionType: string;
  SenderName: string;
  SenderEmail: string;
  ReceiverName: string;
  ReceiverEmail: string;
  Vertical: string;
  Amount: string;
  Currency: string;
  Timestamp: Date;
  CampaignName: string;
  Info: string;
  // Status: string;
  // TransactionCategory: string;
  // LocationInfo: string;
  // LocationExternalId: string;
  // LocationIntegrationCode: string;
}
