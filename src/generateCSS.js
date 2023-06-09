const fs = require("fs");
const { join } = require("path");

// Generates the premade css file
function generateCSS() {
  fs.writeFile(
    join(__dirname, "..", "dist", "assets", "css", "style.css"),
    `
  html, body {
    height: 100%;
    margin: 0;
    font-size:large
  }
  body {
    background-color: #D2E9F2;
  }
  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid rgb(5, 113, 149);
    background-color: rgb(90, 157, 180);
  }
  h1 {
    height: 100%;
    width: 100%;
    text-align: center;
    color: white;
    font-size: 3rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  .flex-container {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
  }
  
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    width: 100%;
    margin: auto 10%;
  }
  
  .card {
    width: 100%;
    background-color: #AAD0DE;
    color: #F7FCFE;
    border: 2px solid #49849A;
  }
  
  .card-header {
    display: flex;
    flex-direction: column;
    justify-content:flex-end;
    margin: 0;
    background-color: #7FB2C5;
    border-bottom: 2px solid #49849A
  }
  
  .name {
    height: 100%;
  }
  
  .list-item {
    margin-top: 1rem;
  }
  
  @media (max-width: 992px) {
    .container {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  @media (max-width: 650px) {
    .container {
      grid-template-columns: 1fr;
    }
  }
  `,
    (err) => (err ? console.log(err) : console.log("Created CSS"))
  );
}

module.exports = generateCSS;
