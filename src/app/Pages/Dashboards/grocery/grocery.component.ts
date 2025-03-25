
import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [],
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.css'
})
export class GroceryComponent  implements AfterViewInit {
  @ViewChild('salesChart') salesChart!: ElementRef;
 
  constructor(private router: Router) {}  // ✅ Inject Router

  ngAfterViewInit() {
    new Chart(this.salesChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [{
          label: 'Sales',
          data: [120, 190, 300, 500],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',  // Red
            'rgba(54, 162, 235, 0.7)',  // Blue
            'rgba(255, 206, 86, 0.7)',  // Yellow
            'rgba(75, 192, 192, 0.7)'   // Green
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',  // Red
            'rgba(54, 162, 235, 1)',  // Blue
            'rgba(255, 206, 86, 1)',  // Yellow
            'rgba(75, 192, 192, 1)'   // Green
          ],
          borderWidth: 2
        }],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

// ✅ Function to Navigate to Profile Page
  goToProfile() {
    console.log("Navigating to profile...");  // ✅ Debugging Log
    this.router.navigate(['/profile']);

  }
}
