import { Component, OnInit } from '@angular/core';
import  {  FormBuilder, FormGroup, Validators, }  from  '@angular/forms';
import { EmailForm } from 'src/app/models/email-form';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  public openDialog() {
    this.display = true;
  }


  public formEmail: FormGroup = this.formBuilder.group({
    name: ['', [Validators.minLength(1)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.minLength(1)]],
    message: ['', [Validators.minLength(1)]],
  })

  public display: boolean = false

}
