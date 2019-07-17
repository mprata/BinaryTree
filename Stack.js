class Stack{
    constructor(){
        this.top = -1;
        this.stack = {};
    }

    push(data){
        this.top = this.top+1;
        this.stack[this.top] = data;
    }

    pop(){
        if(!this.isEmpty()){
            var result = this.stack[this.top];
            this.top = this.top-1;
            return result;
        }
    }

    topElement(){
        return this.stack[this.top];
    }

    isEmpty(){
        if(this.top == -1){
            return true;
        } else {
            return false;
        }
    }

    size(){
        return this.top+1;
    }

}

module.exports = Stack;