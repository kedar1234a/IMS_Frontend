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

  invoiceDate = '';
  invoiceName ='';
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
        tax: this.selectedTaxRate,
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

  removeProduct(index: number) {
    const removedProduct = this.users[index];
    if (removedProduct) {
      this.total -= removedProduct.sum;
      this.users.splice(index, 1);
    }

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
      size: 12,
      font,
      color: rgb(0.2, 0.2, 0.6),
    });

    y -= 40;

    //Customer details 
    page.drawText(`Invoice no :`, { x: 50, y, size: fontSize, font });
    y -= 20;
    page.drawText(`Date : ${this.invoiceDate}`, { x: 50, y, size: fontSize, font });
    y -=20;
    page.drawText(`Customer Name : ${this.invoiceName}`, {x: 50, y, size: fontSize, font});
  
    y -= 40;
  
   // Set background color (e.g., light gray)
const backgroundColor = rgb(0.9, 0.9, 0.9); // adjust RGB values as needed
const headerHeight = 20; // height of the background box
const headerY = y - 5;   // adjust Y to position the background properly

// Draw a rectangle as background for the header row
page.drawRectangle({
  x: 40,              // starting X position
  y: headerY,         // Y position of the rectangle
  width: 450,         // total width covering all headers
  height: headerHeight,
  color: backgroundColor,
});

// Draw the header texts on top of the background
page.drawText(`Name`, { x: 50, y, size: fontSize, font });
page.drawText(`Price`, { x: 200, y, size: fontSize, font });
page.drawText(`Qty`, { x: 250, y, size: fontSize, font });
page.drawText(`GST`, { x: 300, y, size: fontSize, font });
page.drawText(`GST Amt`, { x: 350, y, size: fontSize, font });
page.drawText(`Amount`, { x: 430, y, size: fontSize, font });

  
    y -= 20;
  
    // Items
    this.users.forEach(user => {
      page.drawText(user.name, { x: 50, y, size: fontSize, font });
      page.drawText(user.price.toString(), { x: 200, y, size: fontSize, font });
      page.drawText(user.qty.toString(), { x: 250, y, size: fontSize, font });
      page.drawText(`${user.tax.toString()}%`, {x: 300, y, size: fontSize, font});
      page.drawText(user.gst.toString(), {x: 350, y, size: fontSize, font});
      page.drawText(user.sum.toString(), { x: 430, y, size: fontSize, font });
      y -= 20;
    });
  
    page.drawLine({
      start: { x: 40, y},  // starting point
      end: { x: 500,y },   // ending point
      thickness: 1,              // line thickness
      color: rgb(0, 0, 0),       // black line
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
