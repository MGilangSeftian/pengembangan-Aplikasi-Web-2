import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BukuService } from '../services/buku.service';
import { Buku } from '../models/buku.models';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-buku',
  templateUrl: './buku.component.html',
  styleUrl: './buku.component.css'
})
export class BukuComponent implements OnInit, OnDestroy{
  bukuList : Buku[] = [];
  private getBukuSub : Subscription = new Subscription();

  private messageSub : Subscription = new Subscription();
  messageExecute : string="";

  mode : string ='Simpan';
// pagination
  p: number = 1;

  constructor(public bukuSevice : BukuService){

  }

  ngOnInit(): void {
    this.getBukuSub = this.bukuSevice.getBukuListener()
    .subscribe((value : Buku[])=>{
      this.bukuList = value
    });
    this.messageSub = this.bukuSevice.exexuteBukuListener()
    .subscribe((value)=>{
      this.messageExecute = value;
    })
    this.bukuSevice.getBuku();
  }

  ngOnDestroy(): void {
  }

  tampilData(buku : Buku, form : NgForm){
    var gen1 : boolean = false;
    var gen2 : boolean = false;
    var gen3 : boolean = false;

    buku.genre.forEach((value)=>{
      if(value.toUpperCase().trim() === "BIOGRAFI"){
        gen1 = true;
      }else if (value.toUpperCase().trim() === "PENDIDIKAN"){
        gen2 = true;
      }else if (value.toUpperCase().trim() === "LAINNYA"){
        gen3 = true;
      }

    });
    form.setValue({
      judul : buku.judul,
      penulis : buku.penulis,
      gen1 : gen1,
      gen2 : gen2,
      gen3 : gen3
    })
  }

  simpanBuku(form : NgForm){

    if(form.invalid){
      console.log('Tidak valid');
      alert('Data tidak valid');
      return;
    }

    let genres : string[] = [];
      if (form.value.genre1==true){
        genres.push('biografi')
      }

      if (form.value.genre2==true){
        genres.push('pendidikan')
      }

      if (form.value.genre3==true){
        genres.push('lainnya')
      }
    
    console.log("Pengujian Klik")
    console.log(form.value.judul);
    console.log(form.value.penulis);
    console.log(genres);

    this.bukuSevice.addBuku(form.value.judul, form.value.penulis, genres);
    form.resetForm();

  }

  hapusBuku(buku : Buku){
    if(confirm('Hapus Data Buku : ' + buku.judul)){
      this.bukuSevice.deleteBuku(buku);

    }
  };

}