Definitely not comprehensive. This is meant to be a basic memory aid with links to get more details. I'll add to it over time.

#### Install

    $ npm install mongoose --save

#### Connect

    const mongoose = require('mongoose');
    
    const uri = process.env.MONGO_URI || 'mongodb://localhost/test';
    
    mongoose.connect(uri, function(err, res) {
      ...
    });

#### Defining a schema

    const userSchema = new mongoose.Schema({
      name: {
        first: String,
        last: { type: String, trim: true }
      },
      age: { type: Number, min: 0 },
      posts: [ { title: String, url: String, date: Date } ],
      updated: { type: Date, default: Date.now }
    });

##### SchemaTypes
  * String
  * Number
  * Date
  * Buffer
  * Boolean
  * Mixed
  * ObjectId
  * Array

[SchemaTypes](http://mongoosejs.com/docs/schematypes.html)  
[SchemaType API](http://mongoosejs.com/docs/api.html#schematype_SchemaType)  
[SchemaType#default](http://mongoosejs.com/docs/api.html#schematype_SchemaType-default)  
[SchemaType#validate](http://mongoosejs.com/docs/api.html#schematype_SchemaType-default)  
[get](http://mongoosejs.com/docs/api.html#schematype_SchemaType-get)  
[set](http://mongoosejs.com/docs/api.html#schematype_SchemaType-set)  
[select](http://mongoosejs.com/docs/api.html#schematype_SchemaType-select)  


##### Notes

Mixed types and dates that are modified using JavaScript Date methods are not hooked into mongoose change tracking logic. To save changes, let mongoose know about them using `markModified('path')` before calling `save`.

#### Instantiating a model

A model is a constructor compiled from a schema. Model instances represent documents.

    const User = mongoose.model('User', userSchema);
    
    var u = new User({
      name: {
        first: 'Tony',
        last: 'Pujals'
      },
      age: 99
    });


#### Query

[query](http://mongoosejs.com/docs/api.html#query-js)

##### $where

    query.$where('this.comments.length > 10 || this.name.length > 5')
    
    // or
    
    query.$where(function() {
      return this.comments.length > 10 || this.name.length > 5;
    });

[mongoDB $where](http://docs.mongodb.org/manual/reference/operator/query/where/)

##### $all

[mongoose $all](http://mongoosejs.com/docs/api.html#query_Query-all)  
[mongoDB $all](http://docs.mongodb.org/manual/reference/operator/query/all/)

##### $count

http://mongoosejs.com/docs/api.html#query_Query-count

##### $distinct

http://mongoosejs.com/docs/api.html#query_Query-distinct

##### #elemMatch

http://mongoosejs.com/docs/api.html#query_Query-elemMatch

##### #equals

http://mongoosejs.com/docs/api.html#query_Query-equals

##### #exec

http://mongoosejs.com/docs/api.html#query_Query-exec

##### #exists

http://mongoosejs.com/docs/api.html#query_Query-exists

##### #find

http://mongoosejs.com/docs/api.html#query_Query-find

##### findOne

http://mongoosejs.com/docs/api.html#query_Query-findOne

##### findOneAndRemove

http://mongoosejs.com/docs/api.html#query_Query-findOneAndRemove

##### findOneAndUpdate

http://mongoosejs.com/docs/api.html#query_Query-findOneAndUpdate

##### #gt

http://mongoosejs.com/docs/api.html#query_Query-gt

##### #gte

http://mongoosejs.com/docs/api.html#query_Query-gte

##### #hint

http://mongoosejs.com/docs/api.html#query_Query-hint

##### #in

http://mongoosejs.com/docs/api.html#query_Query-in

##### #lean

http://mongoosejs.com/docs/api.html#query_Query-lean

##### #limit

http://mongoosejs.com/docs/api.html#query_Query-limit

##### #lt

http://mongoosejs.com/docs/api.html#query_Query-lt

##### #lte

http://mongoosejs.com/docs/api.html#query_Query-lte

##### #maxScan

http://mongoosejs.com/docs/api.html#query_Query-maxScan

##### #merge

http://mongoosejs.com/docs/api.html#query_Query-merge

##### #mod

http://mongoosejs.com/docs/api.html#query_Query-mod

##### #ne

http://mongoosejs.com/docs/api.html#query_Query-ne

##### #nin

http://mongoosejs.com/docs/api.html#query_Query-nin

##### #nor

http://mongoosejs.com/docs/api.html#query_Query-nor

##### #or

http://mongoosejs.com/docs/api.html#query_Query-or

##### #populate

http://mongoosejs.com/docs/api.html#query_Query-populate

##### #read

http://mongoosejs.com/docs/api.html#query_Query-read

##### #regex

http://mongoosejs.com/docs/api.html#query_Query-regex

##### #remove

http://mongoosejs.com/docs/api.html#query_Query-remove

##### #select

http://mongoosejs.com/docs/api.html#query_Query-select

##### #setOptions

http://mongoosejs.com/docs/api.html#query_Query-setOptions

##### #size

http://mongoosejs.com/docs/api.html#query_Query-size

##### #skip

http://mongoosejs.com/docs/api.html#query_Query-skip

##### #slice

http://mongoosejs.com/docs/api.html#query_Query-slice

##### #snapshot

http://mongoosejs.com/docs/api.html#query_Query-snapshot

##### #sort

http://mongoosejs.com/docs/api.html#query_Query-sort

##### #stream

http://mongoosejs.com/docs/api.html#query_Query-stream

##### #tailable

http://mongoosejs.com/docs/api.html#query_Query-tailable

##### #toConstructor

http://mongoosejs.com/docs/api.html#query_Query-toConstructor

##### #update

http://mongoosejs.com/docs/api.html#query_Query-update

##### #where

http://mongoosejs.com/docs/api.html#query_Query-where
