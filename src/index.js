
function min (arr){
    if(arr===undefined){
        return;
    } else{
        var minimum=arr[0];
        var index=0;
        for(index;index<arr.length;index+=1) {
            if (typeof (arr[index]) == 'number') {
                if (minimum === undefined) {
                    minimum = arr[index];
                    continue;
                }
                if (arr[index] <= minimum) {
                    minimum = arr[index]
                }
            }
        }
    }
    return minimum;
}

function max(arr){
    if(arr===undefined){
        return;
    } else {
        var maximum=arr[0];
        var index=0;
        for(index;index<arr.length;index+=1){
            if(arr[index]>=maximum)
                maximum=arr[index]
        }
        return maximum;
    }
}

function sum(){
    if(arguments===undefined){
        return;
    } else {
        var summ=0;
        var index=0;
        for(index;index<arguments.length;index+=1){
            if(typeof arguments[index] !== 'number')
                continue;
            summ+=arguments[index];
        }
        return summ;
    }
}
