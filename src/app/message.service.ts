import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  console(message: string) {
    console.log(message);
  }
  clear() {
    this.messages = [];
  }
}
