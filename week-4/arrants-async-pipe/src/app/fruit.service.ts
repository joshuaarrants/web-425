import { Injectable } from '@angular/core';
import { Fruit } from "./fruit";
import { Observable, of } from 'rxjs';

@Injectable()
export class FruitService {
  fruits: Fruit[] = [
    { 
      id: 0, 
      name: "Bananas", 
      pricePerPound: "$.69",
      quantity: 1
    },
    { 
      id: 1, 
      name: "Apples", 
      pricePerPound: "$4.47",
      quantity: 1
    },
    { 
      id: 2, 
      name: "Strawberries", 
      pricePerPound: "$3.97",
      quantity: 3
    },
    { 
      id: 3, 
      name: "Oranges", 
      pricePerPound: "$3.99",
      quantity: 2
    },
    { 
      id: 4, 
      name: "Pineapple", 
      pricePerPound: "$.54",
      quantity: 4
    },
  ]

  constructor() { }

  getFruits(): Observable<Fruit[]> {
    return of(this.fruits);
  }
}
