// const ar=[{f:"samyak",l:"jain",age:10},{f:"saakshi",l:"jain",age:11},{f:"Akshat",l:"jain",age:10}];
// // const a=ar.filter((x)=>x>5);
// // console.log(a)
// let a=ar.reduce((acc,cur)=>{
//   if(acc[cur.age])
//   {
//     acc[cur.age]=acc[cur.age]+1;
//   }
//   else
//   acc[cur.age]=1;
//   return acc; 
//   // return cur.f+" "+cur.l;
// },{});
// console.log(a);
const masterArray = {
    Master: [
      {
        category: "Car",
        vehicleBrand: "CHEVROLET",
        vehicleModel: "AVEO U VA",
        vehicleVariant: "LS",
        "manufacturing-year": "2006-2012",
        "recommended-sku": "104434",
        "upsize-sku": "|||105076|105755|||105076",
        "others-sku": "105755|",
        index: "1",
        createdOn: "2021-07-15T23:29:17.014Z",
        createdBy: "shaftUser",
        modifiedBy: "",
        modifiedOn: "",
      },
      {
        category: "Car",
        vehicleBrand: "CHEVROLET",
        vehicleModel: "AVEO U VA",
        vehicleVariant: "LS TECHNO",
        "manufacturing-year": "2006-2012",
        "recommended-sku": "104434",
        "upsize-sku": "|||105076|105755|||105076",
        "others-sku": "105755|",
        index: "2",
        createdOn: "2021-07-15T23:29:17.014Z",
        createdBy: "shaftUser",
        modifiedBy: "",
        modifiedOn: "",
      },
      {
        category: "Car",
        vehicleBrand: "DATSUN",
        vehicleModel: "GO+",
        vehicleVariant: "D1",
        "manufacturing-year": "2014- 2018",
        "recommended-sku": "104814",
        "upsize-sku": "105049||||105047|105048||",
        "others-sku": "105047|105048",
        index: "39",
        createdOn: "2021-07-15T23:29:17.014Z",
        createdBy: "shaftUser",
        modifiedBy: "",
        modifiedOn: "",
      },
      {
        category: "Car",
        vehicleBrand: "DATSUN",
        vehicleModel: "GO+",
        vehicleVariant: "STYLE",
        "manufacturing-year": "2014- 2018",
        "recommended-sku": "104814",
        "upsize-sku": "105049||||105047|105048||",
        "others-sku": "105047|105048",
        index: "40",
        createdOn: "2021-07-15T23:29:17.014Z",
        createdBy: "shaftUser",
        modifiedBy: "",
        modifiedOn: "",
      },
      {
        category: "Car",
        vehicleBrand: "DATSUN",
        vehicleModel: "GO+",
        vehicleVariant: "T",
        "manufacturing-year": "2014- 2018",
        "recommended-sku": "104814",
        "upsize-sku": "105049||||105047|105048||",
        "others-sku": "105047|105048",
        index: "41",
        createdOn: "2021-07-15T23:29:17.014Z",
        createdBy: "shaftUser",
        modifiedBy: "",
        modifiedOn: "",
      },
      {
        category: "Car",
        vehicleBrand: "DATSUN",
        vehicleModel: "GO+",
        vehicleVariant: "T OPTION",
        "manufacturing-year": "2014- 2018",
        "recommended-sku": "104814",
        "upsize-sku": "105049||||105047|105048||",
        "others-sku": "105047|105048",
        index: "42",
        createdOn: "2021-07-15T23:29:17.014Z",
        createdBy: "shaftUser",
        modifiedBy: "",
        modifiedOn: "",
      },
      {
        category: "Car",
        vehicleBrand: "DATSUN",
        vehicleModel: "GO+",
        vehicleVariant: "A",
        "manufacturing-year": "2018- PRESENT",
        "recommended-sku": "105539",
        "upsize-sku": "103432||||106271|||",
        "others-sku": "106271|",
        index: "43",
        createdOn: "2021-07-15T23:29:17.014Z",
        createdBy: "shaftUser",
        modifiedBy: "",
        modifiedOn: "",
      },
      {
        category: "Car",
        vehicleBrand: "DATSUN",
        vehicleModel: "GO+",
        vehicleVariant: "A(O)",
        "manufacturing-year": "2018- PRESENT",
        "recommended-sku": "105539",
        "upsize-sku": "103432||||106271|||",
        "others-sku": "106271|",
        index: "44",
        createdOn: "2021-07-15T23:29:17.014Z",
        createdBy: "shaftUser",
        modifiedBy: "",
        modifiedOn: "",
      },
      {
        category: "Car",
        vehicleBrand: "DATSUN",
        vehicleModel: "GO+",
        vehicleVariant: "D",
        "manufacturing-year": "2018- PRESENT",
        "recommended-sku": "105539",
        "upsize-sku": "103432||||106271|||",
        "others-sku": "106271|",
        index: "45",
        createdOn: "2021-07-15T23:29:17.014Z",
        createdBy: "shaftUser",
        modifiedBy: "",
        modifiedOn: "",
      },
      {
        category: "Car",
        vehicleBrand: "DATSUN",
        vehicleModel: "GO+",
        vehicleVariant: "T",
        "manufacturing-year": "2018- PRESENT",
        "recommended-sku": "105539",
        "upsize-sku": "103432||||106271|||",
        "others-sku": "106271|",
        index: "46",
        createdOn: "2021-07-15T23:29:17.014Z",
        createdBy: "shaftUser",
        modifiedBy: "",
        modifiedOn: "",
      },
      {
        category: "Car",
        vehicleBrand: "DATSUN",
        vehicleModel: "GO+",
        vehicleVariant: "T (O) W",
        "manufacturing-year": "2018- PRESENT",
        "recommended-sku": "105539",
        "upsize-sku": "103432||||106271|||",
        "others-sku": "106271|",
        index: "47",
        createdOn: "2021-07-15T23:29:17.014Z",
        createdBy: "shaftUser",
        modifiedBy: "",
        modifiedOn: "",
      },
      {
        category: "Car",
        vehicleBrand: "DATSUN",
        vehicleModel: "GO+",
        vehicleVariant: "T VDC",
        "manufacturing-year": "2018- PRESENT",
        "recommended-sku": "105539",
        "upsize-sku": "103432||||106271|||",
        "others-sku": "106271|",
        index: "48",
        createdOn: "2021-07-15T23:29:17.014Z",
        createdBy: "shaftUser",
        modifiedBy: "",
        modifiedOn: "",
      },
      {
        category: "Car",
        vehicleBrand: "DATSUN",
        vehicleModel: "GAY+",
        vehicleVariant: "T W",
        "manufacturing-year": "2018- PRESENT",
        "recommended-sku": "105539",
        "upsize-sku": "103432||||106271|||",
        "others-sku": "106271|",
        index: "49",
        createdOn: "2021-07-15T23:29:17.014Z",
        createdBy: "shaftUser",
        modifiedBy: "",
        modifiedOn: "",
      },
      {
        category: "Car",
        vehicleBrand: "DATSUN",
        vehicleModel: "GO+",
        vehicleVariant: "T(O) VDC",
        "manufacturing-year": "2018- PRESENT",
        "recommended-sku": "105539",
        "upsize-sku": "103432||||106271|||",
        "others-sku": "106271|",
        index: "50",
        createdOn: "2021-07-15T23:29:17.014Z",
        createdBy: "shaftUser",
        modifiedBy: "",
        modifiedOn: "",
      },
      {
        category: "Car",
        vehicleBrand: "DATSUN",
        vehicleModel: "GO+",
        vehicleVariant: "T(O)",
        "manufacturing-year": "2018- PRESENT",
        "recommended-sku": "105539",
        "upsize-sku": "103432||||106271|||",
        "others-sku": "106271|",
        index: "51",
        createdOn: "2021-07-15T23:29:17.014Z",
        createdBy: "shaftUser",
        modifiedBy: "",
        modifiedOn: "",
      },
      {
        category: "Car",
        vehicleBrand: "FIAT",
        vehicleModel: "500",
        vehicleVariant: "ABARTH 595 COMPETIZIONE",
        "manufacturing-year": "2007-2014",
        "recommended-sku": "",
        "upsize-sku": "|||||||",
        "others-sku": "|",
        index: "52",
        createdOn: "2021-07-15T23:29:17.014Z",
        createdBy: "shaftUser",
        modifiedBy: "",
        modifiedOn: "",
      },
    ]
  };
  let a=masterArray.Master;
  let brachArr=a.map((x)=> x.vehicleBrand);
  const branchSet = new Set(brachArr);
  branchSet.forEach(function(value) {
    document.getElementById('vehicleBrand').innerHTML+=`<option value='${value}'>${value}</option>`;
  });

  function Update(th){
    if(th.value=='select')return 0;
    console.log(th);
    let id=th.id;//(vehicleBrand,vahicalModel)vehicleVariant
    let value=th.value; //(brand)
    console.log(id,value);
    let a=masterArray.Master;
    if(id=='vehicleBrand')
    {
      // let array1=a.filter((x)=>{ if(x['vehicleBrand']==value)return x['vehicleModel']});
      let array1=a.filter((x)=> x['vehicleBrand']==value).map((x)=>{return x['vehicleModel']});
      let array2=a.filter((x)=> x['vehicleBrand']==value).map((x)=>{return x['vehicleVariant']});
      const set1 = new Set(array1); 
      const set2 = new Set(array2);
      let str="",str1="";
      set1.forEach(function(value) {
        str+=`<option value='${value}'>${value}</option>`;
      });
      document.getElementById('vehicleModel').innerHTML=str;
      set2.forEach(function(value) {
        str1+=`<option value='${value}'>${value}</option>`;
      });
      document.getElementById('vehicleVariant').innerHTML=str1;
    }
    else if(id=='vahicalModel')
    {
      let array2=a.filter((x)=> x['vehicleBrand']==value).map((x)=>{return x['vehicleVariant']});
      const set2 = new Set(array2);
      let str2="";
      set2.forEach(function(value) {
        str2+=`<option value='${value}'>${value}</option>`;
      });
      document.getElementById('vehicleVariant').innerHTML=str2;
    }
  }