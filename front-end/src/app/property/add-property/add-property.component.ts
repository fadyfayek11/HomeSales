import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  constructor(private rouer:Router) { }
  @ViewChild('Form') addpropertyform: NgForm;
  ngOnInit() {
  }
  onBck()
  {
    this.rouer.navigate(['/']);
  }
  OnSubmit()
  {
    console.log(this.addpropertyform);
  }

}
