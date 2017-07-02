function min(arr) {
    if (arr === undefined) {
        return;
    } else {
        var index = 0;
        var minimal = null;
        do {
            index += 1;
            if (typeof (arr[index]) == 'number') {
                minimal = (arr[index]);
                break;
            }
        } while (index < arr.length);
        if (minimal !== null) {
            for (index + 1; index < arr.length; index += 1) {
                if (arr[index] < minimal && typeof(arr[index]) == 'number')
                    minimal = arr[index]

            }

        } else {
            return;
        }
        return (minimal);
    }
}

function max(arr){
    if(arr===undefined){
        return;
    } else {
        var maximum=arr[0];
        var index=0;
        for(index;index<arr.length;index+=1){
            if(arr[index]>=maximum && typeof(arr[index]) == 'number')
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
            if(typeof arguments[index] == 'number') {
                summ += arguments[index];
            }
        }
        return summ;
    }
}
