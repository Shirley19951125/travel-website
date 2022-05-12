function handleRgba(s){
    s=s.splice(0,5);
    s=s.splice(s.length-1,1);
    const arr=s.split(',');
    const color=[];
    for(let i=0;i<3;i++){
        color[0]=parseInt(arr[0],16)
    }
    let newColor=color.join('')
    return [newColor,arr[3]]
}
console.log(handleRgba('rgba(255,255,255,0.4)'))