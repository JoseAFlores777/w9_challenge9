import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.scss']
})
export class BreadCrumbsComponent implements OnInit {

  public title: string = '';
  public title$: any;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.title$ = this.getRouteArgument().pipe(tap((data) => { console.log(data);}))
      .subscribe(({ title }) => { 
        this.title = title;
        document.title = `W6 - ${title}`;
    })
   }

  ngOnInit(): void {
  }

  getRouteArgument() {
    return this.router.events
      .pipe(
        filter((event): event is ActivationEnd => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data),
      );
  }

}
