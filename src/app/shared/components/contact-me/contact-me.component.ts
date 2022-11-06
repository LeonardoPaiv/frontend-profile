import { Component, OnInit } from '@angular/core';
import  {  FormBuilder, FormGroup, Validators, }  from  '@angular/forms';
import { MailService } from 'src/app/services/mail.service';
import { EmailForm } from '../../../models/email-form';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  public display: boolean = false;

  public formEmail: FormGroup = this.formBuilder.group({
    name: ['', [Validators.minLength(1)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.minLength(1)]],
    text: ['', [Validators.minLength(1)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private mailService: MailService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  public openDialog() {
    this.display = true;
  }

  public sendEmail(mail: EmailForm) {
    this.mailService.postEmail(mail).subscribe({
      next: res => this.emailSuccess(),
      error: e => this.emailFail()
    });
    this.display = false
  }

  public emailFail() {
    this.toastr.error('problem with service', 'connection error')
  }

  public emailSuccess() {
    this.toastr.success('Email sended', 'Success')
  }

}
