// import { Component, OnInit } from '@angular/core';
// import { FormGroup , FormControl , FormArray , Validators } from '@angular/forms'

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent implements OnInit{
//   title = 'dynamic-form';
//   dynamicForm:FormGroup;

//   fields:any[] = [
//     {label:'First Name',name:'firstName',type:'text',required:true},
//     {label:'Last Name',name:'lastName',type:'text',required:true},
//     {label:'Email',name:'email',type:'email',required:true},
//     {label:'Number',name:'number',type:'number',required:true},
//     {label:'courses',name:'select',type:'select',required:true, options: ['Angular', 'React', 'bootstrap']},
//   ];
  
//   initialValues = {
//     firstName: 'vikrant'
//   };

//   ngOnInit(): void {
//    this.createForm();
//    this.setValue();
//   }


//   createForm() {
//     const group = {};

//     this.fields.forEach(field => {
//       group[field.name] = new FormControl('',field.required ? Validators.required : null);
//     });

//     this.dynamicForm = new FormGroup(group);
//   }

//   onSubmit(){
//     if(this.dynamicForm.valid){
//       console.log(this.dynamicForm.value);
//     }else{
//       console.log("form is invalid");
//     }
//   }

//   setValue(){
//     this.dynamicForm.patchValue(this.initialValues);
//   }

//   addValue(){
//    const newfield = {label:'Skills',name:'skills',type:'text',required:true};
//    this.fields.push(newfield);
//    this.createForm();
//   }
// }




import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dynamicForm: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    // Create a form group and initialize FormArray
    this.dynamicForm = new FormGroup({
      emails: new FormArray([new FormControl('', Validators.required)]), // FormArray with one initial email
    });
  }

  // Add a new email input field to the FormArray
  addEmail() {
    const emails = <FormArray>this.dynamicForm.get('emails');
    emails.push(new FormControl('', Validators.required)); // Add a new empty email field
  }

  // Remove an email input field from the FormArray by index
  removeEmail(index: number) {
    const emails = <FormArray>this.dynamicForm.get('emails');
    emails.removeAt(index); // Remove the email at the specified index
  }

  onSubmit() {
    if (this.dynamicForm.valid) {
      console.log(this.dynamicForm.value); // Output form values
    } else {
      console.log("Form is invalid!");
    }
  }
}
