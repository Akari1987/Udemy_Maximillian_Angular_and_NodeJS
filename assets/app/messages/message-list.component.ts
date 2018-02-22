import { Component } from "@angular/core";

import { Message } from "./message.model";
import { MessageService } from "./message.service"

@Component({
  selector: 'app-message-list',
  template: `
    <div class="col-md-8 col-md-offset-2">
        <app-message
            [message]="message"
            (editClicked)="message.content = $event"
            *ngFor="let message of messages"></app-message>
    </div>
  `,
  providers: [MessageService]
})

export class MessageListComponent implements OnInit {
    messages: Message[];

    constructor(private MessageService: MessageService) {}

    ngOnInit() {
        this.messages = this.MessageService.getMessages();
    }
}
