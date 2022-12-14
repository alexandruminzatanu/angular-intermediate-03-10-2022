import { Component, Input } from "@angular/core";
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, Validator, AbstractControl, ValidationErrors } from "@angular/forms";

@Component({
  selector: 'app-star-rating',
  templateUrl: 'star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  //////////////////////////// 2, 3
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: StarRatingComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: StarRatingComponent,
    },
  ],
  ///////////////////  1
})
export class StarRatingComponent implements ControlValueAccessor, Validator {
  @Input() count: number = 5;

  stars: number[] = [];
  score: number = 2;

  //////////////////// 2
  onChange = (score: number) => {};

  onTouched = () => {};

  touched: boolean = false;

  disabled: boolean = false;
  //////////////////// 1

  constructor() {
    for (let i = 0; i < this.count; i++) {
      this.stars.push(i + 1);
    }
  }

  changeScore(score: number): void {
    this.markAsTouched();
    if (!this.disabled) {
      this.score = score;
      this.onChange(this.score);
    }
  }

  //////////////////////////////////// 2
  // called by the Angular form
  writeValue(obj: any): void {
    this.score = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

//////
  validate(control: AbstractControl): ValidationErrors | null {
    const score = control.value;
    if (score < 5) {
      return {
        mustBePerfect: {
          score: score,
        },
      };
    }

    return null;
  }
  /////////////////////////////
}
