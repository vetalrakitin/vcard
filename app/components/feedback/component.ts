import {Component} from '@angular/core';

import {FeedbackService, FeedbackResult} from '../../services/feedback.ts';
import from 'rxjs/Rx';

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
               (feedback: FeedbackResult) => this.feedback = feedback,
            	error => console.error(error),
            	() => console.log('Response is retrieved')
            );
  	}

	get diagnostic() { return JSON.stringify(this.model); }
}


