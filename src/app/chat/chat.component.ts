import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewChecked, OnChanges } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import * as io from 'socket.io-client';
import { CHAT_SERVER_URL } from '../../config/config';
import { Message } from '../models/message';
import { Name } from '../models/name';

/** Chat Component */
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked, OnChanges {
  socket;
  @Input() hero;
  messages = [];
  message: Message;
  names = new Map<string, Name>();
  @ViewChild('messagesContainer') private messagesContainer: ElementRef;

  constructor(private authenticationService: AuthenticationService) {
    this.message = new Message(); 
    this.socket = io.connect(CHAT_SERVER_URL, {query: 'auth_token=' + this.authenticationService.authenticatedUser.token.substring(3)});
  }

  ngOnInit() {
    this.socket.on('connect', () => {
      this.socket.emit('subscribe', this.hero.id);
    });

    this.socket.on('new message', (message) => {
      this.pushMessage(message);
    });
  }

  ngAfterViewChecked() {        
      this.scrollToBottom();        
  } 

  ngOnChanges() {
    this.initialize();
  }

  initialize() {
    this.resetMessage();
    
    this.socket.emit('retrieve messages', this.hero.id, (messages) => {
      messages.forEach((message) => {
        this.pushMessage(message);
      });
    });
  }

  getClass(message){
    let messageClass = '';

    if(message.type === 'message') {
      messageClass += 'message';

      if(message.from == this.user._id) {
        messageClass += ' right';
      } else {
        messageClass += ' left';
      }
    } else if (message.type === 'notification') {
      messageClass += 'notification';
    }

    return messageClass;
  }

  sendMessage() {
    if(this.message.message) {
      this.socket.emit('new message', this.message, (message) => {
        this.pushMessage(this.message);
        this.resetMessage();
      });
    }
  }

  resetMessage() {
    this.message = new Message();
    this.message.from = this.user._id;
    this.message.heroId = this.hero.id;
  }

  pushMessage(message) {
    if(message.from && message.from != this.user._id) {
      this.socket.emit('get user info', message.from, (userInfo) => {
        this.names.set(message.from, userInfo.name);
      });
    }

    this.messages.push(message);
    this.scrollToBottom();
  }

  getName(message) {
    if(message.from == this.user._id) {
      return 'you';
    } else {
      return this.names.get(message.from) ? this.names.get(message.from).firstName + ' ' + this.names.get(message.from).lastName : message.from._id;
    }
  }

  scrollToBottom() {
    this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
  }

  get user() {
    return this.authenticationService.authenticatedUser.userInfo;
  }

}
