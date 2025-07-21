import { Routes } from '@angular/router';
import { OfferDetailComponent } from './components/offer-detail/offer-detail.component';
import { OfferListComponent } from './components/offer_list/offer-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'offers', pathMatch: 'full' },
  { path: 'offers', component: OfferListComponent },
  { path: 'offers/:id', component: OfferDetailComponent },
  { path: '**', redirectTo: 'offers' },
];
