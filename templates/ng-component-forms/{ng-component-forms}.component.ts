import { Component, AfterContentInit, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: '{Name_file}',
    templateUrl: '{Name_file}.component.html',
    styleUrls: [`{Name_file}.component.scss`]
  })
  export class {Name_pascalized}Component {

    formGroup: FormGroup = this.formBuilder.group({
        name: [null, [Validators.required]],
    });

    constructor(
      private readonly store: Store,
    private readonly formBuilder: FormBuilder
    ) {
    }

    submit(){

    }

  }