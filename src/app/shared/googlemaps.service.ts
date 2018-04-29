import { Injectable } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { Observable } from 'rxjs/Observable';

declare var google: any;

@Injectable()
export class MapsService {
    constructor(private __loader: MapsAPILoader) {

    }

    getReverseGeocoding(lat, lng) {
        return Observable.create(observer => {
            try {
                this.__loader.load().then(() => {
                    let geocoder = new google.maps.Geocoder();
                    let latlng = new google.maps.LatLng(lat, lng);
                    geocoder.geocode({ latLng: latlng }, (results, status) => {
                        if (status === google.maps.GeocoderStatus.OK) {
                            const place = {
                                city1: results[0].address_components[0].short_name,
                                city2: results[0].address_components[1].short_name,
                                city3: results[0].address_components[2].short_name,
                                country1: results[0].address_components[3].short_name,
                                country2: results[0].address_components[4].short_name,
                                country3: results[0].address_components[5].short_name
                            }
                            observer.next(place);
                            observer.complete();
                        } else {
                            console.error('Error - ', results, ' & Status - ', status);
                            if (status === google.maps.GeocoderStatus.ZERO_RESULTS) {
                                observer.error('Address not found!');
                            } else {
                                observer.error(status);
                            }

                            observer.complete();
                        }
                    });
                });
            } catch (error) {
                observer.error('error getGeocoding' + error);
                observer.complete();
            }

        });
    }

    getGeocoding(address: string) {
        return Observable.create(observer => {
            try {
                this.__loader.load().then(() => {
                    let geocoder = new google.maps.Geocoder();
                    geocoder.geocode({ address }, (results, status) => {
                        if (status === google.maps.GeocoderStatus.OK) {
                            const place = results[0].geometry.location;
                            observer.next(place);
                            observer.complete();
                        } else {
                            console.error('Error - ', results, ' & Status - ', status);
                            if (status === google.maps.GeocoderStatus.ZERO_RESULTS) {
                                observer.error('Address not found!');
                            } else {
                                observer.error(status);
                            }

                            observer.complete();
                        }
                    });
                });
            } catch (error) {
                observer.error('error getGeocoding' + error);
                observer.complete();
            }

        });
    }
}