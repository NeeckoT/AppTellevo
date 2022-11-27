import { Component } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { Platform, NavController } from '@ionic/angular';
import { StorageService } from './storage/storage.service'
import { GmapsService } from './services/gmaps/gmaps.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(protected platform: Platform,
    protected navController: NavController,
    public LocalStorage: StorageService,
    private geolocation: Geolocation) {
      

      this.platform.ready().then(async () => {
        this.getGeolocation();
      })
    }

    getGeolocation() {
      this.geolocation.getCurrentPosition().then((resp) => {

        console.log("resp", resp);
        // resp.coords.latitude
        // resp.coords.longitude
       }).catch((error) => {
         console.log('Error getting location', error);
       });
       
       let watch = this.geolocation.watchPosition();
       watch.subscribe((data) => {
        // data can be a set of coordinates, or an error (if an error occurred).
        // data.coords.latitude
        // data.coords.longitude
       });
    }

}
