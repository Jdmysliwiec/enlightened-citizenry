import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PropublicaService } from '../propublica.service';


@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.component.html',
  styleUrls: ['./bill-detail.component.css']
})
export class BillDetailComponent implements OnInit {

  billId: string = null;
  congress: string = null;

  constructor(private route: ActivatedRoute, private location: Location, private propublicaService: PropublicaService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.billId = urlParameters['billId'];
      this.congress = urlParameters['congress'];
    });
    this.propublicaService.getBillDetails(this.billId, this.congress);
  }

}
