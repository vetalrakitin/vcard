import {Component} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {FeedbackService, FeedbackResult} from '../../services/feedback.ts';
import 'rxjs/Rx';

@Component({
    selector: 'feedback',
    templateUrl: 'app/components/feedback/template.html',
    styleUrls: ['app/components/feedback/style.css'],
    providers: [FeedbackService]
})

export class FeedbackComponent {

	constructor (private feedbackService: FeedbackService) {}

	feedback: FeedbackResult;
	
	model = {name: "", email: "", message: ""};

	submitted = false;
  	
  	onSubmit() { 
  		this.feedbackService.saveFeedback(this.model)
            .subscribe(
               res => console.error(res),
            	error => console.error(error),
            	() => console.log('Response is retrieved')
            );
  	}

	get diagnostic() { return JSON.stringify(this.model); }
}


