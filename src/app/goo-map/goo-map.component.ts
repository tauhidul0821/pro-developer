import {Component, EventEmitter} from '@angular/core';
interface MarkerProperties {
  position: {
    lat: number;
    lng: number;
  };
}

@Component({
  selector: 'app-goo-map',
  templateUrl: './goo-map.component.html',
  styleUrls: ['./goo-map.component.scss'],
  standalone: false
})
export class GooMapComponent {
  latitude = 48.8588548; // default latitude
  longitude = 2.347035; // default longitude

  mapOptions: google.maps.MapOptions = {
    center: {lat: this.latitude, lng: this.longitude},
    zoom: 13,
    mapTypeControl: false
  };

  constructor() {}
  readonly mapInitialized: EventEmitter<google.maps.Map>;

  ngOnInit(): void {}

  display: any;
  center: google.maps.LatLngLiteral = {
    lat: this.latitude,
    lng: this.longitude
  };
  zoom = 6;

  /*------------------------------------------
  --------------------------------------------
  moveMap()
  --------------------------------------------
  --------------------------------------------*/
  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }

  /*------------------------------------------
  --------------------------------------------
  move()
  --------------------------------------------
  --------------------------------------------*/
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }

  markers: MarkerProperties[] = [
    {position: {lat: this.latitude, lng: this.longitude}} // Eiffel Tower
    //{ position: { lat: 48.8606, lng: 2.3376 }}, // Louvre Museum
    //{ position: { lat: 48.8530, lng: 2.3499 }}, // Cathédrale Notre-Dame de Paris
  ];

  handleMapInitialized(map: google.maps.Map) {
    this.markers.forEach((marker: MarkerProperties) => {
      new google.maps.Marker({
        position: marker.position,
        map
      });
    });
  }

  updateCoordinates(lat: any, lng: any): void {
    this.latitude = parseFloat(lat);
    this.longitude = parseFloat(lng);
  }
}
