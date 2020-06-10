import {Injectable} from '@angular/core';
import {ApiHttpService} from 'ngx-api-utils';
import {HttpParams} from '@angular/common/http';
import {KycInfo} from '../models/kyc/kyc-info.interface';
import {KycInfoHistory} from '../models/kyc/kyc-info-history.interface';
import {UpdateKycInfoRequest} from '../models/kyc/update-kyc-info-request.interface';

@Injectable({
  providedIn: 'root',
})
export class KycService {
  apiPath = '/api/Kyc';
  constructor(private apiHttp: ApiHttpService) {}

  getById(id: string) {
    const params = new HttpParams().set('partnerId', encodeURIComponent(id));
    return this.apiHttp.get<KycInfo>(this.apiPath + '/current', {params: params});
  }

  getHistory(id: string) {
    const params = new HttpParams().set('partnerId', encodeURIComponent(id));
    return this.apiHttp.get<KycInfoHistory[]>(this.apiPath + '/history', {params: params});
  }

  changeKycStatus(model: UpdateKycInfoRequest) {
    return this.apiHttp.put<any>(this.apiPath, model);
  }
}
