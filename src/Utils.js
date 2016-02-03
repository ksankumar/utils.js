/**
 * Copyright (c) 2016 Santhosh Kumar, Krishnan
 * @license The MIT License (MIT)
 * @description Common utility library file for handling generic validation
 * @author Santhosh Kumar Krishnan, https://www.linkedin.com/in/ksankumar
 * @version v1.0.1
 **/
(function() {
    'use strict';
    var version = "v1.0.1",
        /**
         * @return {function} Creating instance
         **/
        Utils = function() {
            return new Utils();
        };
    /**
     * @return {function} Created function prototypes
     **/
    Utils = Utils.prototype = {
        /**
         * @return {String} Utils version
         **/
        version: version,
        /**
         * @return {Array} Days
         **/
        day: 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday'.split(','),
        /**
         * @return {Array} Months
         **/
        month: 'January,February,March,April,May,June,July,August,September,October,November,December'.split(','),
        /**
         * Check function or not
         * @param {function} a
         * @return {Boolean} true/false
         **/
        isFunction: function(a) {
            return (a instanceof Function || typeof a == 'function');
        },
        /**
         * Check Object or not
         * @param {object} a
         * @return {Boolean} true/false
         **/
        isObject: function(a) {
            return ((a instanceof Object || typeof a == 'object') && !this.isNull(a) && !this.isArray(a) && !this.isFunction(a));
        },
        /**
         * Check String or not
         * @param {String} a
         * @return {Boolean} true/false
         **/
        isString: function(a) {
            return ((a instanceof String || typeof a == 'string') && !this.isUndefined(a) && !this.isTrue(a) && !this.isFalse(a));
        },
        /**
         * Check boolean or not
         * @param {Booleab} a
         * @return {Boolean} true/false
         **/
        isBoolean: function(a) {
            return (a instanceof Boolean || typeof a == 'boolean' || this.isTrue(a) || this.isFalse(a));
        },
        /**
         * Check Number or not
         * @param {Number} a
         * @return {Boolean} true/false
         **/
        isNumber: function(a) {
            return ((a instanceof Number || typeof a == 'number') && !isNaN(a));
        },
        /**
         * Check String is empty or not
         * @param {String} a
         * @return {Boolean} true/false
         **/
        isEmptyString: function(a) {
            return this.isString(a) && !a.length;
        },
        /**
         * Check String is not empty
         * @param {String} a
         * @return {Boolean} true/false
         **/
        isNotEmptyString: function(a) {
            return this.isString(a) && a.length;
        },
        /**
         * Remove a extra spaces in string end/start
         * @param {String} a
         * @return {Boolean} true/false
         **/
        trim: function(a) {
            return a.replace(/^\s+|\s+$/g, '');
        },
        /**
         * Check Array or not
         * @param {Array} a
         * @return {Boolean} true/false
         **/
        isArray: function(a) {
            return Object.prototype.toString.call(a) == "[object Array]" && a instanceof Array;
        },
        /**
         * Check Array is empty or not
         * @param {Array} a
         * @return {Boolean} true/false
         **/
        isEmptyArray: function(a) {
            return this.isArray(a) && a.length < 1;
        },
        /**
         * Check Array is not empty or not
         * @param {Array} a
         * @return {Boolean} true/false
         **/
        isNotEmptyArray: function(a) {
            return this.isArray(a) && a.length > 0;
        },
        /**
         * Check Error or not
         * @param {Error Object} a
         * @return {Boolean} true/false
         **/
        isError: function(a) {
            return this.isObject(a) && a instanceof Error;
        },
        /**
         * Check 2 values are equal or not
         * @param {Number} a
         * @param {Number} b
         * @return {Boolean} true/false
         **/
        isEqual: function(a, b) {
            return a === b;
        },
        /**
         * Check 2 values are equal or not
         * @param {Number} a
         * @param {Number} b
         * @return {Boolean} true/false
         **/
        isNotEqual: function(a, b) {
            return a !== b;
        },
        /**
         * Check 2 values are isGreater or not
         * @param {Number} a
         * @param {Number} b
         * @return {Boolean} true/false
         **/
        isGreater: function(a, b) {
            return a > b;
        },
        /**
         * Check 2 values are isLessThan or not
         * @param {Number} a
         * @param {Number} b
         * @return {Boolean} true/false
         **/
        isLess: function(a, b) {
            return a < b;
        },
        /**
         * Check True or not
         * @param {Boolean} a
         * @return {Boolean} true/false
         **/
        isTrue: function(a) {
            return (a === true || a === 'true');
        },
        /**
         * Check false or not
         * @param {Boolean} a
         * @return {Boolean} true/false
         **/
        isFalse: function(a) {
            return (a === false || a === 'false');
        },
        /**
         * Check percentage or not
         * @param {String} a
         * @return {Boolean} true/false
         **/
        isPercentage: function(a) {
            return (this.isString(a) && a.slice(-1) === '%');
        },
        /**
         * Check Null or not
         * @param {String} a
         * @return {Boolean} true/false
         **/
        isNull: function(a) {
            return a === null;
        },
        /**
         * Check values as defined or not
         * @param {String} a
         * @return {Boolean} true/false
         **/
        isDefined: function(a) {
            return !this.isUndefined(a);
        },
        /**
         * Check values as unDefined or not
         * @param {String} a
         * @return {Boolean} true/false
         **/
        isUndefined: function(a) {
            return (this.isNull(a) || typeof a == 'undefined' || a === '' || a === 'undefined');
        },
        /**
         * Check is valid date or not
         * @return {Number} Date
         **/
        isValidDate: function(a) {
            if (this.isUndefined(a)) {
                return false;
            }
            if (toString.call(a) === '[object Date]') {
                return true;
            }
            if (typeof a.replace === 'function') {
                a.replace(/^\s+|\s+$/gm, '');
            }
            var dateFormat = /(^\d{1,4}[\.|\\/|-]\d{1,2}[\.|\\/|-]\d{1,4})(\s*(?:0?[1-9]:[0-5]|1(?=[012])\d:[0-5])\d\s*[ap]m)?$/;
            return dateFormat.test(a);
        },
        /**
         * Get date from Current date
         * @return {Number} Date
         **/
        getDate: function(a) {
            return this.isValidDate(a) ? new Date(a) : new Date();
        },
        /**
         * get a current timeStamp
         * @param {Date} a
         * @return {Boolean} true/false
         **/
        getTimeStamp: function(a) {
            return this.isValidDate(a) ? new Date(a).getTime() : new Date().getTime();
        },
        /**
         * get a current timeStamp
         * @return {Date} Timestamp
         **/
        getTime: function(date, formate) {
            if (this.isDefined(date)) {
                if (date === 12 || date === 24) {
                    formate = date;
                    date = '';
                } else if (!this.isValidDate(date)) {
                    date = this.getDate();
                }
            }
            formate = (formate === 12 || formate === 24) ? formate : 24;

            var hours = this.getHours(date),
                minutes = this.getMinutes(date),
                ampm = '';

            if (formate === 12) {
                ampm = hours >= 12 ? 'PM' : 'AM';
                hours = hours % 12;
                hours = hours ? hours : 12;
                minutes = minutes < 10 ? '0' + minutes : minutes;
            }
            return (hours + ':' + minutes + ' ' + ampm);
        },
        /**
         * Get a current hours from a date/current date
         * @return {Date} date
         **/
        getHours: function(date) {
            return this.getDate(date).getHours();
        },
        /**
         * Get a current minutes from a date/current date
         * @return {Date} date
         **/
        getMinutes: function(date) {
            return this.getDate(date).getMinutes();
        },

        /**
         * Get a Month from Current date
         * @return {Number} Month number
         **/
        getMonth: function(date) {
            return this.getDate(date).getMonth() + 1;
        },
        /**
         * Get a Current Month name from Current date
         * @return {String} Current month
         **/
        getMonthName: function(a) {
            return this.month[this.getDate().getMonth()];
        },
        /**
         * Get a Current date
         * @return {Date} Current date
         **/
        getCurrentDate: function(a) {
            return this.getDate().getDate();
        },
        /**
         * Get a current year
         * @return {Number} Current year
         **/
        getYear: function(a) {
            return this.getDate().getFullYear();
        },
        /**
         * Get current Day
         * @return {String} Current day
         **/
        getDay: function(a) {
            return this.day[this.getDay()];
        },
        /**
         * Check isEmpty Object/Array or not
         * @param {Array/Object} a
         * @return {Boolean} true/false
         **/
        isEmpty: function(a) {
            if (this.isArray(a) || this.isString(a)) {
                return a.length > 0;
            } else if (this.isObject(a)) {
                return Object.getOwnPropertyNames(a).length > 0;
            } else {
                return undefined;
            }
        },
        /**
         * Check isNotEmpty Object/Array or not
         * @param {Array/Object} a
         * @return {Boolean} true/false
         **/
        isNotEmpty: function(a) {
            return !this.isEmpty(a);
        },
        /**
         * Check Object has property or not
         * @param {Object} a
         * @param {String}  property
         * @return {Boolean} true/false
         **/
        hasProperty: function(a, property) {
            return this.isObject(a) && typeof a[property] !== 'undefined';
        },
        /**
         * convert string to CamelCase
         * @param {String} a
         * @return {String} cameCase
         **/
        toCamelCase: function(a, regex) {
            a += '';
            regex = regex || /(\W|_)([A-z0-9])/g;
            return a.replace(regex, function(match, delimiter, letter) {
                return letter.toUpperCase();
            });
        },
        /**
         * Convert object to string
         * @param {Object} a
         * @return {String} Converted string
         **/
        stringify: function(a) {
            return JSON.stringify(a, null);
        },
        /**
         * Reverse a string
         * @param {String} str
         * @return {String}
         **/
        reverse: function(str) {
            var i, s = '',
                len = str.length;
            if (65 < len) {
                return str.split('').reverse().join('');
            }
            for (i = len; i >= 0; i--) {
                s += str.charAt(i);
            }
            return s;
        },
        /**
         * Filtered object with specific string
         * @param {Object} data
         * @param {String} text
         * @param {String} searchBy
         * @param {function} callback
         * @return {Object} filtered object
         **/
        search: function(data, text, searchBy, callback) {
            text = text.trim();
            if (text && text.length > 0) {
                var rex = new RegExp(text, 'i');
                data = data.filter(function(d) {
                    /*search by specific property*/
                    if (this.isString(searchBy)) {
                        return rex.test(d[searchBy]);
                    }
                    /*search by from all properties*/
                    for (var p in d) {
                        if (d.hasOwnProperty(p) && rex.test(d[p])) {
                            return true;
                        }
                    }
                }.bind(this));
            }
            data = data[0] || false;
            if (this.isFunction(searchBy)) searchBy(data);
            if (this.isFunction(callback)) callback(data);
            return data;
        },
        /**
         * Sort object with order by - Assending/Decending
         * @param {Object} data
         * @param {String} key
         * @param {String} orderBy
         * @param {function} callback
         * @return {Object} sorted object
         **/
        sort: function(data, key, orderBy, callback) {
            var asc = orderBy ? 1 : -1,
                dec = orderBy ? -1 : 1;
            data = data.sort(function(a, b) {
                return (a[key] > b[key]) ? asc : (a[key] < b[key]) ? dec : 0;
            });

            if (this.isFunction(orderBy)) orderBy(data);
            if (this.isFunction(callback)) callback(data);

            return data;
        },
        /**
         * get a unique array
         * @param {Array} a
         * @return {Array} unique array values
         **/
        unique: function(ary) {
            var i, j, a = [],
                l = ary.length;
            for (i = 0; i < l; i++) {
                for (j = i + 1; j < l; j++) {
                    if (ary[i] === ary[j]) {
                        j = ++i;
                    }
                }
                a.push(ary[i]);
            }
            return a;
        },
        /**
         * convert transpose array
         * @param {Array} Dimentional array
         * @return {Array} transposed array
         **/
        transpose: function(a) {
            var w = a.length ? a.length : 0,
                h = a[0] instanceof Array ? a[0].length : 0;
            if (h === 0 || w === 0) {
                return [];
            }
            /**
             * @var {Number} i Counter
             * @var {Number} j Counter
             * @var {Array} t Transposed data is stored in this array.
             **/
            var i, j, t = [];
            for (i = 0; i < h; i++) {
                t[i] = [];
                for (j = 0; j < w; j++) {
                    t[i][j] = a[j][i];
                }
            }
            return t;
        }
    };
    /* AMD/RequireJS */
    if (typeof define !== 'undefined' && define.amd) {
        define([], function() {
            return Utils;
        });
    }
    /* CommonJS */
    else if (typeof module !== 'undefined' && module.exports) {
        module.exports = Utils;
    } else { /*Plain javascript library*/
        window.Utils = Utils;
    }
    return Utils;
})();
