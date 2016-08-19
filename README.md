# Job applicants exercise for HOD

### Dependencies

SQLite3 was used for this website and while it is easy to use once installed, installing it makes use of node-gyp and all that node-gyp entails. Proceed with care if installing on a Windows machine.

### Otherwise to get up and running:

 - `git clone https://github.com/RobSullivan/job-applicants.git`
 - `cd job-applicants`
 - `npm install` 
 - `npm run start-sqlite3`
 - open a browser and navigate to localhost:3000
 - To run the test `npm test`*
 
 
*Mocha is installed as a dev-dependency but may need to also install it globally (`npm install mocha -g`) for the test to be run.



### Things to improve
 - Search by name. This wasn't implemented.
 - ARIA attributes. Only learnt about this incidentally when reading about validation errors here http://govuk-elements.herokuapp.com/errors/example-form-validation-single-question-radio. Will learn more about them.
 - This was my first use of scss and I compiled all the govuk_frontend_toolkit scss into css but only used a very small amount. Next time will select more carefully as CSS now forms ~82% of the code, according to GitHub.
 
Credit goes to *Node.js Web Development Third Edition by David Herron* for introducing me to ES2015 features (namely Promises) that I was able to use in this test.