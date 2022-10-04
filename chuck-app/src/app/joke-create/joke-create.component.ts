import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-joke-create',
  templateUrl: './joke-create.component.html',
  styleUrls: ['./joke-create.component.scss']
})
export class JokeCreateComponent implements OnInit {

  joke: string = 'initial text';
  author: string = '';

  newReactiveJokeForm = new FormGroup({
    'joke': new FormControl('', [Validators.required, Validators.minLength(4)]),
    'author': new FormControl('', [Validators.required, this.customValidator()]),
    'rating': new FormControl(3)
  });

  constructor() { }

  ngOnInit(): void {
    // this.newReactiveJokeForm.controls.author.valueChanges.pipe(debounceTime(2000)).subscribe(value => console.log(value));
    // this.newReactiveJokeForm.controls.joke.statusChanges.subscribe(value => console.log(value));
    // this.newReactiveJokeForm.controls.joke.addValidators([]);
    this.newReactiveJokeForm.controls.joke.enable();
  }

  jokeChange(value:string) {
    console.log(value);
  }

  onSubmit(newJokeForm: any) {
    console.log(newJokeForm);
  }

  onReactiveSubmit() {
    console.log(this.newReactiveJokeForm);
  }

  customValidator() : ValidatorFn {
    return (control: AbstractControl): null | ValidationErrors => {
      const isInvalid:boolean= control.value === 'bruce';
      return isInvalid ? { 'invalidValue' : { currentValue: control.value, correctValue: 'shouldnt be BRUCE' } } : null;
    }
  }
}
