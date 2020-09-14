import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  propertyid: number;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.propertyid = +(this.route.snapshot.params['id']);
  }
  onSelectNext()
  {
    this.propertyid += 1;
    this.router.navigate(['property-detail', this.propertyid]);
  }
}
