import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import {
  GoogleMapsModule,
  MapInfoWindow,
  MapMarker,
  GoogleMap,
} from '@angular/google-maps';

import { Tower } from 'src/app/tower/types/tower.type';
import { SharedData } from 'src/app/tower/services/tower.data';
import { environment } from 'src/environments/environment';

interface CustomMapMarker {
  position: MapMarker['position'];
  label?: MapMarker['label'];
  title?: MapMarker['title'];
  options: MapMarker['options'];
  info?: Tower;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  standalone: true,
  imports: [
    GoogleMapsModule, //
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
})
export class MapComponent implements OnInit {
  zoom = 12;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    // mapTypeId: 'hybrid',
    mapTypeId: '',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    streetViewControl: false,
    fullscreenControl: false,
    styles: [
      {
        featureType: 'administrative',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#444444',
          },
        ],
      },
      {
        featureType: 'landscape',
        elementType: 'all',
        stylers: [
          {
            color: '#f2f2f2',
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi.business',
        elementType: 'geometry.fill',
        stylers: [
          {
            visibility: 'on',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'all',
        stylers: [
          {
            saturation: -100,
          },
          {
            lightness: 45,
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'all',
        stylers: [
          {
            visibility: 'simplified',
          },
        ],
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'transit',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'all',
        stylers: [
          {
            color: '#b4d4e1',
          },
          {
            visibility: 'on',
          },
        ],
      },
    ],
  };
  apiLoaded: Observable<boolean>;

  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;

  constructor(
    private sharedData: SharedData,
    httpClient: HttpClient
  ) {
    this.apiLoaded = httpClient
      .jsonp(
        `${environment.googleMapsUrl}?key=${environment.googleMapsApi}`,
        'callback'
      )
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }

  markers: CustomMapMarker[] = [];
  infoContent: Tower;

  ngOnInit() {
    this.sharedData.value.subscribe(towers => {
      // this.dataSource.data = towers;
      this.markers = towers.map(tower => {
        return {
          position: {
            lat: tower.latitude,
            lng: tower.longitude,
          } as google.maps.LatLngLiteral,
          options: {
            animation: google.maps.Animation.DROP,
          },
          info: tower,
        };
      });

      this.fitMapMarkers(this.markers);
    });
  }

  fitMapMarkers(markers: CustomMapMarker[]) {
    let bounds = new google.maps.LatLngBounds();

    markers.forEach((marker: CustomMapMarker) => {
      const position = marker.position as google.maps.LatLngLiteral;
      bounds.extend(position);
    });

    this.map.fitBounds(bounds, 10);
  }

  openInfo(marker: MapMarker, content?: Tower) {
    console.log({
      marker,
      content,
    });
    if (content) this.infoContent = content;
    this.infoWindow.open(marker);
  }

  getPropertyName(propertyName: string) {
    return propertyName
      .replace(/_/g, ' ')
      .replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1));
  }
}
