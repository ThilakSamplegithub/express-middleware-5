# express-middleware-5
I segregated middlewares and routes seperately
But when I couldnot combine segregated midddlewares and routes both
I did 2 activities:1).find start and end time of req and response from server
I did created rollnumber everytime using variables of middle ware for particular method i.e post
But I found bug like I can't use segregated routes and middlewares combinedly. I see only one of them is segregated and other must be used from index.js
For eg If I segregate routes, I will write at what endpoint which Route should I follow
If Iam using segregatted middleware I just export and import and use. Im just cleaning up index.js nothing more than that.
