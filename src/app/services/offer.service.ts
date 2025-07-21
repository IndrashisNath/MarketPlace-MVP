import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Offer } from '../models/offer.model';

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  // Mock offers data
  private initialOffers: Offer[] = [
    {
      id: 1,
      title: 'Apple iPhone 14 - 128GB',
      description:
        'Gently used iPhone 14 with 128GB storage in midnight color. Lorem ipsum is placeholder text used in design to demonstrate the visual form of a document or typeface without relying on meaningful content. It is often used in publishing and web design to fill a space on a page and give an impression of how the final text will look.',
      price: 412.99,
      upVotes: 68,
      downVotes: 12,
      condition: 'Refurbished',
      merchant: 'comarket',
      imageUrl: 'https://picsum.photos/300?random=1',
    },
    {
      id: 2,
      title: 'Samsung Galaxy S21 16GB 256GB Black dual sim',
      description:
        'Refurbished Samsung S21, excellent condition, 256GB. Lorem ipsum is placeholder text used in design to demonstrate the visual form of a document or typeface without relying on meaningful content. It is often used in publishing and web design to fill a space on a page and give an impression of how the final text will look.',
      price: 299.99,
      upVotes: 112,
      downVotes: 5,
      condition: 'New',
      merchant: 'comarket',
      imageUrl: 'https://picsum.photos/300?random=2',
    },
    {
      id: 3,
      title: 'Sony WH-1000XM4 Headphones',
      description:
        'Noise-cancelling wireless headphones, black color, lightly used. Lorem ipsum is placeholder text used in design to demonstrate the visual form of a document or typeface without relying on meaningful content. It is often used in publishing and web design to fill a space on a page and give an impression of how the final text will look.',
      price: 150.0,
      upVotes: 80,
      downVotes: 10,
      condition: 'Refurbished',
      merchant: 'comarket',
      imageUrl: 'https://picsum.photos/300?random=3',
    },
    {
      id: 4,
      title: 'Apple MacBook Pro 2019 - 16GB',
      description:
        'Used 2019 MacBook Pro, 16GB RAM, 512GB SSD, good condition. Lorem ipsum is placeholder text used in design to demonstrate the visual form of a document or typeface without relying on meaningful content. It is often used in publishing and web design to fill a space on a page and give an impression of how the final text will look.',
      price: 1200.0,
      upVotes: 40,
      downVotes: 8,
      condition: 'Used',
      merchant: 'comarket',
      imageUrl: 'https://picsum.photos/300?random=4',
    },
    {
      id: 5,
      title: 'Amazon Kindle Paperwhite',
      description:
        'Used Kindle Paperwhite (2018), very good condition with cover. Lorem ipsum is placeholder text used in design to demonstrate the visual form of a document or typeface without relying on meaningful content. It is often used in publishing and web design to fill a space on a page and give an impression of how the final text will look.',
      price: 70.0,
      upVotes: 9,
      downVotes: 2,
      condition: 'Refurbished',
      merchant: 'comarket',
      imageUrl: 'https://picsum.photos/300?random=5',
    },
    {
      id: 6,
      title: 'Dell XPS 13 - 8GB RAM',
      description:
        'Dell XPS 13 laptop, 8GB RAM, 256GB SSD, excellent condition. Lorem ipsum is placeholder text used in design to demonstrate the visual form of a document or typeface without relying on meaningful content. It is often used in publishing and web design to fill a space on a page and give an impression of how the final text will look.',
      price: 899.99,
      upVotes: 55,
      downVotes: 15,
      condition: 'Refurbished',
      merchant: 'comarket',
      imageUrl: 'https://picsum.photos/300?random=6',
    },
    {
      id: 7,
      title: 'Bose QuietComfort 35 II',
      description:
        'Wireless noise-cancelling headphones, very good condition. Lorem ipsum is placeholder text used in design to demonstrate the visual form of a document or typeface without relying on meaningful content. It is often used in publishing and web design to fill a space on a page and give an impression of how the final text will look.',
      price: 199.99,
      upVotes: 30,
      downVotes: 3,
      condition: 'New',
      merchant: 'comarket',
      imageUrl: 'https://picsum.photos/300?random=7',
    },
    {
      id: 8,
      title: 'Google Pixel 5 - 128GB',
      description:
        'Used Google Pixel 5 smartphone, unlocked, in great condition. Lorem ipsum is placeholder text used in design to demonstrate the visual form of a document or typeface without relying on meaningful content. It is often used in publishing and web design to fill a space on a page and give an impression of how the final text will look.',
      price: 349.99,
      upVotes: 85,
      downVotes: 19,
      condition: 'Refurbished',
      merchant: 'comarket',
      imageUrl: 'https://picsum.photos/300?random=8',
    },
    {
      id: 9,
      title: 'Fitbit Charge 4 Fitness Tracker',
      description:
        'Used Fitbit Charge 4, good condition, includes charger and band. Lorem ipsum is placeholder text used in design to demonstrate the visual form of a document or typeface without relying on meaningful content. It is often used in publishing and web design to fill a space on a page and give an impression of how the final text will look.',
      price: 79.99,
      upVotes: 20,
      downVotes: 4,
      condition: 'Used',
      merchant: 'comarket',
      imageUrl: 'https://picsum.photos/300?random=9',
    },
    {
      id: 10,
      title: 'LG OLED TV - 55 inch',
      description:
        'Used LG OLED TV, 55 inch, excellent picture quality, remote included. Lorem ipsum is placeholder text used in design to demonstrate the visual form of a document or typeface without relying on meaningful content. It is often used in publishing and web design to fill a space on a page and give an impression of how the final text will look.',
      price: 899.99,
      upVotes: 60,
      downVotes: 10,
      condition: 'Refurbished',
      merchant: 'company gmbh',
      imageUrl: 'https://picsum.photos/300?random=10',
    },
    {
      id: 11,
      title: 'Microsoft Surface Pro 7',
      description:
        'Used Microsoft Surface Pro 7, 8GB RAM, 256GB SSD, includes keyboard. Lorem ipsum is placeholder text used in design to demonstrate the visual form of a document or typeface without relying on meaningful content. It is often used in publishing and web design to fill a space on a page and give an impression of how the final text will look.',
      price: 749.99,
      upVotes: 45,
      downVotes: 7,
      condition: 'Refurbished',
      merchant: 'comarket',
      imageUrl: 'https://picsum.photos/300?random=11',
    },
    {
      id: 12,
      title: 'GoPro HERO9 Black',
      description:
        'Used GoPro HERO9 Black, waterproof action camera, includes accessories. Lorem ipsum is placeholder text used in design to demonstrate the visual form of a document or typeface without relying on meaningful content. It is often used in publishing and web design to fill a space on a page and give an impression of how the final text will look.',
      price: 399.99,
      upVotes: 25,
      downVotes: 5,
      condition: 'Refurbished',
      merchant: 'Indrashis',
      imageUrl: 'https://picsum.photos/300?random=12',
    },
  ];

  private offersSubject = new BehaviorSubject<Offer[]>([]);
  public offers$: Observable<Offer[]> = this.offersSubject.asObservable();

  private userVotes: { [offerId: number]: 'up' | 'down' | null } = {};

  constructor() {
    // Load offers from localStorage if available, otherwise use initial data
    const savedOffersJson = localStorage.getItem('offers');
    let currentOffers: Offer[];
    if (savedOffersJson) {
      try {
        currentOffers = JSON.parse(savedOffersJson);
      } catch {
        currentOffers = [...this.initialOffers];
      }
    } else {
      currentOffers = [...this.initialOffers];
    }

    currentOffers.sort((a, b) => b.upVotes - a.upVotes);
    this.offersSubject.next(currentOffers);

    // Load user vote statuses from localStorage if available
    const savedVotesJson = localStorage.getItem('userVotes');
    if (savedVotesJson) {
      try {
        this.userVotes = JSON.parse(savedVotesJson);
      } catch {
        this.userVotes = {};
      }
    } else {
      this.userVotes = {};
    }
  }

  /** Returns the current list of offers*/
  getOffersList(): Offer[] {
    return this.offersSubject.value;
  }

  /** Find a specific offer by ID. */
  getOfferById(id: number): Offer | undefined {
    return this.offersSubject.value.find((off) => off.id === id);
  }

  /**
   * Upvote an offer with toggle behavior.
   * - If the user hasn't voted on this offer or has downvoted it, this will increment the upvotes.
   * - If the user already upvoted this offer, calling this again will remove the upvote (toggle off).
   * After updating, the offers list is re-sorted by upvotes and saved to localStorage.
   * @param {number} id - The ID of the offer to upvote.
   */
  upvoteOffer(id: number): void {
    const offers = [...this.offersSubject.value];
    const offer = offers.find((off) => off.id === id);
    if (!offer) return;

    const currentVote = this.userVotes[id] || null;
    if (currentVote === 'up') {
      offer.upVotes -= 1;
      this.userVotes[id] = null;
    } else if (currentVote === 'down') {
      offer.downVotes -= 1;
      offer.upVotes += 1;
      this.userVotes[id] = 'up';
    } else {
      offer.upVotes += 1;
      this.userVotes[id] = 'up';
    }

    offers.sort((a, b) => b.upVotes - a.upVotes);
    this.offersSubject.next(offers);

    localStorage.setItem('offers', JSON.stringify(offers));
    localStorage.setItem('userVotes', JSON.stringify(this.userVotes));
  }

  /**
   * Downvote an offer with toggle behavior.
   * - If the user hasn't voted on this offer or has upvoted it, this will increment the downVotes.
   * - If the user already downvoted this offer, calling this again will remove the downvote (toggle off).
   * After updating, the offers list is re-sorted by upvotes and saved to localStorage.
   * @param {number} id - The ID of the offer to downvote.
   */
  downvoteOffer(id: number): void {
    const offers = [...this.offersSubject.value];
    const offer = offers.find((off) => off.id === id);
    if (!offer) return;

    const currentVote = this.userVotes[id] || null;
    if (currentVote === 'down') {
      offer.downVotes -= 1;
      this.userVotes[id] = null;
    } else if (currentVote === 'up') {
      offer.upVotes -= 1;
      offer.downVotes += 1;
      this.userVotes[id] = 'down';
    } else {
      offer.downVotes += 1;
      this.userVotes[id] = 'down';
    }

    offers.sort((a, b) => b.upVotes - a.upVotes);
    this.offersSubject.next(offers);

    localStorage.setItem('offers', JSON.stringify(offers));
    localStorage.setItem('userVotes', JSON.stringify(this.userVotes));
  }
}
