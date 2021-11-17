import {Injectable} from '@angular/core';
import {BoardService} from './board.service';
import {FolderGoTo, GridElement, Page} from '../types';
import {GridElementService} from './grid-element.service';
import {MultilinguismService} from "./multilinguism.service";
import {ConfigurationService} from "./configuration.service";

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  constructor(public boardService: BoardService,
              public gridElementService: GridElementService,
              public multilinguism: MultilinguismService,
              public configuration: ConfigurationService) {
  }

  urlList: any[] = [];
  buttonHTML = '<input id="print" type="button" value="' +this.multilinguism.translate('exportPDF')+'" style="margin-left: 25%; height: 50px; width: 50%; font-size: x-large;">\n';

  footer: string | ArrayBuffer = "";
  header: string | ArrayBuffer = "";
  buttonEnableHeader = false;
  buttonEnableFooter = false;
  typeChoiceHeader = "text";
  typeChoiceFooter = "text";

  heightHeader = "5%";
  heightFooter = "0%";
  height = "90%";

  printDiv() {
    this.checkSize();
    const wind = window.open('stable/#/print');
    wind.onload = () => {
      wind.document.head.innerHTML = "";
      wind.document.body.innerHTML =
        '<style type="text/css" media="print">\n' +
        '  @page { size: landscape; }\n' +
        '</style>'+
        '<style>' + this.getCSSKeyboard() + '</style>'
        + '<style>' + this.getCSSIndex() + '</style>'
        + '<style>' + this.getCSSPrint() + '</style>'
        + this.getAllHTML();
      this.recEventSettingFunction(wind);
    };

  }

  checkSize(){
    if (this.buttonEnableHeader && this.buttonEnableFooter){
      if (this.typeChoiceHeader == "text" && this.typeChoiceFooter == "text"){
        this.heightHeader = "5%";
        this.heightFooter = "5%";
        this.height = "90%";
      }else if (this.typeChoiceHeader == "img" && this.typeChoiceFooter == "text"){
        this.heightHeader = "25%";
        this.heightFooter = "5%";
        this.height = "65%";
      }else if (this.typeChoiceHeader == "text" && this.typeChoiceFooter == "img"){
        this.heightHeader = "5%";
        this.heightFooter = "25%";
        this.height = "70%";
      }else {
        this.heightHeader = "25%";
        this.heightFooter = "25%";
        this.height = "50%";
      }
    }else if (this.buttonEnableHeader && !this.buttonEnableFooter){
      if (this.typeChoiceHeader == "text"){
        this.heightHeader = "5%";
        this.heightFooter = "0%";
        this.height = "95%";
      }else {
        this.heightHeader = "25%";
        this.heightFooter = "0%";
        this.height = "75%";
      }
    }else if (!this.buttonEnableHeader && this.buttonEnableFooter){
      if (this.typeChoiceFooter == "text"){
        this.heightHeader = "5%";
        this.heightFooter = "5%";
        this.height = "90%";
      }else {
        this.heightHeader = "5%";
        this.heightFooter = "25%";
        this.height = "70%";
      }
    }
  }

  recEventSettingFunction(wind) {
    wind.document.getElementById('print').onclick = () => {
      wind.document.getElementById('print').hidden = true;
      wind.print();
      wind.document.body.innerHTML = this.buttonHTML + wind.document.body.innerHTML;
      this.recEventSettingFunction(wind);
    }
  }

  getAllHTML() {
    let tempHTML = this.buttonHTML;

    this.boardService.board.PageList.forEach(page => {
      const tempList = [];
      if (page !== null && page !== undefined) {
        for (const id of page.ElementIDsList) {
          tempList.push(this.boardService.board.ElementList.find(elt => {
            return elt.ID === id;
          }));
        }
        tempHTML = tempHTML + this.getHTML(page, tempList);
      }
    });

    return tempHTML;
  }

  getHTML(page: Page, elementList: any[]) {
    let numberOfCols = this.boardService.getNumberOfColsForPage(page);
    let numberOfRows = this.boardService.getNumberOfRowsForPage(page);

    let temp = '';
    const numberOfPages = Math.ceil(elementList.length / (numberOfCols * numberOfRows));
    for (let i = 0; i < numberOfPages; i++) {
      const beginning = i * (numberOfCols * numberOfRows);
      const ending = (i + 1) * (numberOfCols * numberOfRows);
      temp = temp +
        this.wrapperBegin(page, i) +
        this.innerHTML(elementList.slice(beginning, ending)) +
        this.wrapperEnd();
    }
    return temp;
  }

  wrapperBegin(page: Page, i: number) {
    let numberOfCols = this.boardService.getNumberOfColsForPage(page);
    let numberOfRows = this.boardService.getNumberOfRowsForPage(page);
    let id = page.ID + '- page ' + (((i as number) + (1 as number)) as number);

    return '<div class="idHeader section-to-print">' + id + this.getHeader() + '<div class="version">'+this.configuration.VERSION+'</div></div>\n' +
      '<div class="keyboard section-to-print" id="' + id + '">\n' +
      '<div class="wrapper height-width-100"' +
      'style="grid-template-columns: repeat(' + numberOfCols +
      ', 1fr) ;grid-template-rows: repeat(100, ' +
      (100 / numberOfRows) + '%) ;"' + '>\n';
  }

  getShadow(element: GridElement) {
    if ((element.Type as FolderGoTo).GoTo !== undefined) {
      let s = '; box-shadow: 3px -3px 0px -2px '
        + (this.gridElementService.getStyle(element).BackgroundColor === undefined ||
        this.gridElementService.getStyle(element).BackgroundColor == null ?
          '#d3d3d3' : this.gridElementService.getStyle(element).BackgroundColor);
      s = s + ' , 4px -4px '
        + (this.gridElementService.getStyle(element).BorderColor === undefined ||
        this.gridElementService.getStyle(element).BorderColor == null ?
          'black' : this.gridElementService.getStyle(element).BorderColor);
      return s;
    } else {
      return '';
    }
  }

  innerHTML(elementList: GridElement[]) {
    let innerValue = '';

    elementList.forEach(element => {
      if (element.Type !== 'empty') {
        const url = this.boardService.getSimpleImgUrl(element);
        this.urlList.push(url);

        let row = (element.rows === null || element.rows === undefined) ? '' :
          'grid-row-start:' + (element.y + 1) + ';grid-row-end:' + (element.y + 1 + element.rows) + '; ';
        let column = (element.cols === null || element.cols === undefined) ? '' :
          'grid-column-start:' + (element.x + 1) + ';grid-column-end:' + (element.x + 1 + element.cols) + '; ';
        let span = (row === '' && column === '') ? '' : 'style="' + row + column + '" ';

        innerValue = innerValue +
          '<div class="elementContainer"' + span + '>' +
          '<div class="' + (url === '' ? 'element noImageElement' : 'element')
          + '" style="background-color:' + this.gridElementService.getStyle(element).BackgroundColor
          + '; border-color:' + this.gridElementService.getStyle(element).BorderColor + this.getShadow(element) + '">\n' +
          '<div class="image" style="background-image: ' + url + '"></div>\n' +
          '<div class="adjustableText">\n' +
          this.boardService.getLabel(element) +
          '</div>\n' +
          '</div>\n' +
          '</div>\n';
      }
    });
    return innerValue;
  }

  wrapperEnd() {
    return '</div>' + '</div>'  + this.getFooter() + '<br>';
  }

  getHeader(){
    if (this.buttonEnableHeader){
      if (this.typeChoiceHeader == 'text'){
        return '<br>' + this.header;
      }else {
        return "<img class='adjustableText sizeHeaderFooter' src='" + this.header + "' alt=''>";
      }
    }else {
      return "";
    }
  }

  getFooter(){
    if (this.buttonEnableFooter){
      if (this.typeChoiceFooter == 'text'){
        return '<br>' + '<div class="idFooter section-to-print">' + this.footer + '</div>';
      }else {
        return '<br>' +
          '<div class="idFooter section-to-print">' +
              '<img class="adjustableText sizeHeaderFooter" src="' + this.footer + '" alt="">' +
          '</div>';
      }
    }else {
      return "";
    }
  }

  getCSSPrint() {
    return '@media print {\n' +
      '  body * {\n' +
      '    visibility: hidden;\n' +
      ' height: 0; \n' +
      '  }\n' +
      '  .section-to-print, .section-to-print * {\n' +
      '    visibility: visible;\n' +
      '  }\n' +
      'body{\n' +
      '  margin: 0 0 0 0;\n' +
      '  height: 100%;\n' +
      '  width: 100%;\n' +
      '  overflow: visible;\n' +
      '}\n' +
      '}'
  }

  getCSSKeyboard() {
    return '.idHeader{\n' +
      '  height: ' + this.heightHeader + ';\n' +
      '  width: 100%;\n' +
      '}\n' + '.idFooter{\n' +
      '  height: ' + this.heightFooter + ';\n' +
      '  width: 100%;\n' +
      '}\n' + '.keyboard{\n' +
      '  height: ' + this.height + ';\n' +
      '  width: 100%;\n' +
      'box-sizing: border-box;\n' +
      'border-color: black;\n' +
      'border-width: 1px;\n' +
      'border-style: solid;\n' +
      '-webkit-print-color-adjust: exact;\n' +
      'color-adjust: exact;\n' +
      '}\n' +
      '\n' +
      '.keyboard .wrapper{\n' +
      '  display: grid;\n' +
      '  height:100%;\n' +
      '  width:100%;\n' +
      '  overflow: hidden;\n' +
      '  background-size: contain;\n' +
      '  background-repeat: no-repeat;\n' +
      '  background-position: center;\n' +
      '  visibility: visible;\n' +
      'background-image : ' + this.boardService.background +
      '}\n' +
      '\n' +
      '.keyboard .wrapper .elementContainer{\n' +
      '  float:left;\n' +
      '  height:100%;\n' +
      '  width:100%;\n' +
      '  min-height: 1cm;\n' +
      '  min-width: 1cm;\n' +
      '  visibility: hidden;\n' +
      '}\n' +
      '\n' +
      '.keyboard .wrapper .elementContainer .element {\n' +
      '  cursor: pointer;\n' +
      '  height: calc(100% - 5px);\n' +
      '  width: calc(100% - 5px);\n' +
      '  visibility: visible;\n' +
      '  border-radius: 10px;\n' +
      '  border-style: solid;\n' +
      '  border-width: 3px;\n' +
      '  box-sizing: border-box;\n' +
      '  overflow: hidden;\n' +
      '  display: grid;\n' +
      '  grid-template-rows: 80% 20%;\n' +
      '  align-items: center;\n' +
      '}\n' +
      '\n' +
      '.keyboard .wrapper .elementContainer .noImageElement{\n' +
      '  grid-template-rows: 40% 20%;\n' +
      '}\n' +
      '\n' +
      '.keyboard .wrapper .elementContainer .element .image {\n' +
      '  height: calc(100% - 10px);\n' +
      '  margin-top: 5px;\n' +
      '  width: 90%;\n' +
      '  margin-left: 5%;\n' +
      '  visibility: visible;\n' +
      '  align-items: center;\n' +
      '   background-size: contain;\n' +
      '   background-repeat: no-repeat;\n' +
      '   background-position: center;' +
      '}\n' +
      '\n' +
      '.keyboard .wrapper .elementContainer .label {\n' +
      '  min-font-size: 1vh;\n' +
      '  font-size: 2vh;\n' +
      '  height: 20%;\n' +
      '  width: 90%;\n' +
      '  margin-left: 5%;\n' +
      '  visibility: visible;\n' +
      '}\n' +
      '\n' +
      '.adjustableText {\n' +
      '  text-align: center;\n' +
      '  font-size: 1.8vmin;\n' +
      '  width: 100%;\n' +
      '  height: fit-content;\n' +
      '  align-items: center;\n' +
      '  vertical-align: middle;\n' +
      '  overflow-wrap: break-word ;\n' +
      '  word-break: break-all;\n' +
      '}\n' +
      '\n' +
      '.sizeHeaderFooter {\n' +
      '  max-width: 200px;\n' +
      '  max-height: 200px;\n' +
      '  display: block;\n' +
      '  margin: auto;\n' +
      '  width: auto;\n' +
      '}\n';
  }

  getCSSIndex() {
    return 'html{\n' +
      '  height: 100%;\n' +
      '  width: 100%;\n' +
      '  margin-left: 0%;\n' +
      '  background-color: white;\n' +
      '}\n' +
      '\n' +
      'body{\n' +
      '  margin: 0 0 0 0;\n' +
      '  height: 100%;\n' +
      '  width: 100%;\n' +
      '  overflow: scroll;\n' +
      '}\n';
  }
}
