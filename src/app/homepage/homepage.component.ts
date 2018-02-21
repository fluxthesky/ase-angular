import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import {LoginserviceService} from '../loginservice.service';
import { MessageService } from '../message.service';





@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  private accname;
  private accpassword;
  private fail = true;

  constructor(private messageService: MessageService, private LoginserviceService : LoginserviceService) {

    this.accname = this.LoginserviceService.name ;
    this.accpassword = this.LoginserviceService.pw;

    if(this.accname == "test" && this.accpassword == "123"){
      this.fail = false;

    }



   }

  ngOnInit() {
  }




}
