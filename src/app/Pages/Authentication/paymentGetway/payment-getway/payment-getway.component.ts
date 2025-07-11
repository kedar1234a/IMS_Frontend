import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-getway',
  standalone: true,
  imports: [],
  templateUrl: './payment-getway.component.html',
  styleUrl: './payment-getway.component.css'
})
export class PaymentGetwayComponent implements OnInit {

  constructor(private http: HttpClient, private router:Router) {}

  ngOnInit(): void {
    this.loadGooglePayScript().then(() => {
      this.loadGooglePayButton();
    }).catch(err => {
      console.error('Failed to load Google Pay script:', err);
    });
  }

  loadGooglePayScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (document.getElementById('google-pay-script')) {
        resolve(); // already loaded
        return;
      }
      const script = document.createElement('script');
      script.id = 'google-pay-script';
      script.src = 'https://pay.google.com/gp/p/js/pay.js';
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Google Pay script load error'));
      document.head.appendChild(script);
    });
  }

  loadGooglePayButton() {
    // Now 'google' should be defined
    const paymentsClient = new (window as any).google.payments.api.PaymentsClient({ environment: 'TEST' });
    const paymentDataRequest = this.getPaymentDataRequest();

    const button = paymentsClient.createButton({
      onClick: () => this.onGooglePayButtonClicked(paymentsClient, paymentDataRequest)
    });

    const buttonContainer = document.getElementById('googlePayButton');
    if (buttonContainer) {
      buttonContainer.innerHTML = ''; // clear previous button if any
      buttonContainer.appendChild(button);
    }
  }

  getPaymentDataRequest() {
    return {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
        {
          type: 'CARD',
          parameters: {
            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            allowedCardNetworks: ['VISA', 'MASTERCARD'],
          },
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
              gateway: 'example', // replace with real one in production
              gatewayMerchantId: 'exampleMerchantId'
            }
          }
        }
      ],
      merchantInfo: {
        merchantId: '12345678901234567890', // optional in TEST
        merchantName: 'Example Merchant'
      },
      transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPrice: '10.00',
        currencyCode: 'USD',
        countryCode: 'US'
      }
    };
  }

  onGooglePayButtonClicked(paymentsClient: any, paymentDataRequest: any) {
    paymentsClient.loadPaymentData(paymentDataRequest).then((paymentData: any) => {
      console.log('PaymentData:', paymentData);
      const token = paymentData.paymentMethodData.tokenizationData.token;
      this.sendPaymentTokenToBackend(token);
    }).catch((err: any) => {
      console.error('Google Pay error', err);
    });
  }



sendPaymentTokenToBackend(token: string) {
 const authToken = localStorage.getItem('token') || '';

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${authToken}`
  });

  this.http.post('http://localhost:8080/api/payments/process', { token }, { headers , responseType: 'text' })
    .subscribe({
      next: res => {
        console.log('Payment processed:', res);
      alert('Payment Successful!');
        this.router.navigate(['/electronics-store-home']);
        
      },
      error: err => console.error('Payment error:', err)
    });
}


}
