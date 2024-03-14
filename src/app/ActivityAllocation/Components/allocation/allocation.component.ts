import { Router } from '@angular/router';
import { AllocationService } from '../../Services/allocation.service';
import { DateService } from '../../Services/date.service';
import { Platform } from 'src/app/Model/Platform';
import { Resource } from 'src/app/Model/resource.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.css']
})
export class AllocationComponent implements OnInit {

  platforms:Platform[] = [];
  resources:Resource[] = [];
  activityDate: any;
 
  constructor(private allocationService: AllocationService,
              private router:Router, private dateService: DateService) { }

  ngOnInit(): void {
    this.getPlatforms();
    this.getResources();
  }

  getPlatforms(): void {
    this.allocationService.getPlatforms().subscribe((data: any[]) => {
      this.platforms = data;
    });
  }

  getResources(): void {
    this.allocationService.getResources().subscribe((data: any[]) => {
      this.resources = data;
      this.resources.forEach(resource => {
        resource.isAllocatedActivity = resource.activityAlloc ? true : false;
      });
      console.log(this.resources);
    });
  }
  

  setDate(): void {
    this.dateService.setDate(this.activityDate);
  }

  editDetails(id:number){
    this.router.navigate(["/editallocdetails",id]);
   }

}