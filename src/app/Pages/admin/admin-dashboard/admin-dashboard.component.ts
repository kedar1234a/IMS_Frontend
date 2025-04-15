import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AdminService } from '../../../Services/AdminService/admin-service.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent implements OnInit {
  usersArray: any[] = [];
  constructor(private router: Router, private adminService: AdminService) {}
  ngOnInit(): void {
    this.adminService.getUser().subscribe({
      next: (data) => {
        this.usersArray = data;
        console.log(data);
      },
      error: (err) => {
        console.error('Error While Fetching user : ', err);
      },
    });
  }
  navigate(event: Event) {
    const ac_option = (event.target as HTMLSelectElement).value;
    if (ac_option == 'logout') {
      this.router.navigate(['/']);
    }
  }
  status = 'Pending';
  // user_status = document.getElementById('user_status');
  isApproved: boolean = false;
  approve_user() {
    alert('Approved User');
    this.status = 'Active';
    this.isApproved = true;
  }
  reject_user() {
    alert('Rejected User');
    // this.usersArray.pop();
    this.isApproved = false;
    this.status = 'Inactive';
  }
  imageURL =
    'https://imgs.search.brave.com/CvAZteVhIRcQ-a75CvT8kMAGTzoq3ULueUbbugOqVdY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzkxLzIx/Lzc2LzkxMjE3NjFi/YjI2YTE0ZTMzYjdi/OTdmZjg5MzM1NGQ4/LmpwZw';
  viewImage(url:string) {
    window.open(url, '_blank');
  }
}
