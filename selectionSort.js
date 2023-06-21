// Selection sort
let arr=[20,12,53,3];
function selectionSort(arr){
    let min;
    for(let i=0;i<arr.length;i++){
        min=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j;
            }
        }
        let temp=arr[min];
        arr[min]=arr[i];
        arr[i]=temp;
    }
    return arr;
}
console.log(selectionSort(arr));
