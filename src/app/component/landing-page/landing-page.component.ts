import { Component } from '@angular/core';
import { IconDefinition, faSuitcase, faHouse, faPlane, faCar, faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  faSuitCase: IconDefinition = faSuitcase;
  faHouse: IconDefinition = faHouse;
  faPlane: IconDefinition = faPlane;
  faCar: IconDefinition = faCar;
  faLocationDot: IconDefinition = faLocationDot;
}
