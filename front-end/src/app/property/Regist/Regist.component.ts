import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-Regist',
  templateUrl: './Regist.component.html',
  styleUrls: ['./Regist.component.css']
})
export class RegistComponent implements OnInit {
  regestrationform: FormGroup;
  user: any = {};

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.regestrationform = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      passowrd: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      repassword: new FormControl(null, Validators.required),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(11)])
    }, this.passwordcheker);

  }
  createregistform(){
    this.regestrationform = this.fb.group({

    });
  }
  passwordcheker(fg: FormGroup): Validators{
    return fg.get('passowrd').value === fg.get('repassword').value ? null :
    {match: true};
  }

  onSubmit(){
    console.log(this.regestrationform);
    this.user = Object.assign(this.user, this.regestrationform.value);
    this.adduser(this.user);
    this.regestrationform.reset();
  }
   adduser(user){
    let users = [];
    if (localStorage.getItem('User'))
    {
      users = JSON.parse(localStorage.getItem('User'));
      users = [user, ...users];
    }
    else
    {
      users = [user];
    }
    localStorage.setItem('User', JSON.stringify(users));
  }
}
