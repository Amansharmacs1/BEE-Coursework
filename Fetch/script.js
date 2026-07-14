console.log("JS is working")
let data="";

fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "SMG",
            body: "Song",
            userId: "123"
        })
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("Response:");
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });