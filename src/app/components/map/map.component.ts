import { Component, OnInit } from '@angular/core';
import { Marker } from '@agm/core';
import { Animation } from '@agm/core/directives/marker';
import { MatDialog } from '@angular/material/dialog';
import { SpotDialogComponent } from '../../components/spot-dialog/spot-dialog.component';
import spotDialogData from '../../../mock-data/spot-dialog/spot-dialog.json';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  selectedMarker: Marker;
  animation: Animation;
  mapTypes: MapType[] = [
    {value: 'roadmap', viewValue: 'Roadmap' },
    { value: 'hybrid', viewValue: 'Hybrid' },
    { value: 'satellite', viewValue: 'Satellite' },
    { value: 'terrain', viewValue: 'Terrain' }];

  selectedMapType: string;

  spotDialogData = spotDialogData;

  lat: number = this.spotDialogData.coordinates.latitude;
  lng: number = this.spotDialogData.coordinates.longitude;
  zoom: number = 15;

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

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.animation = 'DROP';
    this.selectedMapType = this.mapTypes[0].value;
  }

  selectMarker(e): void {
    const dialogRef = this.dialog.open(SpotDialogComponent, {
      width: '700px',
      data: { name: spotDialogData.name, images: spotDialogData.images, comments: spotDialogData.comments },
    });

    dialogRef.afterClosed().subscribe(result => { });
  }
}

interface MapType {
  value: string;
  viewValue: string;
}

