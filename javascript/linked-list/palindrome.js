module.exports=(list)=>{
  let currentNode=list.head;
  let arr=[];
  let rev=[];
  while(currentNode){
    arr.push(currentNode.value);
    currentNode=currentNode.next;
  }
  for(let i=0;i<arr.length;i++){
    rev.push(arr[arr.length-(1+i)]);
  }
  if(arr.join()===rev.join()){
    return true;
  }else{
    console.log(arr,rev);
    return false;
  }

};
