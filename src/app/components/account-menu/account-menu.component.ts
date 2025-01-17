import {Component, OnInit} from '@angular/core';
import {MultilinguismService} from "../../services/multilinguism.service";
import {GeticonService} from "../../services/geticon.service";

@Component({
  selector: 'app-account-menu',
  templateUrl: './account-menu.component.html',
  styleUrls: ['./account-menu.component.css']
})
export class AccountMenuComponent implements OnInit {


  newMenu: [string, string[]][] = [
    ['Application',
      ['ApplicationTheme',
        // ['Gestion des icones'],
        'paletteManagement',
        'interactions',
        'language',
        'share',
        'resetconfig']
    ],
    // ['Barre de phrase',
    //   ['Paramètres de la phrase',
    //     ['affichage de la phrase'],
    //     ['définir click sur la phrase']
    //   ],
    //   ['Apparence de la phrase',
    //     ['visibilité texte et image'],
    //     ['taille des picto'],
    //     ['taille de la barre'],
    //     ['afficher ou cacher la barre']
    //   ],
    //   ['Boutons de la phrase',
    //     ['réordonner les boutons'],
    //     ['afficher/cacher bouton partager'],
    //     ['afficher/cacher effacer dernier'],
    //     ['afficher/cacher effacer tout'],
    //     ['afficher/cacher prononcer la phrase']
    //   ]
    // ]
    // ,
    ['Grids',
      ['PageTitle'// ,
        // ['nom/picto ou les deux'],
        // ['chemin absolu ou juste nom de la page']
        ,
        'GridManagement',
        'GridFormat'//,
        //'clearGrid' ,
        // ['taille de la grille'],
        // ['espace entre les picto'],
        // ['thème du fond']
      ]
    ],
    ['Pictograms',
      ['PictogramStyle',
        'Mention'// ,
        // ['pictogramme de base',
        //   ['couleur principale'],
        //   ['texte',
        //     ['couleur'],
        //     ['police'],
        //     ['taille']
        //   ],
        //   ['bordures',
        //     ['couleur des bords'],
        //     ['modifier les angles'],
        //     ['taille des bords']
        //   ]
        // ]
      ] // ,
      // ['Style du pictogramme repertoire'// ,
      //   // ['style du répertoire'],
      //   // ['afficher l\'image le texte ou les deux'],
      //   // ['position de l\'image par rapport au texte'],
      //   // ['pictogramme de base',
      //   //   // ['couleur principale'],
      //   //   // ['texte',
      //   //   //   ['couleur'],
      //   //   //   ['police'],
      //   //   //   ['taille']
      //   //   // ],
      //   //   // ['bordures',
      //   //   //   ['couleur des bords'],
      //   //   //   ['modifier les angles'],
      //   //   //   ['taille des bords']
      //   //   // ]
      //   // ]
      // ]
    ],
    ['Print',
      ['export',
        'exportStyle'
      ]
    ]
  ];


  selectedNewMenu = 'Application';
  selectedSection = 'ApplicationTheme';

  constructor(public multilinguismService: MultilinguismService,
              public getIconService: GeticonService) {
  }

  ngOnInit(): void {
  }

  getMovingSelectorIndexHorizontally() {
    switch (this.selectedNewMenu) {
      case 'Application' :
        return '0';
      case 'Grids' :
        return '25%';
      case 'Pictograms' :
        return '50%';
      case 'Print' :
        return '75%'
    }
  }

/*   getMovingSelectorIndexVertically(){
    switch (this.selectedNewMenu) {
      case 'Application' :
        return '0';
      case 'Grids' :
        return '0';
      case 'Pictograms' :
        return '0';
      case 'Print' :
        return '50px'
    }
  } */

  selectNewMenu(menu) {
    this.selectedNewMenu = (menu as any[]) [0];
    this.selectedSection = (menu as any[]) [1][0];
  }

  isSelectedMenu(menu) {
    return menu[0] === this.selectedNewMenu;
  }

  isSelectedSection(section) {
    return section === this.selectedSection;
  }

}
