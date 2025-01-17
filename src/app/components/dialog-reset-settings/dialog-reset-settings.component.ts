import { Component, OnInit } from '@angular/core';
import {ConfigurationService} from '../../services/configuration.service';
import {MultilinguismService} from '../../services/multilinguism.service';

@Component({
  selector: 'app-dialog-reset-settings',
  templateUrl: './dialog-reset-settings.component.html',
  styleUrls: ['./dialog-reset-settings.component.css']
})
export class DialogResetSettingsComponent implements OnInit {

  constructor(private configurationService: ConfigurationService,
              public multilinguismService: MultilinguismService) { }

  ngOnInit(): void {
  }

  resetConfig() {
    this.configurationService.setConfiguration(this.configurationService.getDefaultConfiguration());
    //console.log('config reset', this.configurationService.getConfiguration());
  }
}
