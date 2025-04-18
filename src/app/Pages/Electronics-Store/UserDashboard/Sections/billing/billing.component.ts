import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { SalesProductService } from '../../../../../Services/Billing/sales-product.service';
import { ProductService } from '../../../../../Services/productServices/product-service.service';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit{

  invoiceDate = '';
  invoiceName = '';
  name = '';
  price: number = 0;
  qty: number = 0;
  netAmount =0;
  gstType ='';
  selectedTaxRate: number = 0;
  sum: number = 0;
  total: number = 0;
  products: any[] = [];

  items:any[]=[];  

  CGST = "CGST";
SGST = "SGST";
IGST = "IGST"; //integrated
UTGST = "UTGST"; //union territory


  showPDF: boolean = false;
  pdfUrl: string | null = null;

  constructor(private billingService: SalesProductService, private itemService:ProductService) {}




  ngOnInit(): void {

    

     this.loadProducts(); 
  }

  loadProducts(): void {
    this.itemService.getProducts().subscribe({
      next: (data) => {

        this.items = data;
     
      },
      error: (err) => {
        console.error('Error loading products:', err);
      }
    });
  }

  onProductSelected(){
    const selectedItem = this.items.find(item => item.product_name === this.name);
  if (selectedItem) {
    this.price = selectedItem.product_price;
  } else {
    this.price = 0; // Reset if not found
  }
  }


  addProduct() {
    if (this.name && this.price && this.qty) {
      const amount = this.price * this.qty;
      const gst = amount * this.selectedTaxRate / 100;
      const amountWithGST = amount + gst;
      this.products.push({
        productName: this.name,
        price: this.price,
        quantity: this.qty,
        netAmount: amount,
        typeOfGST: this.gstType,
        tax: this.selectedTaxRate,
        gst: gst,
        totalAmount: amountWithGST
      });
      this.name ='',
      this.price =0,
      this.qty =0,
      this.netAmount=0,
      this.gstType='',
      this.selectedTaxRate=0,
      this.sum =0,
      this.total += amountWithGST;
    }

  }



  refreshPage() {
    window.location.reload();
  }

  removeProduct(index: number) {
    const removedProduct = this.products[index];
    if (removedProduct) {
      this.total -= removedProduct.sum;
      this.products.splice(index, 1);
    }

  }



  async downloadPDF() {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([595.28, 841.89]); // A4 size in points
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontSize = 10; // Reduced font size
    let y = 800;
  
    // Title
    page.drawText('Invoice Summary', {
      x: 50,
      y,
      size: fontSize + 2, // Slightly bigger title
      font,
      color: rgb(0.2, 0.2, 0.6),
    });
  
    y -= 40;
  
    // Customer details 
    page.drawText(`Invoice no:`, { x: 50, y, size: fontSize, font });
    y -= 15;
    page.drawText(`Date: ${this.invoiceDate}`, { x: 50, y, size: fontSize, font });
    y -= 15;
    page.drawText(`Customer Name: ${this.invoiceName}`, { x: 50, y, size: fontSize, font });
  
    y -= 30;
  
    // Header background
    const backgroundColor = rgb(0.9, 0.9, 0.9);
    const headerHeight = 18;
    const headerY = y - 4;
  
    page.drawRectangle({
      x: 40,
      y: headerY,
      width: 515,
      height: headerHeight,
      color: backgroundColor,
    });
  
    // Header Text
    page.drawText('Name', { x: 50, y, size: fontSize, font });
    page.drawText('Price', { x: 150, y, size: fontSize, font });
    page.drawText('Qty', { x: 210, y, size: fontSize, font });
    page.drawText('Net Amt', { x: 260, y, size: fontSize, font });
    page.drawText('GST Type', { x: 330, y, size: fontSize, font });
    page.drawText('GST %', { x: 400, y, size: fontSize, font });
    page.drawText('GST Amt', { x: 450, y, size: fontSize, font });
    page.drawText('Amount', { x: 510, y, size: fontSize, font });
  
    y -= 18;
  
    // Items
    this.products.forEach(product => {
      page.drawText(product.productName, { x: 50, y, size: fontSize, font });
      page.drawText(product.price.toFixed(2), { x: 150, y, size: fontSize, font });
      page.drawText(product.quantity.toString(), { x: 210, y, size: fontSize, font });
      page.drawText(product.netAmount.toFixed(2), { x: 260, y, size: fontSize, font });
      page.drawText(product.typeOfGST, { x: 330, y, size: fontSize, font });
      page.drawText(`${product.tax}%`, { x: 400, y, size: fontSize, font });
      page.drawText(product.gst.toFixed(2), { x: 450, y, size: fontSize, font });
      page.drawText(product.totalAmount.toFixed(2), { x: 510, y, size: fontSize, font });
      y -= 15;
    });
  
    // Divider line
    page.drawLine({
      start: { x: 40, y },
      end: { x: 560, y },
      thickness: 0.6,
      color: rgb(0, 0, 0),
    });
  
    y -= 20;
  
    // Total
    page.drawText(`Total: ${this.total.toFixed(2)}`, {
      x: 410,
      y,
      size: fontSize + 1,
      font,
      color: rgb(0, 0, 0.8),
    });
  
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
  
    const a = document.createElement('a');
    a.href = url;
    a.download = 'invoice.pdf';
    a.click();
    URL.revokeObjectURL(url);
  
    this.saveBill();
  }
  

  

  saveBill() {
    const billData = {
      name: this.invoiceName,
      billDate: this.invoiceDate,
      totalAmount: this.total,
      customerProductList: this.products
    };
  
    this.billingService.saveBill(billData).subscribe({
      next: (response) => {
        console.log('Bill saved successfully:');
        alert(response); 
        this.clearForm();
      },
      error: (error) => {
        console.error('Error saving bill:', error);
        alert('Error saving invoice.');
        alert('Error saving invoice: ' + (error.message || error.statusText));

      }
    });
  }
  

  // Clear form method
clearForm() {
  this.invoiceDate = '';
  this.invoiceName = '';
  this.products = [];
  this.total = 0;
}
}
