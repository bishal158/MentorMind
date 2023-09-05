import { AbstractControl } from "@angular/forms";

export function match_password(password: string,confirmpassword:string){
  return function (form : AbstractControl){
    const passwordValue = form.get(password)?.value;
    const confirmPasswordValue = form.get(confirmpassword)?.value;
    if ( passwordValue===confirmPasswordValue){
      return null;
    }
    return {passwordMismatchError:true}
  }
}
