import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Offer } from '../../models/offer.model';
import { OfferService } from '../../services/offer.service';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss'],
  imports: [MatCardModule, MatIconModule, NgIf, AsyncPipe, NgFor, MatButton],
})
export class OfferListComponent {
  offers$: Observable<Offer[]>;

  constructor(private offerService: OfferService, private router: Router) {
    this.offers$ = this.offerService.offers$;
  }

  /** Navigate to the detail page of the selected offer */
  viewDetails(offer: Offer): void {
    this.router.navigate(['/offers', offer.id]);
  }

  redirectToCart(event: MouseEvent): void {
    event.stopPropagation();
    window.location.href = 'https://www.rebuy.de/checkout/cart';
  }
}
