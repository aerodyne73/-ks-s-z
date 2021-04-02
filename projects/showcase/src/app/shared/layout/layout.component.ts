import { Component } from '@angular/core';

@Component({
  template: `
    <mat-toolbar color="primary">
      <div>
        <div id="layout-left-custom-items"></div>
        <a mat-button routerLink="/">
        <img src="https://i.ibb.co/Kbw6m4P/logo.png" width="120" height="44">
        </a>
      </div>
      <div>
        <div id="layout-right-custom-items"></div>
      </div>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 100vh;
      }

      mat-toolbar {
        display: flex;
        justify-content: space-between;
        padding: 0 16px 0 0;
      }

      div {
        display: flex;
        height: 100%;
        align-items: center;
      }

      .menu-button {
        height: 100%;
      }
    `,
  ],
})
export class LayoutComponent {}
