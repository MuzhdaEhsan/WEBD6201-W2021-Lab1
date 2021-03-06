/*
@author: Muzhda Ehsan
@date: 27-Jan-2021
*/
/* custom JavaScript goes here */

//IIFE - Immediately Invoked Function Expression
//AKA - Anonymous Self-Executing Function
//Closure - limits scope leak

"use strict";

let myContact = 
{
  "firstName":"Muzhda",
  "contactNumber":"234234",
  "emailAddress":"muzhda@gmail.com",
  "saysHello":function()
  {
    console.log(`${fullName} says Hello`);
  },
  "someOtherObject": {
    "friendsList": [
      "Peter Parker", "Tony Stark", "Stephen Strange"
    ]
  }
};


(function()
{
    function displayHome()
    {
      let imageSize = "1500px 7000px";
      let imageUrl2 = `url('./grayImage.png')`;
      //document.body.style.backgroundImage = "url('./download.jpg')";
      let bodyImage = document.body.style;
      bodyImage.backgroundSize = imageSize;
      bodyImage.backgroundImage = imageUrl2;
        //let paragraphOneText =
         // "This is a simple site to demonstrate DOM Manipulation for ICE 1";

        //let paragraphOneElement = document.getElementById("paragraphOne");

        //paragraphOneElement.textContent = paragraphOneText;
        //paragraphOneElement.className = "fs-5";

        // Step 1. document.createElement
        let newParagraph = document.createElement("p");
        // Step 2. configure the element
        //newParagraph.setAttribute("id", "paragraphTwo");
        //newParagraph.textContent = "...And this is paragraph two";
        // Step 3. select the parent element
        let mainContent = document.getElementsByTagName("main")[0];
        // Step 4. Add / Insert the element
         mainContent.appendChild(newParagraph);

        //newParagraph.className = "fs-6";

        // another way of injecting content
        //let paragraphDiv = document.createElement("div");
        //let paragraphThree = `<p id="paragraphThree" class="fs-7 fw-bold">And this is the Third Paragraph</p>`;
        //paragraphDiv.innerHTML = paragraphThree;

        // insertions

        // example of inserting before a node
        //newParagraph.before(paragraphDiv);

        // example of inserting after a node
        //newParagraph.after(paragraphDiv);


        // add image 
        //let image = document.createElement("div");
        //let imageUrl = `<img src="./download.jpg" alt="Girl in a jacket" width="500" height="600">`;
        //image.innerHTML = imageUrl
        //newParagraph.before(image);

        // paragraph details 
        let paragraphMain = document.createElement("div");
        let paragraphIndex = `<p id="mainParagraph" class="fs-7 fw-bold">I am a student at Durham College in Computer Programming Analyst program.
        I have a background of software developer in a company with senior developers. 
        I have gained various experiences and I have my own ideas and views. I will try my best to work independently 
        or to have my own company. I like the atmosphere of startups and entrepreneurship and I try not to be unaware of it</p>`;
        paragraphMain.innerHTML = paragraphIndex;

        newParagraph.before(paragraphMain);


        // deletions

        // example of removing a single element
        //paragraphOneElement.remove();

        // example of removeChild
        //mainContent.removeChild(paragraphOneElement);

        // update / modification
        //mainContent.firstElementChild.textContent = "Welcome Home!";

        //mainContent.innerHTML = `<h1 id="firstHeading">Welcome to WEBD6201 - Lab 2</h1>`;
        
        
    }

    function displayAbout()
    {

    }

    function displayProjects()
    {
      let imageSize = "1500px 7000px";
      let imageUrl2 = `url('./grayImage.png')`;
      //document.body.style.backgroundImage = "url('./download.jpg')";
      let bodyImage = document.body.style;
      bodyImage.backgroundSize = imageSize;
      bodyImage.backgroundImage = imageUrl2;
    }

    function displayServices()
    {

    }

    function displayContact()
    {
        let messageArea = document.getElementById("messageArea");
        messageArea.hidden = true;

        // form validation
        let fullName = document.getElementById("fullName");
        fullName.addEventListener("blur", function() {
            if(fullName.value.length < 2)
            {
                fullName.focus();
                fullName.select();
                messageArea.hidden = false;
                messageArea.className = "alert alert-danger";
                messageArea.textContent = "Please enter an appropriate Name";
            }
            else
            {
                messageArea.removeAttribute("class");
                messageArea.hidden = true;
            }
        });

        let sendButton = document.getElementById("sendButton");
        sendButton.addEventListener("click", function(event){
           // event.preventDefault();

            let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
            
            if(contact.serialize())
            {
              localStorage.setItem((localStorage.length + 1).toString(), contact.serialize());
            
            }
            
            //console.log(contact.toString());
            //console.log(contact.serialize());
        });
    }

    function displayContactList()
    {
      if (localStorage.length > 0) 
      {
        let contactList = document.getElementById("contactList");

        let data = "";

        for (let index = 0; index < localStorage.length; index++) 
        {
          let contactData = localStorage.getItem((index + 1).toString());

          console.log(contactData);
          let contact = new Contact();
          contact.deserialize(contactData);

          data += `<tr>
          <th scope="row">${index + 1}</th>
          <td>${contact.FullName}</td>
          <td>${contact.ContactNumber}</td>
          <td>${contact.EmailAddress}</td>
        </tr>`;
        }

        contactList.innerHTML = data;
      }
      
     
    }

    function Start()
    {
        console.log("App Started...");

        switch (document.title) 
        {
          case "Home":
              displayHome();
            break;
          case "About":
              displayAbout();
            break;
          case "Projects":
              displayProjects();
            break;
          case "Services":
              displayServices();
            break;
          case "Contact":
              displayContact();
            break;
            case "Contact-List":
              displayContactList();
            break;
        }
        
    }

    window.addEventListener("load", Start);

})();