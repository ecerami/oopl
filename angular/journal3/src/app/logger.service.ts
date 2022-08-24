import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  log_messages: string[] = [];

  log(message: string) {
    this.log_messages.push(message);
  }

  clear() {
    this.log_messages = [];
  }
}
