// /*
// ============================================
// ; Title: Assignment 4.4
// ; Author: Professor Krasso
// ; Date: 31 July 2020
// ; Modified By: Jonathan Kobyluck
// ; Description: Async Pipe
// ;===========================================
// */

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ComposerService {
  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {
        composerId: 100,
        fullName: 'Hildegard von Bingen',
        genre: 'Classical',
      },
      {
        composerId: 101,
        fullName: 'John Dunstable',
        genre: 'Classical',
      },
      {
        composerId: 102,
        fullName: 'Giovanni Pierluigi da Palestrina',
        genre: 'Classical',
      },
      {
        composerId: 103,
        fullName: 'William Byrd',
        genre: 'Classical',
      },
      {
        composerId: 104,
        fullName: 'Henry Purcell',
        genre: 'Classical',
      },
    ];
  }

  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(
      map((composers) =>
        composers.filter(
          (composer) => composer.fullName.toLowerCase().indexOf(name) > -1
        )
      )
    );
  }
}
