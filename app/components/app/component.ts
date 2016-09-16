import {Component} from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'app/components/app/template.html',
    styleUrls: ['app/components/app/style.css']
})
export class AppComponent {
	menu: []
	constructor ()
	{
		this.menu = [
			{title: 'Home', link: '/'},
			{title: 'About', link: '/about/'},
			{title: 'Projects', link: '/projects/'},
			{title: 'Feedback', link: '/feedback/'},
			{title: 'Contacts', link: '/contacts/'},
		];
	}
}