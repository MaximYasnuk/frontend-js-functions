function min(arr) {
    if (!Array.isArray(arr)) {
        return;
    }
    var index = 0;
    var minimal = null;
    do {
        if (typeof (arr[index]) == 'number') {
            minimal = (arr[index]);
            break;
        }
        index += 1;
    } while (index < arr.length);
    if (minimal === null) {
        return;
    }
    for (index + 1; index < arr.length; index += 1) {
        if (arr[index] < minimal && typeof(arr[index]) == 'number')
            minimal = arr[index]

    }

    return (minimal);
}

function max(arr){
    if (!Array.isArray(arr)) {
        return;
    }
        var maximum=arr[0];
        var index=0;
        for(index;index<arr.length;index+=1){
            if(arr[index]>=maximum && typeof(arr[index]) == 'number')
                maximum=arr[index]
        }
        return maximum;
}

function sum(){

        var summ=0;
        var index=0;
        for(index;index<arguments.length;index+=1){
            if(typeof arguments[index] == 'number') {
                summ += arguments[index];
            }
        }
        return summ;
}
