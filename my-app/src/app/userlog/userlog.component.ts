import { Component, OnInit } from '@angular/core';
import {LogService} from './log.service';

@Component({
  selector: 'app-userlog',
  templateUrl: './userlog.component.html',
  providers:[LogService]
})
export class UserlogComponent implements OnInit {

  //Take Logservice dat to logService Property
  constructor(private logService:LogService) { }

  logMessage(textmsg:string){
      this.logService.log(textmsg);
  }
  logError(msg:string){
      this.logService.logError(msg);
  }
  ngOnInit() {
  }

}
