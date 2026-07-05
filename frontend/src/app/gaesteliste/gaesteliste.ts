import { Component } from '@angular/core';
import { Gast } from '../interfaces/gast';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gaesteliste',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './gaesteliste.html',
  styleUrl: './gaesteliste.css'
})
export class Gaesteliste {

  gaeste: Gast[] = [
    { id: 1, vornameName: 'Tala Kaczor', status: 'offen' },
    { id: 2, vornameName: 'Nili', status: 'offen' },
    { id: 3, vornameName: 'Sofi', status: 'offen' }
  ];

  neuerGastName: string = '';
  gastid: number = 4;

  addGast() {

    if (!this.neuerGastName) {
      console.log('Name leer');
      return;
    }

    const neuerGast: Gast = {
      id: this.gastid,
      vornameName: this.neuerGastName,
      status: 'offen'
    };

    this.gaeste.push(neuerGast);
    this.gastid++; // eindeutige ID
    this.neuerGastName = '';
    console.log('Gast erfolgreich hinzugefügt')
  };

  deleteGast(id: number) {
    for (let i = 0; i < this.gaeste.length; i++) {
      if (this.gaeste[i].id === id) {
        console.log('Gast' + this.gaeste[i].vornameName + ' erfolgreich gelöscht')
        this.gaeste.splice(i, 1);
        break;
      }
    }
  }

  showModal = false; 
  selectedGast: Gast | null = null 

  openModal(gast :Gast){
    console.log(' modal sichtbar')
    this.selectedGast = gast; 
    this.showModal = true; 
  }

  updateStatus( neuerStatus: 'offen' | 'zugesagt' | 'abgesagt')
  {
    if(!this.selectedGast) return; 
    this.selectedGast.status = neuerStatus; 
    this.showModal = false; 
    console.log('neuer Status von' + this.selectedGast.vornameName + ' : ' + this.selectedGast.status )

  }
  




}

