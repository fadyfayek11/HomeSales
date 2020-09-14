import { Component, OnInit } from '@angular/core';
import { HouseingService } from 'src/app/service/houseing.service';
import { property } from '../property.interface';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SelesRent = 1;
  properties: Array<property>;
  constructor(private route: ActivatedRoute, private houseingservice:HouseingService) { }

  ngOnInit(): void {
    if (this.route.snapshot.url.toString())
    {
      this.SelesRent = 2;
    }
    this.houseingservice.getAllProperties(this.SelesRent).subscribe(
      data => {
        this.properties = data;
     }, error => {
       console.log(error);
     }

    );
    /*this.http.get('data/properties.json').subscribe(
      data => {
        this.Property = data;
        //console.log (data);
      });*/
  }

}
