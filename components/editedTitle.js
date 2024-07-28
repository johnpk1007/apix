import { LinkButton } from "./linkButton";

const conditions = [",", "Featuring", "&", "X", "x"];
const separators = /([,&]|Featuring| X | x )/;
const stringCheck = (str) => {
  return conditions.some((el) => str.includes(el));
};
const trimArrFunc = (arr)=>{
  let newArr = []
  let tempArr = []
for(let i=0; i<arr.length; i++){
  if(arr[i]==="Featuring"||arr[i]==="&"||arr[i]==="X"||arr[i]==="x"){
    newArr.push(tempArr)
    tempArr=[]
    tempArr.push(arr[i])
  } else if(arr[i]===','){
    tempArr.push(arr[i])
    newArr.push(tempArr)
    tempArr=[]
  } else if (i !== arr.length-1) {
    tempArr.push(arr[i])
  } else if(i === arr.length-1){
    tempArr.push(arr[i])
    newArr.push(tempArr)
    tempArr=[]
  }
}
return newArr
}

export const EditedTitle = ({ artist, page }) => {
  const check = stringCheck(artist);
  if (check) {
    const arr = artist.split(separators);
    const trimArr = arr.map((str) => {
      return str.trim();
    });
    const newArr = trimArrFunc(trimArr)
    console.log('newArr:',newArr)
    return (
      <div>
{
  newArr.map((newArrItem,idx)=>{
    if(newArrItem.length===1){
      return (
        <div key={idx} className="flex font-poppins font-light text-3xl">
        {newArrItem[0]} {page[idx].page ? <LinkButton artist={page[idx].artist} /> : ""}
        </div>
      )
    } else {
      return (
      <div key={idx} className="flex font-poppins font-light text-3xl">
        {newArrItem[0]}{newArrItem[0]==='Featuring'||newArrItem[0]==="&"||newArrItem[0]==="X"||newArrItem[0]==="x"?" ":""}{newArrItem[1]} {page[idx].page ? <LinkButton artist={page[idx].artist} /> : ""}
      </div>
      )
    }
  })
}
      </div>
    )
    
  } else {
    return (
      <div className="flex font-poppins font-light text-3xl">
        {artist}
        {page[0].page ? <LinkButton artist={page[0].artist} /> : ""}
      </div>
    );
  }
};
