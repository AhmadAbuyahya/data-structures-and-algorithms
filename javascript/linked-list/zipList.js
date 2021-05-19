const LinkedList=require('./index');
module.exports=(list1,list2)=>{
  let outputList=new LinkedList();
  let current1=list1.head;
  let current2=list2.head;
  while(current1||current2){
    if(current1){
      outputList.append(current1.value);
      current1=current1.next;
    }
    if(current2){
      outputList.append(current2.value);
      current2=current2.next;
    }
  }
  return outputList;
};
