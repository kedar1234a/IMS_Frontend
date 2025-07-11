import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface Seller {
  name: string;
  id: string;
  email: string;
  grossSale: number | null;
  earning: number | null;
  icon: string;
}

@Component({
  selector: 'app-sellers',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './sellers.component.html',
  styleUrl: './sellers.component.css'
})
export class SellersComponent {
  sellers: Seller[] = [];

  newSeller: Seller = {
    name: '',
    id: '',
    email: '',
    grossSale: null,
    earning: null,
    icon: ''
  };

  searchTerm: string = '';
  searchField: string = 'name'; // Default filter is name
  editingIndex: number | null = null;

  get filteredSellers() {
    if (!this.searchTerm.trim()) {
      return this.sellers;
    }

    return this.sellers.filter((seller) => {
      const field = this.searchField;
      const value = seller[field as keyof Seller];

      if (typeof value === 'number') {
        return value.toString().includes(this.searchTerm);
      }

      if (typeof value === 'string') {
        return value.toLowerCase().includes(this.searchTerm.toLowerCase());
      }

      return false;
    });
  }

  addSeller() {
    if (!this.newSeller.name || !this.newSeller.id || !this.newSeller.email) {
      alert('Please fill all required fields!');
      return;
    }

    if (this.editingIndex !== null) {
      this.sellers[this.editingIndex] = { ...this.newSeller };
      this.editingIndex = null;
      alert('Seller updated successfully!');
    } else {
      this.sellers.push({ ...this.newSeller });
      alert('Seller added successfully!');
    }

    this.newSeller = {
      name: '',
      id: '',
      email: '',
      grossSale: null,
      earning: null,
      icon: ''
    };
  }

  editSeller(index: number) {
    const seller = this.filteredSellers[index];
    const realIndex = this.sellers.indexOf(seller);
    this.newSeller = { ...seller };
    this.editingIndex = realIndex;
  }

  deleteSeller(index: number) {
    const seller = this.filteredSellers[index];
    const realIndex = this.sellers.indexOf(seller);
    if (confirm('Are you sure you want to delete this seller?')) {
      this.sellers.splice(realIndex, 1);
    }
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.newSeller.icon = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
