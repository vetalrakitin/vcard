import {Inject, Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';



export interface FeedbackResult 
{
  result: string;
}

@Injectable()
export class FeedbackService {
  res: FeedbackResult;
  constructor(
      private http: Http
      ){

  }

  saveFeedback(model): Observable {
    let body = JSON.stringify( model);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
        .post("/json/feedback", body, options);
        
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
