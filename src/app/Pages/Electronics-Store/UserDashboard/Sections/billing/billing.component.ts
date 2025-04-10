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

  showPDF: boolean = false;
  pdfUrl: string | null = null;

  name: string = '';
  price: number = 0;
  qty: number = 1;
  sum: number = 0;
  total: number = 0;
  gstAmount: number = 0;
  grandTotal: number = 0;

  users: any[] = [];

  calculateTotal(price: number, qty: number): void {
    this.sum = price * qty;
  }

  addProduct(): void {
    const newProduct = {
      name: this.name,
      price: this.price,
      qty: this.qty,
      sum: this.price * this.qty
    };

    this.users.push(newProduct);

    // Clear inputs
    this.name = '';
    this.price = 0;
    this.qty = 1;
    this.sum = 0;

    // Recalculate total, GST, and grand total
    this.calculateInvoiceTotals();
  }

  calculateInvoiceTotals(): void {
    this.total = this.users.reduce((acc, item) => acc + item.sum, 0);
    this.gstAmount = this.total * 0.18;
    this.grandTotal = this.total + this.gstAmount;
  }
  refreshPage() {
    window.location.reload();
  }

  async showPDFPreview() {
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

// GST (18%)
y -= 20;
page.drawText(`GST (18%): ${this.gstAmount.toFixed(2)}`, {
  x: 400,
  y,
  size: fontSize + 2,
  font,
  color: rgb(0, 0, 0.8)
});

// Grand Total
y -= 20;
page.drawText(`Grand Total: ${this.grandTotal.toFixed(2)}`, {
  x: 400,
  y,
  size: fontSize + 2,
  font,
  color: rgb(0, 0, 0.8)
});


    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    this.pdfUrl = URL.createObjectURL(blob);
    this.showPDF = true;
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
  
   // Header background color
const headerHeight = 20;
const headerY = y;
const headerBgColor = rgb(0.8, 0.9, 1); // light blue

// Draw background rectangles behind each header text
page.drawRectangle({ x: 45, y: headerY - 5, width: 200, height: headerHeight, color: headerBgColor });
page.drawRectangle({ x: 195, y: headerY - 5, width: 200, height: headerHeight, color: headerBgColor });
page.drawRectangle({ x: 295, y: headerY - 5, width: 200, height: headerHeight, color: headerBgColor });
page.drawRectangle({ x: 395, y: headerY - 5, width: 150, height: headerHeight, color: headerBgColor });

// Draw header text
page.drawText(`Name`, { x: 50, y: headerY, size: fontSize, font, color: rgb(0, 0, 0) });
page.drawText(`Price`, { x: 200, y: headerY, size: fontSize, font, color: rgb(0, 0, 0) });
page.drawText(`Qty`, { x: 300, y: headerY, size: fontSize, font, color: rgb(0, 0, 0) });
page.drawText(`Amount`, { x: 400, y: headerY, size: fontSize, font, color: rgb(0, 0, 0) });

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

// GST (18%)
y -= 20;
page.drawText(`GST (18%): ${this.gstAmount.toFixed(2)}`, {
  x: 400,
  y,
  size: fontSize + 2,
  font,
  color: rgb(0, 0, 0.8)
});

// Grand Total
y -= 20;
page.drawText(`Grand Total: ${this.grandTotal.toFixed(2)}`, {
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
