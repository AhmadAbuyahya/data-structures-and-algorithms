function compareTrees(tree1,tree2){
  let counter1=0;
  let counter2=0;
  let traverse=(node)=>{
    if(node.left) traverse(node.left);
    if(node.right) traverse(node.right);
    if(node.left===null&&node.right===null) counter1++;
  };
  let traverse2=(node)=>{
    if(node.left) traverse2(node.left);
    if(node.right) traverse2(node.right);
    if(node.left===null&&node.right===null) counter2++;
  };
  traverse(tree1.root);
  traverse2(tree2.root);

  if(counter1===counter2) return true;
  else return false;
}
module.exports= compareTrees;
