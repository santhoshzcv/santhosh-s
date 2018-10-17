import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, FormBuilder, Validators } from '@angular/forms';
import { RegisterModel } from '../models/register.model';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthServiceService } from '../AuthService/auth-service.service';
import swal from 'sweetalert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  user: RegisterModel = new RegisterModel();
  registerForm: FormGroup;
  data:any;


  constructor(private fb: FormBuilder, private authservice: AuthServiceService,private router:Router) {
    this.registerForm = this.fb.group({
      'firstname': [this.user.firstname, [Validators.required, Validators.pattern('^[a-zA-Z]+[a-zA-Z ]+$')]],
      'lastname': [this.user.lastname, [Validators.required, Validators.pattern('^[a-zA-Z]+[a-zA-Z ]*$')]],
      'email': [this.user.email, [Validators.required, Validators.email]],
      'dob': [this.user.dob, [Validators.required]],
      'phonenumber': [this.user.phonenumber, [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      'password': [this.user.password, [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
      'gender': [this.user.gender, [Validators.required]],
      'state': [this.user.state, [Validators.required]]
    });

  }

  states: string[] = [
    ' Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarati', 'Haryana',
    'Himachal Pradesh', 'Jammu & Kashmir	Jammu', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya',
    'Mizoram', 'Nagaland', 'Orissa', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];

  ngOnInit() {

  }
  onregisterSubmit() {
    console.log("santhosh")
    console.log(this.registerForm.value);
    this.authservice.registerUser(this.registerForm.value).subscribe(
      (res) => {
        debugger;
        this.data=res['token']
        console.log(this.data);
        //localStorage.setItem('token',this.data);
        swal("Great", "You registered sucessfully!", "success");
        this.router.navigate(['user/login'])
      }

    )
    this.registerForm.reset();
  }

}
/** Error when invalid control is dirty or touched*/
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));

  }
}