import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  name: string = '';
  reviewText: string = '';
  rating: number = 0;
  displayPicture: string | null = null;
  reviews: any[] = [];
  emojis: string[] = ['😞', '😐', '😊', '😄', '😍'];
  showReviews: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // Load existing reviews from localStorage
    this.loadReviews();
  }

  loadReviews(): void {
    const savedReviews = localStorage.getItem('reviews');
    if (savedReviews) {
      this.reviews = JSON.parse(savedReviews);
      this.showReviews = this.reviews.length > 0;
    }
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.displayPicture = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  submitReview(): void {
    if (this.name && this.reviewText && this.rating > 0) {
      const newReview = {
        name: this.name,
        reviewText: this.reviewText,
        rating: this.rating,
        displayPicture: this.displayPicture || 'assets/placeholder.jpg',
        date: new Date().toISOString()
      };

      this.reviews.unshift(newReview);
      localStorage.setItem('reviews', JSON.stringify(this.reviews));
      this.showReviews = true;

      // Reset form
      this.name = '';
      this.reviewText = '';
      this.rating = 0;
      this.displayPicture = null;
    }
  }
}