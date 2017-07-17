import { Component, OnInit, Input } from '@angular/core';
import { PropublicaService } from '../propublica.service';

@Component({
  selector: 'app-list-legislators',
  templateUrl: './list-legislators.component.html',
  styleUrls: ['./list-legislators.component.css']
})
export class ListLegislatorsComponent implements OnInit {
  @Input() childFilterBy: string;

  constructor(private propublicaService: PropublicaService) { }

  ngOnInit() {
  }

}
