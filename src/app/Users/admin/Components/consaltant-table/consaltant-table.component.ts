import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ConsaltantService } from '../../Services/consaltant.service';


@Component({
  selector: 'app-consaltant-table',
  templateUrl: './consaltant-table.component.html',
  styleUrls: ['./consaltant-table.component.css']
})
export class ConsaltantTableComponent {
  
  consaltant!:any[]
 
  constructor(private elementRef: ElementRef, 
    private consaltantService: ConsaltantService, 
    private router: Router){}

  ngOnInit(): void{
    this.getConsultant();
  }

  public getConsultant(){
    this.consaltantService.getConsultant().subscribe( data =>{
      this.consaltant = data
      console.log(data)
     
    })
  }
  
  viewConsultancy(consultancyId: number){
    this.router.navigate(['Admin/navigation/view-consultancy',{consultancyId}])
  }

  updateConsultant(id: number){
    this.router.navigate(['Admin/navigation/update-consaltant/',{id}])
  }

  openDeleteConfirmation(consultantId: number): void {
    const confirmResult = window.confirm('Are you sure you want to delete this accounting?');

    if (confirmResult) {
      // User clicked OK to delete the accounting
      this.deleteConsultant(consultantId);
    } else {
      // User clicked Cancel or closed the dialog
      // You can handle this case if needed, or simply ignore it
    }
  }

  public deleteConsultant(consultancyId:number){
    this.consaltantService.deleteConsultant(consultancyId).subscribe(
      (data)=>{
        alert('Deleted...!!!')
        this.getConsultant();
      },
      (Error)=>{
        alert('failled...!!!')
      }
    )
  }







  openApprovalConfirmation(id: number): void {
    const confirmResult = window.confirm('Do you want to approve the request?');

    if (confirmResult) {
      // User clicked OK to approve the request
      this.approveRequest(id);
    } else {
      // User clicked Cancel or closed the dialog
      // You can handle this case if needed, or simply ignore it
    }
  }

  approveRequest(id: number): void {
    this.consaltantService.approveRequest(id).subscribe(
      (response) => {
        alert('Request approved successfully');
        this.getConsultant();
      },
      (error) => {
        alert('Failed to approve request');
      }
    );
  }






  goToContract(id: number){
    this.router.navigate(['Admin/navigation/consultancy-contract',{id}])
  }




}
