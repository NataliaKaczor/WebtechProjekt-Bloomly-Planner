import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

  countdown: string = '';
  tage: number = 0;
  stunden: number = 0;
  minuten: number = 0;
  sekunden: number = 0;
  partyStarted: boolean = false; 

  ngOnInit(): void {

    const partyDatum = new Date('2026-08-05T10:00:00').getTime();

    setInterval(() => {

      const aktuelleZeit = new Date().getTime();
      const verbleibendeZeit = partyDatum - aktuelleZeit;

      if (verbleibendeZeit <= 0) {
        this.countdown = 'Die Party hat begonnen';
        this.partyStarted = true; 
      }
      else {
        const gesamtSekunden = Math.floor(verbleibendeZeit / 1000);
        // nebenrechnung : (60 minuten  x 60 sekunden) x 24 Stunden = 86400 Sekunden pro Tag 
        this.tage = Math.floor(gesamtSekunden / 86400);
        this.stunden = Math.floor((gesamtSekunden % 86400) / 3600);
        this.minuten = Math.floor((gesamtSekunden % 3600) / 60);
        this.sekunden = gesamtSekunden % 60;
        this.partyStarted = false; 
      }

    }, 1000);
  }
}