import { Injectable, OnInit } from '@angular/core';
import { Istudent } from '../model/interface';
import { Students } from '../const/array';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private _snackbarService: SnackbarService) {}
  StudentsArray: Array<Istudent> = Students;
  newarr: Array<Istudent> = [];
  ngOnInit(): void {}
  getAllStudents(): Array<Istudent> {
    return this.StudentsArray;
  }
  getAddStudents(obj: Istudent): void {
    this.StudentsArray.push(obj);
    this._snackbarService.onOpenSnackBar(`${obj.fname} is added successfully`);
  }
  EmptyControl(msg: HTMLInputElement) {
    this._snackbarService.onOpenSnackBar(`Please write in input control`);
  }
  PuahInNewArr(para: Istudent): void {
    this.newarr.push(para);
  }
  getnewArr() {
    return this.newarr;
  }
  EmptyArr() {
    this.newarr = [];
  }
  indexnumber!: number;
  GetRemoveObject(id: string, fname: string) {
    let index = this.StudentsArray.findIndex((ele) => {
      return ele.id === id;
    });
    this.indexnumber = index;
    let removedObj = this.StudentsArray.splice(index, 1);
    this._snackbarService.onOpenSnackBar(`${fname} is removed successfully`);
  }
  GetSearchIndex(id: string) {
    let index = this.StudentsArray.findIndex((ele) => ele.id === id);
    this.indexnumber = index;
  }
  CreateMethod(obj: Istudent, index: number) {
    this.StudentsArray.splice(index, 1, obj);
  }
}
