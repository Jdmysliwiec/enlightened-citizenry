import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PropublicaService } from '../propublica.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {

  memberId: string = null;
  member: any = null;

  constructor(private route: ActivatedRoute, private location: Location, private propublicaService: PropublicaService, private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.memberId = urlParameters['id'];
    });
    this.propublicaService.getMemberBillsIntroduced(this.memberId);
    this.propublicaService.getMemberBillsUpdated(this.memberId);
    this.propublicaService.getVoteRecord(this.memberId);
  }
}
