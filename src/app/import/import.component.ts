import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit{

  importForm!: FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.initImportForm();
  }

    initImportForm(): void {
    this.importForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      courseName: ['', Validators.required]
    });
  }

   onSubmit(): void {
    if (this.importForm.valid) {
      console.log('Form Data:', this.importForm.value);
    } else {
      this.importForm.markAllAsTouched();
    }
  }
}
