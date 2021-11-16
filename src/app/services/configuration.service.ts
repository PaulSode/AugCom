import {Injectable} from '@angular/core';
import {Configuration, Style} from "../types";
import {StyleService} from "./style.service";

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  DEFAULT_DWELL_TIME_ENABLED = false;
  DEFAULT_PICTO_IMAGE_AND_TEXT_VISIBILITY_VALUE = 'default'; // can be 'default' 'imageOnly' and 'textOnly'
  DEFAULT_PICTO_IMAGE_POSITION_VALUE = 'up'; // can take 'down', 'left', 'right', 'up' if imageAndTextVisibiliy is 'default'
  DEFAULT_PICTO_TEXT_STYLE_VALUE = 'default'; // default is taking the font style of the application while other styles applyies only to pictograms
  DEFAULT_REPO_IMAGE_AND_TEXT_VISIBILITY_VALUE = 'default'; // can be 'default' 'imageOnly' and 'textOnly'
  DEFAULT_REPO_IMAGE_POSITION_VALUE = 'up'; // can take 'down', 'left', 'right', 'up' if imageAndTextVisibiliy is 'default'
  DEFAULT_REPO_TEXT_STYLE_VALUE = 'default'; // default is taking the font style of the application while other styles applyies only to pictograms
  DEFAULT_LANGUAGE_VALUE = 'FR';
  DEFAULT_STYLE_BACKGROUNDCOLOR_VALUE = 'lightgrey';
  DEFAULT_STYLE_BORDERCOLOR_VALUE = 'black';
  DEFAULT_STYLE_TEXTCOLOR_VALUE = 'black';
  DEFAULT_STYLE_FONTFAMILY_VALUE = 'Arial';
  DEFAULT_DWELL_TIME_TIMEOUT_VALUE = 2000;
  DEFAULT_LONGPRESS_TIMEOUT_VALUE = 1000;
  DEFAULT_DOUBLE_CLICK_TIMEOUT_VALUE = 200;
  DEFAULT_CURRENT_VOICE_VALUE = '@';
  DEFAULT_MAIN_COLOR_0_VALUE = "white";
  DEFAULT_MAIN_COLOR_1_VALUE = "lightgrey";
  DEFAULT_MAIN_COLOR_2_VALUE = "darkgrey";
  DEFAULT_MAIN_COLOR_3_VALUE = "grey";
  DEFAULT_MAIN_COLOR_4_VALUE = "dimgrey";
  DEFAULT_VOLUME = 1.0;
  DEFAULT_RATE = 1.0;
  DEFAULT_PITCH = 1.0;

  DWELL_TIME_ENABLED = this.DEFAULT_DWELL_TIME_ENABLED;
  PICTO_IMAGE_AND_TEXT_VISIBILITY_VALUE = this.DEFAULT_PICTO_IMAGE_AND_TEXT_VISIBILITY_VALUE;
  PICTO_IMAGE_POSITION_VALUE = this.DEFAULT_PICTO_IMAGE_POSITION_VALUE;
  PICTO_TEXT_STYLE_VALUE = this.DEFAULT_PICTO_TEXT_STYLE_VALUE;
  REPO_IMAGE_AND_TEXT_VISIBILITY_VALUE = this.DEFAULT_REPO_IMAGE_AND_TEXT_VISIBILITY_VALUE;
  REPO_IMAGE_POSITION_VALUE = this.DEFAULT_REPO_IMAGE_POSITION_VALUE;
  REPO_TEXT_STYLE_VALUE = this.DEFAULT_REPO_TEXT_STYLE_VALUE;
  LANGUAGE_VALUE = this.DEFAULT_LANGUAGE_VALUE;
  STYLE_BACKGROUNDCOLOR_VALUE = this.DEFAULT_STYLE_BACKGROUNDCOLOR_VALUE;
  STYLE_BORDERCOLOR_VALUE = this.DEFAULT_STYLE_BORDERCOLOR_VALUE;
  STYLE_TEXTCOLOR_VALUE = this.DEFAULT_STYLE_TEXTCOLOR_VALUE;
  STYLE_FONTFAMILY_VALUE = this.DEFAULT_STYLE_FONTFAMILY_VALUE;
  DWELL_TIME_TIMEOUT_VALUE = this.DEFAULT_DWELL_TIME_TIMEOUT_VALUE;
  LONGPRESS_TIMEOUT_VALUE = this.DEFAULT_LONGPRESS_TIMEOUT_VALUE;
  DOUBLE_CLICK_TIMEOUT_VALUE = this.DEFAULT_DOUBLE_CLICK_TIMEOUT_VALUE;
  CURRENT_VOICE_VALUE = this.DEFAULT_CURRENT_VOICE_VALUE;
  MAIN_COLOR_0_VALUE = this.DEFAULT_MAIN_COLOR_0_VALUE;
  MAIN_COLOR_1_VALUE = this.DEFAULT_MAIN_COLOR_1_VALUE;
  MAIN_COLOR_2_VALUE = this.DEFAULT_MAIN_COLOR_2_VALUE;
  MAIN_COLOR_3_VALUE = this.DEFAULT_MAIN_COLOR_3_VALUE;
  MAIN_COLOR_4_VALUE = this.DEFAULT_MAIN_COLOR_4_VALUE;
  VOLUME = this.DEFAULT_VOLUME;
  RATE = this.DEFAULT_RATE;
  PITCH = this.DEFAULT_PITCH;

