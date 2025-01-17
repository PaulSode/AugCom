import { Component, OnInit } from '@angular/core';
import {saveAs as importedSaveAs} from 'file-saver';
import {MultilinguismService} from "../../services/multilinguism.service";

@Component({
  selector: 'app-dialog-logout-app',
  templateUrl: './dialog-logout-app.component.html',
  styleUrls: ['./dialog-logout-app.component.css']
})
export class DialogLogoutAppComponent implements OnInit {

  constructor(public multilinguism: MultilinguismService) { }

  ngOnInit(): void {
  }

  putYes(){
    const blob = new Blob([""], {type: 'text/txt'});
    importedSaveAs(blob, 'close161918.txt');
  }
}
