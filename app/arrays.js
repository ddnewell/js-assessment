if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var sum = 0;
        for(var i=0; i<arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    },

    remove : function(arr, item) {
        arr.splice(arr.indexOf(item), 1);
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var ct = 0;
        for(var i=0; i<arr.length; i++) {
            if(arr[i] == item) {
                ct++;
            }
        }
        return ct;
    },

    duplicates : function(arr) {
        var cts = [];
        var dupes = [];
        for(var i=0; i<arr.length; i++) {
            if(dupes.indexOf(arr[i]) == -1 && cts.indexOf(arr[i]) > -1) {
                dupes.push(arr[i]);
            } else {
                cts.push(arr[i]);
            }
        }
        return dupes;
    },

    square : function(arr) {
        var sq = [];
        for(var i=0; i<arr.length; i++) {
            sq.push(arr[i]*arr[i]);
        }
        return sq;
    },

    findAllOccurrences : function(arr, target) {
        var ids = [];
        for(var i=0; i<arr.length; i++) {
            if(arr[i] == target) {
                ids.push(i);
            }
        }
        return ids;
    }
  };
});
