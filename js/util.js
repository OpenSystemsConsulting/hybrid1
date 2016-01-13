angular.module('util', [])

/**
 * A simple example service that returns some data.
 */
.factory('util', function() {
    var obj = {

      dateDiff: function(older,newer) {
        var data= {};

        // Elapsed milliseconds
        data.elapsed = newer.getTime() - older.getTime();

        // Elapsed Days
        data.days = Math.round((((data.elapsed/1000)/60)/60)/24);
        
        // Elapsed Hours
        data.hours = Math.round(((data.elapsed/1000)/60)/60);

        // Elapsed Months
        var monthDiff = (newer.getMonth()+1) - (older.getMonth()+1);
        var yearDiff = newer.getFullYear() - older.getFullYear();
        data.months = monthDiff + (yearDiff*12);

        // Return data
        return data;
      },

      arraysIdentical: function(array1, array2) {
        return (JSON.stringify(array1) === JSON.stringify(array2));
      },

      trimLeadingSpaces: function(s) {
        var index = 0;
        var lastLeadingString = -1;
        while (s.charCodeAt(index) < 33) {
          lastLeadingString++;
          index++;
        }
        if (lastLeadingString >= 0) {
          var sTrim = s.substr(lastLeadingString + 1);
          return sTrim;
        }
        else {
          return s;
        }
      },

      nameSort: function(a,b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      },

      findParentContainerClass: function(target, className) {
          var candidate = target;
          while (candidate !== null) {
            if ($(candidate).hasClass(className) === true) {
              return $(candidate);
            }
            else {
              candidate = candidate.parentNode;
            }
          }
          return null;
      },
      
      findArrayIndexByKey: function(data, key, value) {
        for (var i = 0; i < data.length; i++) {
          if (data[i][key] === value) {
            return i;
          }
        }
        return -1;
      },

      findArrayItemByKey: function(data, key, value) {
        for (var i = 0; i < data.length; i++) {
          if (data[i][key] === value) {
            return data[i];
          }
        }
        return null;
      },

      findArrayItemsByKey: function(data, key, value) {
        var retArray = [];
        for (var i = 0; i < data.length; i++) {
          if (data[i][key] === value) {
            retArray.push(data[i]);
          }
        }
        return retArray;
      },

      findArrayItemByKey: function(data, key, value) {
        for (var i = 0; i < data.length; i++) {
          if (data[i][key] === value) {
            return data[i];
          }
        }
        return null;
      },

      isNumber: function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      },

      getParamFromURL: function(url, key) {
        var params = url.split("?");
        var value = "";
        if (params.length > 1) {
          params = params[1].split("&");
          for (var i = 0; (i < params.length) && (value === ""); i++) {
            if (params[i].indexOf(key) === 0) {
              var param = params[i].split("=");
              if (param.length > 1) {
                value = param[1];
              }
            }
          }
        }
        return decodeURIComponent(value);
      },

      oneDay: 60*60*24*1000,

      scrollBarWidth: null,

      getScrollbarWidth: function() {
          if (scrollBarWidth !== null) {
            return scrollBarWidth;
          }
          var outer = document.createElement("div");
          outer.style.visibility = "hidden";
          outer.style.width = "100px";
          outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

          document.body.appendChild(outer);

          var widthNoScroll = outer.offsetWidth;
          // force scrollbars
          outer.style.overflow = "scroll";

          // add innerdiv
          var inner = document.createElement("div");
          inner.style.width = "100%";
          outer.appendChild(inner);        

          var widthWithScroll = inner.offsetWidth;

          // remove divs
          outer.parentNode.removeChild(outer);

          scrollBarWidth = widthNoScroll - widthWithScroll;
          return scrollBarWidth;
      },

      ShowDataErrorMessage : function(value, message) {
        if ((value === "Error") || (value === "")) {
          if (message === "") {
            message = "An Error has occured retrieving your data.  Please try again or return to the Previous Page.";
          }
          $(".tabContentContainer").html("");
          $("<div class='dataError'>" + message + "</div>").appendTo($(".tabContentContainer"));
          $(".tabContentContainer")[0].scrollIntoViewIfNeeded(false);
          return true;
        }
        else {
          return false;
        }

      },

      GetResponsiveScreenSize: function() {
        var visible = false;
        visible = $("#Screen-XS").is(":visible");
        if (visible === true) {
          return "XS";
        }
        visible = $("#Screen-SM").is(":visible");
        if (visible === true) {
          return "SM";
        }
        visible = $("#Screen-MD").is(":visible");
        if (visible === true) {
          return "MD";
        }
        visible = $("#Screen-LG").is(":visible");
        if (visible === true) {
          return "LG";
        }
        return "";
      },

      copyObject: function(obj) {
        return JSON.parse(JSON.stringify(obj));
      },

      arrayUnique: function(array, property) {
          var a = array.concat();
          for(var i=0; i<a.length; ++i) {
              for(var j=i+1; j<a.length; ++j) {
                if (property === undefined) {
                  if(a[i] === a[j]) {
                      a.splice(j--, 1);
                  }
                }
                else {
                  var x = a[i][property];
                  var x2 = a[j][property];
                  if(x === x2) {
                      a.splice(j--, 1);
                  }
                }
              }
          }

          return a;
      }

    };

    return obj;
});
