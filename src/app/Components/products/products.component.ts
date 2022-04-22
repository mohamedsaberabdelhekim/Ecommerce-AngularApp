import { Iproduct } from './../../Modules/iproduct';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Icategory } from '../../Modules/icategory';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, Iproduct, Icategory,OnChanges {

  seloption:any="";
  selopdat:any="";
  idnumber:any='';
  credit_Card:any='';
cou=21;



  clintname: string = '';
  flagsho: boolean = true;
  togg() {
    this.flagsho = !this.flagsho;
  }


  productName:number = 0;
  categroyId:number=0;
  filterprodlist?:Iproduct[];
  filtercatlist?:Icategory[];


  selectChangeHandler () {
    //update the ui
    if(this.productName==0){
      this.filterprodlist=Array.from(this.ProductList);
      return;

    }
    else{

      this.filterprodlist=this.ProductList.filter((prod)=>prod.id==this.productName);

    }


  }

  selectChangeHandlerCategroy () {
    //update the ui
    if(this.categroyId==0){
      this.filterprodlist=Array.from(this.ProductList);
      return;

    }
   this.filterprodlist=this.ProductList.filter((prod)=>prod.CateogryID==this.categroyId);


  }

  changecout(item:any){
   return  item.Quantity--;
  }







  ProductList = new Array<Iproduct>(
    {
      id: 6,
      Name: 'HP Notebook',
      Quantity: 1,
      price: 100,
      image:
        'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp',
      CateogryID: 1,
    },
    {
      id: 1,
      Name: 'Toshiba B77',
      Quantity: 3,
      price: 100,
      image:
        'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp',
      CateogryID: 1,
    },
    {
      id: 2,
      Name: 'HP Envy',
      Quantity: 0,
      price: 100,
      image:
        'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp',
      CateogryID: 2,
    },
    {
      id: 9,
      Name: 'HP Envy1',
      Quantity: 3,
      price: 100,
      image:
        'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp',
      CateogryID: 2,
    }
  );
  categoriesList = new Array<Icategory>(
    {
      id: 1,
      Name: 'tv',
    },
    {
      id: 2,
      Name: 'labtop',
    }
  );
  constructor() {

  }
  ngOnChanges(): void {

  }
  id!: number;
  Quantity!: number;
  price!: number;
  Name!: string;
  image!: string;
  CateogryID!: number;

  ngOnInit(): void {
  }
  ngDoCheck(): void {

    // this.selectChangeHandler();
    // this.selectChangeHandlerCategroy();

    this.selectChangeHandler();
    this.selectChangeHandlerCategroy();
  }
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.



  }
}
