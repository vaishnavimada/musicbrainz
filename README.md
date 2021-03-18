Prerequisites:
Node, NPM

This project was created with npm init. I'm running server on the port 3000. I'm accepting GET requests on / and /artist/:id. Internally I'm making API calls using axios. to musicbraiz.org

To get this server up and running:

- npm install
- node index.js
- Check the functionality using Browser or Postman

Project Structure:
Considering the best practices such as readability, modularity, reusability, testability, and maintainability in mind the project is structure this way:

- index.js(entry point) just has the basic / call and uses the artist router
- Although artist has just endpoint a file has been given to it so that it will be modular and it can be expanded if further requirements arise.
- All the util functions are in separate files because we can mock them or separately test them if required(if they are to complex).
- buildRequestUrl is abstracted out so that we can reuse it as required for future end points.
- I think this project is redable because all files, variables and functions are according to js standards (camelCase) and define it's purpose.
- Since the code satisfies all the above points it is maintainable.

Few Example request URLs:

Coldplay: http://localhost:3000/artist/cc197bad-dc9c-440d-a5b5-d52ba2e14234
<br />
Snoop Dogg: http://localhost:3000/artist/f90e8b26-9e52-4669-a5c9-e28529c47894
<br />
Pink Floyd : http://localhost:3000/artist/83d91898-7763-47d7-b03b-b92132375c47
<br />
