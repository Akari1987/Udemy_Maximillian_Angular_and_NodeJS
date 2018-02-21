import { Component } from '@angular/core';

import { Message } from './messages/message.model';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
})
export class AppComponent {
    messages: Message[] = [
        new Message('Some message', 'Max'),
        new Message('Something else', 'Max')
    ];
}
