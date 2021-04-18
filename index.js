// Importing packages
const path = require('path')
const fs = require('fs')

const fetch = require('node-fetch')

fetch("http://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(postsData => {
    // console.log(postsData)

    fs.writeFile("./result/post.txt",
     JSON.stringify(postsData,undefined, 4),
      err => {
        if (err) {
            console.log('Error writing file')
            throw err
        }
        console.log('Successfully wrote file')
    })
})
