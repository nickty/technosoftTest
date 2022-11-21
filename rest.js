const express = require('express')
const { register } = require('./controller/user')
const app = express()
var { expressjwt: jwt } = require("express-jwt");


app.use(express.json())

app.get('/', (req, res) => {
    res.send('workidng')
})

app.post("/palindrome", (req, res) => {
    const { palindrome } =  req.body

    try {
        checkPalindrome(palindrome);
        function checkPalindrome(string) {

            // find the length of a string
            const len = string.length;
        
            // loop through half of the string
            for (let i = 0; i < len / 2; i++) {
        
                // check if first and last string are same
                if (string[i] !== string[len - 1 - i]) {
                    return res.json({palindrome: false});
                }
            }
            return res.json({palindrome: true});
        }
        
    } catch (error) {
        res.send(error)
    }
})

app.post('/register', register)


const checkUser = jwt({
    getToken: (req, res) => req.body.token,
    secret: "SEcretCanEnvLater",
    algorithms: ["HS256"],
  });

app.get("/getdata", checkUser, (req, res) => {
    try {
      res.json({
        name: "Mizanur Rahman",
        location: "Dhaka, Bangladesh",
      });
    } catch (error) {
      res.send("Your don't have access");
    }
  });





app.listen(4000, () => console.log("Server is working"))