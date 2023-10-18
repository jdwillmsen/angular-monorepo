import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricesComponent } from '@angular-monorepo/shared-ui';

@Component({
  selector: 'angular-monorepo-order-list',
  standalone: true,
  imports: [CommonModule, PricesComponent],
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent {}
