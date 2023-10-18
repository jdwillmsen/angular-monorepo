import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricesComponent } from '@angular-monorepo/shared-ui';

@Component({
  selector: 'angular-monorepo-product-list',
  standalone: true,
  imports: [CommonModule, PricesComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {}
