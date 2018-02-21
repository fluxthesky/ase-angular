import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import {LoginserviceService} from '../loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


      accname = 'hello';
      accpassword = 'pw';


constructor(private messageService: MessageService , private loginserviceService: LoginserviceService) {



 }

 login(){

// call api here

  this.loginserviceService.setData(this.accname,this.accpassword);



 }


  ngOnInit() {

   }

}
