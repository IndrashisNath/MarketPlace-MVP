export interface Offer {
  id: number;
  title: string;
  description: string;
  price: number;
  upVotes: number;
  downVotes: number;
  condition: string;
  merchant: string;
  imageUrl?: string;
}
