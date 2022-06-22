import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function strongPassword(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.value;

    if (password) {
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
      if (!passwordRegex.test(password)) {
        return { passwordFormat: true };
      }
    }
    return null;
  };
}

export function samePassword(guidePwd: string, pwdToEvaluate: string): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const toEvaluate = formGroup.get(pwdToEvaluate)?.value;
    const guide = formGroup.get(guidePwd)?.value;

    if (toEvaluate && guide && !(toEvaluate === guide)) {
      formGroup.get(pwdToEvaluate)?.setErrors({ samePassword: true });
      return { samePassword: true };
    }
    return null;
  };
}
