# Utils
Utils is a lightweight pure Javascript library, it helps for handling most generic validation 

### Version
v1.0.1



### Installation
You need Gulp installed globally:
```sh
$ npm i -g gulp
```
```sh
$ git clone [git-repo-url] utils
```
```html
<script type="text/javascript" src="Utils.js"></script>
```

## Utils API
### isFunction
```js
Utils.isFunction(function(){}); // true
```
This method returns a boolean indicating whether this is function


## isObject
```js
Utils.isObject({"key":"value"}); //true
```
This method returns a boolean indicating whether this is Object

## isString

```js
Utils.isString("foo"); //true
```
This method returns a boolean indicating whether this is String

## isBoolean
```js
Utils.isBoolean(true); //true
```
This method returns a boolean indicating whether this is Boolean

## isNumber
```js
Utils.isNumber(953); //true
```
This method returns a boolean indicating whether this is Number

## isEmptyString
```js
Utils.isEmptyString(""); // true
```
This method returns a boolean indicating whether this string is Empty


## isNotEmptyString
```js
Utils.isNotEmptyString("test"); //true
```
This method returns a boolean indicating whether this sting is not empty or string

## trim
```js
Utils.trim(" foo  "); //foo
```
This method is Removes extra space from string beginning/ending


## isArray
```js
Utils.isArray([1,2,3]); //true
```
This method returns a boolean indicating whether this is array

## isEmptyArray
```js
Utils.isEmptyArray([]); //true
```
This method returns a boolean indicating whether this Array is empty

## isError
```js
 Utils.isError(new Error('Whoops!')); //true
```
This method returns a boolean, Checks whether object is error


## isEqual
```js
Utils.isEqual(1, 1); //true
```
This method returns a boolean, Checks whether the 2 vaues is equal

## isNotEqual
```js
Utils.isNotEqual(1, 2); //true
```
This method returns a boolean, Checks whether 2 vaues is not equal or equal


## isGreater
```js
Utils.isGreater(2, 1); //true
```
This method returns a boolean, Checks whether 1st argument is greaterthan with 2nd one

## isLess
```js
Utils.isLess(1, 2); //true
```
This method returns a boolean, Checks whether 1st argument is lessthan with 2nd one


## isTrue
```js
Utils.isTrue(true); //true
```
This method returns a boolean, Checks whether the valuse is true

## isFalse
```js
Utils.isFalse(false); //true
```
This method returns a boolean, Checks whether the valuse is false

## isPercentage
```js
Utils.isPercentage("95.3%"); //true
```
This method returns a boolean, Checks whether a value is percentage


## isNull
```js
Utils.isNull(null); //true
```
This method returns a boolean, Checks whether a value is null

## isDefined
```js
var a = 1;
Utils.isDefined(a); //true
```
This method returns a boolean, Checks whether a value is defined

## isUndefined
```js
Utils.isUndefined(a); //true
```
This method returns a boolean, Checks whether a value is unDefined


## getTimeStamp
```js
Utils.getTimeStamp(); //1454433989971
```
This method returns the timestamp according to local time

## isValidDate
```js
Utils.isValidDate("02/02/2016"); //true
```
This method returns the Boolean if date is valid or invalid


## getDate
```js
Utils.getDate(); //Tue Feb 02 2016 12:25:58 GMT-0500 (EST)
```
This method returns the current date with time according to local time

## getTime
```js
Utils.getTime(12); //9:53 PM
```
This method returns the Time bases on date and formate(12/24 hrs)


## getMonth
```js
Utils.getMonth(); // 2
```
This method returns the month in the specified date according to local time

## getMonthName
```js
Utils.getMonthName(); // February
```
This method returns the month name in the specified date according to local time

## getCurrentDate
```js
Utils.getCurrentDate(); //2
```
This method returns the current date in the specified date according to local time


## getYear
```js
Utils.getYear(); //2016
```
This method returns the current year according to local time

## getDay
```js
Utils.getDay(); //Tuesday
```
This method returns the current day according to local time


## isEmpty
```js
Utils.isEmpty({}); //true
```
This method checks whether is empty Array/Object

## hasProperty
```js
Utils.hasProperty({'foo':'test'},'foo'); //true
```
This method returns a boolean indicating whether the object has the specified property

## toCamelCase
```js
Utils.toCamelCase('foo_bar'); //fooBar
```
This method is convert a camelCase string


## stringify
```js
Utils.stringify([{'foo':'bar'}]); //[{"foo":"bar"}] 
```
This method converts a JavaScript value to a JSON string

## reverse
```js
Utils.reverse("test"); //tset
```
This method reverse a string


## search
```js
Utils.search([{'a':'foo','b':'bar'},{'a':'gama','b':'beta'}], 'gama');//{a: "gama", b: "beta"} 
```
This method returns a filtered object which is matched string

## sort
```js
Utils.sort([{'a':'foo','b':'bar'},{'a':'gama','b':'beta'}], 'a', false); //[{'a':'gama','b':'beta'},{'a':'foo','b':'bar'}]
```
This method returns sort object which is based on key and order(Asc/Des)

## unique
```js
Utils.unique([1,2,3,1,4,2,5]); //[3, 1, 4, 2, 5] 
```
This method removes a dublicate element in array


## About

And of course ksankumar itself is open source with a [public repository][ksankumar]
 on GitHub.


License
----
MIT

**Free Software, Santhosh Kumar Krishnan!**

