var arr = [5,7,3,6];

let stack = [];
let output = [];
let index = [];

let element = 0;
let next = 0;

stack.push(arr[0]);

for(let i=1;i<arr.length;i++){
  next = arr[i];

  if(stack.length !== 0){

    element = stack.pop();

    while(element < next){
      index.push(arr.indexOf(element));
      output.push(i);
      if(stack.length === 0){
        break;
      }
      element = stack.pop();
    }

    if(element > next){
      stack.push(element);
    }
  }

  stack.push(next);
}

while(stack.length !== 0){
  element = stack.pop();
  next = -1;
  index.push(arr.indexOf(element));
  output.push(next);
}

function swap(a,b,i,j){
  let k = a[i];
  let l = b[i];
  a[i] = a[j];
  b[i] = b[j];
  a[j] = k;
  b[j] = l;
}

function partition(a,b,s,e){
  let p = a[e];
  let i = s-1;
  for(let k=s;k<=e-1;k++){
    if (a[k] <= p) {
      i++;
      swap(a,b,i,k);
    }
  }
  swap(a,b,i+1,e);
  return i+1;
}

function quickSort(a,b,s,e){
  if(s < e){
    let p = partition(a,b,s,e);
    quickSort(a,b,s,p-1);
    quickSort(a,b,p+1,e);
  }
}

quickSort(index, output, 0, index.length-1)

console.log(index, output);
