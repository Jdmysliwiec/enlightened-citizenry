import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PropublicaService } from '../propublica.service';


@Component({
  selector: 'app-legislators-form',
  templateUrl: './legislators-form.component.html',
  styleUrls: ['./legislators-form.component.css']
})
export class LegislatorsFormComponent implements OnInit {

  filterBy;

  constructor(private propublicaService: PropublicaService) { }

  ngOnInit() {
  }

  findLegislators(form: NgForm) {
    this.filterBy = form.value.state;
    this.propublicaService.getLegislators(form.value.branch);
  }

}
