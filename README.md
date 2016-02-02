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

## API
### Utils.isFunction
```js
Utils.isFunction(function(){}); // true
```
This method returns a boolean indicating whether this is function


## Utils.isObject
```js
Utils.isObject({"key":"value"}); //true
```
This method returns a boolean indicating whether this is Object

## Utils.isString

```js
Utils.isString("foo"); //true
```
This method returns a boolean indicating whether this is String

## Utils.isBoolean
```js
Utils.isBoolean(true); //true
```
This method returns a boolean indicating whether this is Boolean

## Utils.isNumber
```js
Utils.isNumber(953); //true
```
This method returns a boolean indicating whether this is Number

## Utils.isEmptyString
```js
Utils.isEmptyString(""); // true
```
This method returns a boolean indicating whether this string is Empty


## Utils.isNotEmptyString
```js
Utils.isNotEmptyString("test"); //true
```
This method returns a boolean indicating whether this sting is not empty or string

## Utils.trim
```js
Utils.trim(" foo  "); //foo
```
This method is Removes extra space from string beginning/ending


## Utils.isArray
```js
Utils.isArray([1,2,3]); //true
```
This method returns a boolean indicating whether this is array

## Utils.isEmptyArray
```js
Utils.isEmptyArray([]); //true
```
This method returns a boolean indicating whether this Array is empty

## Utils.isError
```js
 Utils.isError(new Error('Whoops!')); //true
```
This method returns a boolean, Checks whether object is error


## Utils.isEqual
```js
Utils.isEqual(1, 1); //true
```
This method returns a boolean, Checks whether the 2 vaues is equal

## Utils.isNotEqual
```js
Utils.isNotEqual(1, 2); //true
```
This method returns a boolean, Checks whether 2 vaues is not equal or equal


## Utils.isGreater
```js
Utils.isGreater(2, 1); //true
```
This method returns a boolean, Checks whether 1st argument is greaterthan with 2nd one

## Utils.isLess
```js
Utils.isLess(1, 2); //true
```
This method returns a boolean, Checks whether 1st argument is lessthan with 2nd one


## Utils.isTrue
```js
Utils.isTrue(true); //true
```
This method returns a boolean, Checks whether the valuse is true

## Utils.isFalse
```js
Utils.isFalse(false); //true
```
This method returns a boolean, Checks whether the valuse is false

## Utils.isPercentage
```js
Utils.isPercentage("95.3%"); //true
```
This method returns a boolean, Checks whether a value is percentage


## Utils.isNull
```js
Utils.isNull(null); //true
```
This method returns a boolean, Checks whether a value is null

## Utils.isDefined
```js
var a = 1;
Utils.isDefined(a); //true
```
This method returns a boolean, Checks whether a value is defined

## Utils.isUndefined
```js
Utils.isUndefined(a); //true
```
This method returns a boolean, Checks whether a value is unDefined


## Utils.getTimeStamp
```js
Utils.getTimeStamp(); //1454433989971
```
This method returns the timestamp according to local time

## Utils.isValidDate
```js
Utils.isValidDate("02/02/2016"); //true
```
This method returns the Boolean if date is valid or invalid


## Utils.getDate
```js
Utils.getDate(); //Tue Feb 02 2016 12:25:58 GMT-0500 (EST)
```
This method returns the current date with time according to local time

## Utils.getTime
```js
Utils.getTime(12); //9:53 PM
```
This method returns the Time bases on date and formate(12/24 hrs)


## Utils.getMonth
```js
Utils.getMonth(); // 2
```
This method returns the month in the specified date according to local time

## Utils.getMonthName
```js
Utils.getMonthName(); // February
```
This method returns the month name in the specified date according to local time

## Utils.getCurrentDate
```js
Utils.getCurrentDate(); //2
```
This method returns the current date in the specified date according to local time


## Utils.getYear
```js
Utils.getYear(); //2016
```
This method returns the current year according to local time

## Utils.getDay
```js
Utils.getDay(); //Tuesday
```
This method returns the current day according to local time


## Utils.isEmpty
```js
Utils.isEmpty({}); //true
```
This method checks whether is empty Array/Object

## Utils.hasProperty
```js
Utils.hasProperty({'foo':'test'},'foo'); //true
```
This method returns a boolean indicating whether the object has the specified property

## Utils.toCamelCase
```js
Utils.toCamelCase('foo_bar'); //fooBar
```
This method is convert a camelCase string


## Utils.stringify
```js
Utils.stringify([{'foo':'bar'}]); //[{"foo":"bar"}] 
```
This method converts a JavaScript value to a JSON string

## Utils.reverse
```js
Utils.reverse("test"); //tset
```
This method reverse a string


## Utils.search
```js
Utils.search([{'a':'foo','b':'bar'},{'a':'gama','b':'beta'}], 'gama');//{a: "gama", b: "beta"} 
```
This method returns a filtered object which is matched string

## Utils.sort
```js
Utils.sort([{'a':'foo','b':'bar'},{'a':'gama','b':'beta'}], 'a', false); //[{'a':'gama','b':'beta'},{'a':'foo','b':'bar'}]
```
This method returns sort object which is based on key and order(Asc/Des)

## Utils.unique
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

