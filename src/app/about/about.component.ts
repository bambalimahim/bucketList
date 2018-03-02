import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  goals: any;
  constructor(private route:ActivatedRoute, private router: Router) {
    this.route.params.subscribe(res => console.log(res.id));
   }

  ngOnInit() {
  }

  sendHome(){
    this.router.navigate(['']);
  }
}
