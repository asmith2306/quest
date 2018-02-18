import {Directive, Input} from "@angular/core";
import {NG_VALIDATORS, Validator, AbstractControl} from "@angular/forms";

@Directive({
    selector: '[appPrefix]',
    providers: [{provide: NG_VALIDATORS, useExisting: OEightPrefixDirective, multi: true}]
})
export class OEightPrefixDirective implements Validator {
    @Input('appPrefix') prefix: string;

    validate(control: AbstractControl): {[key: string]: any} {
        let badPrefix = String(control.value).length > 0 && !String(control.value).startsWith(this.prefix);
        return badPrefix ? {'badPrefix': {value: control.value}} : null;
    }
}