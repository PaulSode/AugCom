import { Component, OnInit } from '@angular/core';
import {MultilinguismService} from "../../services/multilinguism.service";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor(public multilinguism: MultilinguismService) { }

  ngOnInit(): void {
  }

}
