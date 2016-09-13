import {Inject, Injectable, OpaqueToken} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

export const FEEDBACK_URL_BASE = new OpaqueToken('FeedbackUrlBase');

export interface FeedbackResult 
{
  result: string;
}

@Injectable()
export class FeedbackService {
  res: FeedbackResult;
  constructor(
      private http: Http,
      @Inject(FEEDBACK_URL_BASE) private urlBase: string
      ){}

  saveFeedback(model): Observable<FeedbackResult> {
    let body = JSON.stringify( model);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
        .post(this.urlBase, body, options)
        .share();
  }

  private _hasResult(data): boolean {
    return data['cod'] !== '404' && data.result.length;
  }

  private _parseData(data): FeedbackResult {
    return {
      result: data.result || "",
    };
  }
}
