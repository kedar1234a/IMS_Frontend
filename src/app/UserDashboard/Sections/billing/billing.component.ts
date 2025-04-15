import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent {
  name = '';
  price: number = 0;
  qty: number = 0;
  selectedTaxRate:number=0;
  sum: number = 0;
  total: number = 0;
  users: any[] = [];

  showPDF: boolean = false;
  pdfUrl: string | null = null;

  calculateGST(price: number, gst:number, selTax:number){

   this.selectedTaxRate = price * 18 * gst /100;
    
  }

  calculateTotal(price: number, qty: number) {
    this.sum = price * qty;
  }

  

  addProduct() {
    if (this.name && this.price && this.qty) {
      const amount = this.price * this.qty;
      const gst = amount * this.selectedTaxRate /100;
      const amountWithGST = amount + gst;
      this.users.push({
        name: this.name,
        price: this.price,
        qty: this.qty,
        gst:gst,
        sum: amountWithGST
      });
      this.total += amountWithGST;
      this.name = '';
      this.price = 0;
      this.qty = 0;
      this.sum = 0;
    }
  }

  refreshPage() {
    window.location.reload();
  }

  

  async downloadPDF() {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([595.28, 841.89]); // A4 size in points
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontSize = 12;
    let y = 800;
  
    // Title
    page.drawText('Invoice Summary', {
      x: 50,
      y,
      size: 18,
      font,
      color: rgb(0.2, 0.2, 0.6),
    });
  
    y -= 40;
  
    // Headers
    page.drawText(`Name`, { x: 50, y, size: fontSize, font });
    page.drawText(`Price`, { x: 200, y, size: fontSize, font });
    page.drawText(`Qty`, { x: 300, y, size: fontSize, font });
    page.drawText(`Amount`, { x: 400, y, size: fontSize, font });
  
    y -= 20;
  
    // Items
    this.users.forEach(user => {
      page.drawText(user.name, { x: 50, y, size: fontSize, font });
      page.drawText(user.price.toString(), { x: 200, y, size: fontSize, font });
      page.drawText(user.qty.toString(), { x: 300, y, size: fontSize, font });
      page.drawText(user.sum.toString(), { x: 400, y, size: fontSize, font });
      y -= 20;
    });
  
    // Total
    y -= 20;
    page.drawText(`Total: ${this.total.toFixed(2)}`, {
      x: 400,
      y,
      size: fontSize + 2,
      font,
      color: rgb(0, 0, 0.8)
    });
  
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
  
    // Create a temporary anchor to trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'invoice.pdf';
    a.click();
  
    // Cleanup
    URL.revokeObjectURL(url);
  }
  
}