// --main-font: Arial, sans-serif;
// --main-picto-font: Arial, sans-serif;

  constructor(public styleService: StyleService) {
  }

  public getConfiguration(): Configuration {
    return {
      'DWELL_TIME_ENABLED': this.DWELL_TIME_ENABLED,
      'PICTO_IMAGE_AND_TEXT_VISIBILITY_VALUE': this.PICTO_IMAGE_AND_TEXT_VISIBILITY_VALUE,
      'PICTO_IMAGE_POSITION_VALUE': this.PICTO_IMAGE_POSITION_VALUE,
      'PICTO_TEXT_STYLE_VALUE': this.PICTO_TEXT_STYLE_VALUE,
      'REPO_IMAGE_AND_TEXT_VISIBILITY_VALUE': this.REPO_IMAGE_AND_TEXT_VISIBILITY_VALUE,
      'REPO_IMAGE_POSITION_VALUE': this.REPO_IMAGE_POSITION_VALUE,
      'REPO_TEXT_STYLE_VALUE': this.REPO_TEXT_STYLE_VALUE,
      'LANGUAGE_VALUE': this.LANGUAGE_VALUE,
      'DEFAULT_STYLE_BACKGROUNDCOLOR_VALUE': this.STYLE_BACKGROUNDCOLOR_VALUE,
      'DEFAULT_STYLE_BORDERCOLOR_VALUE': this.STYLE_BORDERCOLOR_VALUE,
      'DEFAULT_STYLE_TEXTCOLOR_VALUE': this.STYLE_TEXTCOLOR_VALUE,
      'DEFAULT_STYLE_FONTFAMILY_VALUE': this.STYLE_FONTFAMILY_VALUE,
      'DWELL_TIME_TIMEOUT_VALUE': this.DWELL_TIME_TIMEOUT_VALUE,
      'LONGPRESS_TIMEOUT_VALUE': this.LONGPRESS_TIMEOUT_VALUE,
      'DOUBLE_CLICK_TIMEOUT_VALUE': this.DOUBLE_CLICK_TIMEOUT_VALUE,
      'CURRENT_VOICE_VALUE': this.CURRENT_VOICE_VALUE,
      'MAIN_COLOR_0_VALUE': this.MAIN_COLOR_0_VALUE,
      'MAIN_COLOR_1_VALUE': this.MAIN_COLOR_1_VALUE,
      'MAIN_COLOR_2_VALUE': this.MAIN_COLOR_2_VALUE,
      'MAIN_COLOR_3_VALUE': this.MAIN_COLOR_3_VALUE,
      'MAIN_COLOR_4_VALUE': this.MAIN_COLOR_4_VALUE,
      'VOLUME': this.DEFAULT_VOLUME,
      'RATE': this.DEFAULT_RATE,
      'PITCH': this.DEFAULT_PITCH
    }
  }

  public getDefaultConfiguration(): Configuration {
    return {
      'DWELL_TIME_ENABLED': this.DEFAULT_DWELL_TIME_ENABLED,
      'PICTO_IMAGE_AND_TEXT_VISIBILITY_VALUE': this.DEFAULT_PICTO_IMAGE_AND_TEXT_VISIBILITY_VALUE,
      'PICTO_IMAGE_POSITION_VALUE': this.DEFAULT_PICTO_IMAGE_POSITION_VALUE,
      'PICTO_TEXT_STYLE_VALUE': this.DEFAULT_PICTO_TEXT_STYLE_VALUE,
      'REPO_IMAGE_AND_TEXT_VISIBILITY_VALUE': this.DEFAULT_REPO_IMAGE_AND_TEXT_VISIBILITY_VALUE,
      'REPO_IMAGE_POSITION_VALUE': this.DEFAULT_REPO_IMAGE_POSITION_VALUE,
      'REPO_TEXT_STYLE_VALUE': this.DEFAULT_REPO_TEXT_STYLE_VALUE,
      'LANGUAGE_VALUE': this.DEFAULT_LANGUAGE_VALUE,
      'DEFAULT_STYLE_BACKGROUNDCOLOR_VALUE': this.DEFAULT_STYLE_BACKGROUNDCOLOR_VALUE,
      'DEFAULT_STYLE_BORDERCOLOR_VALUE': this.DEFAULT_STYLE_BORDERCOLOR_VALUE,
      'DEFAULT_STYLE_TEXTCOLOR_VALUE': this.DEFAULT_STYLE_TEXTCOLOR_VALUE,
      'DEFAULT_STYLE_FONTFAMILY_VALUE': this.DEFAULT_STYLE_FONTFAMILY_VALUE,
      'DWELL_TIME_TIMEOUT_VALUE': this.DEFAULT_DWELL_TIME_TIMEOUT_VALUE,
      'LONGPRESS_TIMEOUT_VALUE': this.DEFAULT_LONGPRESS_TIMEOUT_VALUE,
      'DOUBLE_CLICK_TIMEOUT_VALUE': this.DEFAULT_DOUBLE_CLICK_TIMEOUT_VALUE,
      'CURRENT_VOICE_VALUE': this.DEFAULT_CURRENT_VOICE_VALUE,
      'MAIN_COLOR_0_VALUE': this.DEFAULT_MAIN_COLOR_0_VALUE,
      'MAIN_COLOR_1_VALUE': this.DEFAULT_MAIN_COLOR_1_VALUE,
      'MAIN_COLOR_2_VALUE': this.DEFAULT_MAIN_COLOR_2_VALUE,
      'MAIN_COLOR_3_VALUE': this.DEFAULT_MAIN_COLOR_3_VALUE,
      'MAIN_COLOR_4_VALUE': this.DEFAULT_MAIN_COLOR_4_VALUE,
      'VOLUME': this.DEFAULT_VOLUME,
      'RATE': this.DEFAULT_RATE,
      'PITCH': this.DEFAULT_PITCH
    }
  }

  public setConfiguration(configuration: Configuration) {
    let lang = (configuration.LANGUAGE_VALUE == 'FR' || configuration.LANGUAGE_VALUE == 'EN') ? configuration.LANGUAGE_VALUE : this.DEFAULT_LANGUAGE_VALUE;
    this.DWELL_TIME_ENABLED = configuration.DWELL_TIME_ENABLED;
    this.PICTO_IMAGE_AND_TEXT_VISIBILITY_VALUE = configuration.PICTO_IMAGE_AND_TEXT_VISIBILITY_VALUE;
    this.PICTO_IMAGE_POSITION_VALUE = configuration.PICTO_IMAGE_POSITION_VALUE;
    this.PICTO_TEXT_STYLE_VALUE = configuration.PICTO_TEXT_STYLE_VALUE;
    this.REPO_IMAGE_AND_TEXT_VISIBILITY_VALUE = configuration.REPO_IMAGE_AND_TEXT_VISIBILITY_VALUE;
    this.REPO_IMAGE_POSITION_VALUE = configuration.REPO_IMAGE_POSITION_VALUE;
    this.REPO_TEXT_STYLE_VALUE = configuration.REPO_TEXT_STYLE_VALUE;
    this.LANGUAGE_VALUE = lang;
    this.STYLE_BACKGROUNDCOLOR_VALUE = configuration.DEFAULT_STYLE_BACKGROUNDCOLOR_VALUE;
    this.STYLE_BORDERCOLOR_VALUE = configuration.DEFAULT_STYLE_BORDERCOLOR_VALUE;
    this.STYLE_TEXTCOLOR_VALUE = configuration.DEFAULT_STYLE_TEXTCOLOR_VALUE;
    this.STYLE_FONTFAMILY_VALUE = configuration.DEFAULT_STYLE_FONTFAMILY_VALUE;
    this.DWELL_TIME_TIMEOUT_VALUE = configuration.DWELL_TIME_TIMEOUT_VALUE;
    this.LONGPRESS_TIMEOUT_VALUE = configuration.LONGPRESS_TIMEOUT_VALUE;
    this.DOUBLE_CLICK_TIMEOUT_VALUE = configuration.DOUBLE_CLICK_TIMEOUT_VALUE;
    this.CURRENT_VOICE_VALUE = configuration.CURRENT_VOICE_VALUE;
    this.MAIN_COLOR_0_VALUE = configuration.MAIN_COLOR_0_VALUE;
    this.MAIN_COLOR_1_VALUE = configuration.MAIN_COLOR_1_VALUE;
    this.MAIN_COLOR_2_VALUE = configuration.MAIN_COLOR_2_VALUE;
    this.MAIN_COLOR_3_VALUE = configuration.MAIN_COLOR_3_VALUE;
    this.MAIN_COLOR_4_VALUE = configuration.MAIN_COLOR_4_VALUE;
    this.VOLUME = configuration.VOLUME;
    this.RATE = configuration.RATE;
    this.PITCH = configuration.PITCH;


    this.styleService.updateStyle(
      this.MAIN_COLOR_0_VALUE,
      this.MAIN_COLOR_1_VALUE,
      this.MAIN_COLOR_2_VALUE,
      this.MAIN_COLOR_3_VALUE,
      this.MAIN_COLOR_4_VALUE)
  }

  public getDefaultStyle() {
    return new Style(
      this.STYLE_BACKGROUNDCOLOR_VALUE,
      this.STYLE_BORDERCOLOR_VALUE,
      this.STYLE_TEXTCOLOR_VALUE);
  }
}
