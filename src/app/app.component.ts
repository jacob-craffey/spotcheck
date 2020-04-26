import { Component, OnInit } from '@angular/core';
import { Marker } from '@agm/core';
import { Animation } from '@agm/core/directives/marker';
import { MatDialog } from '@angular/material/dialog';
import { SpotDialogComponent } from './components/spot-dialog/spot-dialog.component';
import spotDialogData from '../mock-data/spot-dialog/spot-dialog.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedMarker: Marker
  animation: Animation
  title="spot-check"

  public mapStyles = [
    {
    "featureType": "poi",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
      ]
    }
  ];

  spotDialogData = spotDialogData;

  lat: number = this.spotDialogData.coordinates.latitude;
  lng: number = this.spotDialogData.coordinates.longitude;
  zoom: number = 15;
  

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.animation = 'DROP';
  }

  selectMarker(e): void {
    const dialogRef = this.dialog.open(SpotDialogComponent, {
      width: '700px',
      data: { name: spotDialogData.name, images: spotDialogData.images },
    });

    dialogRef.afterClosed().subscribe(result => { });
  }
}