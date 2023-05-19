import { Operaciones } from './operaciones';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cmpTest';
  res1!: number;
  res2!: number;
  res3!: number;
  res4!: number;
  ngOnInit(): void {
    let operaciones = new Operaciones();
    this.res1 = operaciones.sumar(3, 5);
    this.res2 = operaciones.restar(9, 5);
    this.res3 = operaciones.multiplicar(5, 8);
    this.res4 = operaciones.dividir(12, 4);
  }
}
