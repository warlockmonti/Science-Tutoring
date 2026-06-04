
export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export interface TutoringSubject {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface StudentInfo {
  name: string;
  email: string;
  subject: string;
  notes: string;
}

export enum Page {
  Home = 'home',
  Booking = 'booking',
  Reviews = 'reviews'
}
