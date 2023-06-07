import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent implements OnInit {
  constructor(private seller: SellerService) {}

  ngOnInit(): void {}
  singUP(data: object) {
    console.log(data);
    this.seller.userSignUp(data).subscribe((result) => {
      console.log(result);
    });
  }
}
