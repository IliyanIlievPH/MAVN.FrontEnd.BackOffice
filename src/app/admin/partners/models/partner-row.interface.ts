import {BusinessVerticalType} from './business-vertical.enum';
import {KycStatus} from './kyc/kyc-status.enum';

export interface PartnerRowResponse {
  Id: string;
  Name: string;
  AmountInTokens: string;
  AmountInCurrency: number;
  UseGlobalCurrencyRate: boolean;
  CreatedAt: Date;
  CreatedBy: string;
  BusinessVertical?: BusinessVerticalType;
  KycStatus: KycStatus;
  // additional fields for representation
  IsHidden: boolean;
  Currency: number;
  // load additionally
  ProvidersSupportedCurrencies: string[];
  CountryIso3Code: string;
}
