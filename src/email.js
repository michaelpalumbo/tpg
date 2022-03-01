

// export function to generate entire page
module.exports = userResponses => {
    // get the user responses from the provided object
    const { title, description, installation, usage, license, licenseURL, contributing, tests, username, email, spdx_id } = userResponses;
        
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>`;
  };