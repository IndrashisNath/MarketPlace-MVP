import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from '../../models/offer.model';
import { OfferService } from '../../services/offer.service';
import { NgIf } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.scss'],
  imports: [NgIf, MatButton, MatIcon],
})
export class OfferDetailComponent implements OnInit {
  offer: Offer | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private offerService: OfferService,
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const offerId = idParam ? parseInt(idParam, 10) : null;
    if (offerId) {
      this.offer = this.offerService.getOfferById(offerId);
    }
    if (!this.offer) {
      this.router.navigate(['/offers']);
    }
  }

  upvote(): void {
    if (this.offer) {
      this.offerService.upvoteOffer(this.offer.id);
    }
  }

  downvote(): void {
    if (this.offer) {
      this.offerService.downvoteOffer(this.offer.id);
    }
  }

  redirectToCart(): void {
    window.location.href = 'https://www.rebuy.de/checkout/cart';
  }
}
