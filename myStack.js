function MyStack(){
    this.queue1=[];
    this.queue2=[]
}
MyStack.prototype.push=function(x){
    this.queue1.push(x);
}
MyStack.prototype.pop=function(){
    while(this.queue1.length>1){
        this.queue2.push(this.queue1.shift());
        let ans=this.queue1.shift();
        while(this.queue2.length>0){
            this.queue1.push(this.queue2.shift());
        }
    }
}
MyStack.prototype.top=function(){
    return this.queue1[this.queue1.length-1];
}
MyStack.prototype.empty=function(){
    return this.queue1.length
}