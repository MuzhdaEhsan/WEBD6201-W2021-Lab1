/* 
	* Author: Muzhda Ehsan -  & Chibueze Momah - 100771241
	* Date: 26-01-2021
	* File: app.js
 */
"use strict";

(function()
{
    
    function displayHome()
    {
      // Step 1: Setting the background image and colour
	  document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2015/06/25/17/23/landscape-821573_960_720.jpg)";
	  document.body.style.backgroundColor = "#f3f3f3";
	  
	  // Step 2: document.createElements
	  let homeTitle = document.createElement("h1");
      let homeParagraph = document.createElement("p");
	  
	  // Step 3: Setting the values for our elements
	  homeTitle.setAttribute("id", "homeTitle");
      homeParagraph.setAttribute("id", "homeParagraph");
	  
	  // Step 4: Setting up our home page content
	  homeTitle.textContent = "WEBD6201 - GROUP 3";
	  homeParagraph.textContent = "This is the home page for Muzhda and Chibueze's WEBD6201 website. Please explore.";
		
      // Step 5. select the parent element
      let mainContent = document.getElementsByTagName("main")[0];
		
      // Step 6. Add / Insert the element
      mainContent.appendChild(homeTitle);
	  mainContent.appendChild(homeParagraph);

    }

    function displayAbout()
    {
		let container = document.querySelector(".container");
		
		// Element for heading 
        let heading = document.createElement("h1");
        heading.innerText = "About Muzhda Ehsan and Chibueze Momah";
		
	    // Injecting the page heading
        container.appendChild(heading);
		
		// Contents about Muzhda Ehsan
		let MuzhdaContainer = document.createElement("div");
        let MuzhdaContainerText = document.createElement("div");
        let MuzhdaText = document.createElement("p");
		
		MuzhdaContainer.classList.add("justify-content-center");
        MuzhdaContainer.innerHTML = '<h3>Muzhda Ehsan</h3>';

        MuzhdaText.innerText = "...........................";
		
		// Append Muzhda's about text into text container
		MuzhdaContainerText.appendChild(MuzhdaText);
	   
		// Button to view Muzhda's Resume
		let scottResumeButton = document.createElement("a");
		MuzhdaResumeButton.innerText = "View Resume";
		MuzhdaResumeButton.classList.add("btn", "btn-success");
		MuzhdaResumeButton.setAttribute("href", "./Assets/MuzhdaResume.pdf");
		MuzhdaResumeButton.setAttribute("target", "_blank");
		MuzhdaContainerText.appendChild(MuzhdaResumeButton);
	   
		// Add Muzhda's Image
		let MuzhdaImage = document.createElement("div");
		MuzhdaImage.innerHTML = '<img src="../Assets/MuzhdaImage.jpeg" class="col-lg-6"/>'
		MuzhdaImage.classList.add("col-lg-4", "self-img");
		MuzhdaContainer.classList.add("row");
	   
		// Inject Muzhda's image and resume into the element container
		MuzhdaContainer.appendChild(MuzhdaContainerText);
		MuzhdaContainer.appendChild(MuzhdaImage);
	   
	   
	   
	    //Contents about Chibueze Momah
		let ChibuezeContainer = document.createElement("div");
        let ChibuezeContainerText = document.createElement("div");
        let ChibuezeText = document.createElement("p");
		
		ChibuezeContainer.classList.add("justify-content-center");
        Chibueze.innerHTML = '<h3>Chibueze Momah</h3>';

        ChibuezeText.innerText = "...........................";
		
	   // Append Chibueze's about text into text container
       ChibuezeContainerText.appendChild(ChibuezeText);
	   
	   // Button to view Chibueze's Resume
       let ChibuezeResumeButton = document.createElement("a");
       ChibuezeaResumeButton.innerText = "View Resume";
       ChibuezeResumeButton.classList.add("btn", "btn-success");
       ChibuezeResumeButton.setAttribute("href", "./Assets/ChibuezeResume.pdf");
       ChibuezeResumeButton.setAttribute("target", "_blank");
	   ChibuezeContainerText.appendChild(ChibuezeResumeButton);
	   
	   // Add Chibueze's Image
       let ChibuezeImage = document.createElement("div");
       ChibuezeImage.innerHTML = '<img src="../Assets/ChibuezeImage.jpg" class="col-lg-6"/>'
       ChibuezeImage.classList.add("col-lg-4", "self-img");
       ChibuezeContainer.classList.add("row");
	   
		// Inject Chibueze's image and resume into the element container
		ChibuezeContainer.appendChild(ChibuezeContainerText);
		ChibuezeContainer.appendChild(ChibuezeImage);
	   
		// Injecting all elements into the container
		container.appendChild(MuzhdaContainer);
		container.appendChild(ChibuezeContainer);
    }

    function displayProjects()
    {
		let container = document.querySelector(".container");
		
		// Element for heading 
        let heading = document.createElement("h1");
        heading.innerText = "Muzhda & Chibueze's Projects";
		
		// Injecting the page heading
        container.appendChild(heading);
		
		// Muzhda Ehsan's Projects
		let MuzhdaFirstProjectContainer = document.createElement("div");
        let MuzhdaFirstProjectContainerText = document.createElement("div");
        let MuzhdaFirstProjectText = document.createElement("p");
		
		let MuzhdaSecondProjectContainer = document.createElement("div");
        let MuzhdaSecondProjectContainerText = document.createElement("div");
        let MuzhdaSecondProjectText = document.createElement("p");
		
		let MuzhdaThirdProjectContainer = document.createElement("div");
        let MuzhdaThirdProjectContainerText = document.createElement("div");
        let MuzhdaThirdProjectText = document.createElement("p");
		
		// First Project
		MuzhdaFirstProjectContainer.classList.add("justify-content-center");
		MuzhdaFirstProjectContainer.innerHTML = '<h2>1st Project: ........</h2> <img src="./Assets/first_project.jpg" style="width:500px;weight:400px">';
		MuzhdaFirstProjectText.innerText = ".............................";

		MuzhdaFirstProjectContainer.appendChild(MuzhdaFirstProjectText);
		container.appendChild(MuzhdaFirstProjectContainer);
		
		// Second Project
		MuzhdaSecondProjectContainer.classList.add("justify-content-center");
		MuzhdaSecondProjectContainer.innerHTML = '<h2>2nd Project: ........</h2> <img src="./Assets/second_project.jpg" style="width:500px;weight:400px">';
		MuzhdaSecondProjectText.innerText = ".............................";

		MuzhdaSecondProjectContainer.appendChild(MuzhdaSecondProjectText);
		container.appendChild(MuzhdaSecondProjectContainer);
		
		// Third Project
		MuzhdaThirdProjectContainer.classList.add("justify-content-center");
		MuzhdaThirdProjectContainer.innerHTML = '<h2>3rd Project: ........</h2> <img src="./Assets/third_project.jpg" style="width:500px;weight:400px">';
		MuzhdaThirdProjectText.innerText = ".............................";

		MuzhdaThirdProjectContainer.appendChild(MuzhdaThirdProjectText);
		container.appendChild(MuzhdaThirdProjectContainer);
		
		// Chibueze Momah's Projects
		let ChibuezeFirstProjectContainer = document.createElement("div");
        let ChibuezeFirstProjectContainerText = document.createElement("div");
        let ChibuezeFirstProjectText = document.createElement("p");
		
		let ChibuezeSecondProjectContainer = document.createElement("div");
        let ChibuezeSecondProjectContainerText = document.createElement("div");
        let ChibuezeSecondProjectText = document.createElement("p");
		
		let ChibuezeThirdProjectContainer = document.createElement("div");
        let ChibuezeThirdProjectContainerText = document.createElement("div");
        let ChibuezeThirdProjectText = document.createElement("p");
		
		// First Project
		ChibuezeFirstProjectContainer.classList.add("justify-content-center");
		ChibuezeFirstProjectContainer.innerHTML = '<h2>1st Project: ........</h2> <img src="./Assets/project1.jpg" style="width:500px;weight:400px">';
		ChibuezeFirstProjectText.innerText = ".............................";

		ChibuezeFirstProjectContainer.appendChild(ChibuezeFirstProjectText);
		container.appendChild(ChibuezeFirstProjectContainer);
		
		// Second Project
		ChibuezeSecondProjectContainer.classList.add("justify-content-center");
		ChibuezeSecondProjectContainer.innerHTML = '<h2>2nd Project: ........</h2> <img src="./Assets/project2.jpg" style="width:500px;weight:400px">';
		ChibuezeSecondProjectText.innerText = ".............................";

		ChibuezeSecondProjectContainer.appendChild(ChibuezeSecondProjectText);
		container.appendChild(ChibuezeSecondProjectContainer);
		
		// Third Project
		ChibuezeThirdProjectContainer.classList.add("justify-content-center");
		ChibuezeThirdProjectContainer.innerHTML = '<h2>3rd Project: ........</h2> <img src="./Assets/project3.jpg" style="width:500px;weight:400px">';
		ChibuezeThirdProjectText.innerText = ".............................";

		ChibuezeThirdProjectContainer.appendChild(ChibuezeThirdProjectText);
		container.appendChild(ChibuezeThirdProjectContainer);
		
    }

    /**
     * The function displays the service we offer.
     */
    function displayServices()
    {
      let container = document.querySelector(".container");
        
      // Element for heading
      let heading = document.createElement("h1");
      heading.innerText = "Our Services";

      // Inject page heading
      container.appendChild(heading);

      let firstServiceContainer = document.createElement("div");
      let firstServiceContainerText = document.createElement("div");
      let firstServiceText = document.createElement("p");

      let secondServiceContainer = document.createElement("div");
      let secondServiceContainerText = document.createElement("div");
      let secondServiceText = document.createElement("p");

      let thirdServiceContainer = document.createElement("div");
      let thirdServiceContainerText = document.createElement("div");
      let thirdServiceText = document.createElement("p");
	  
	  
	  // Our first service		
      firstServiceContainer.classList.add("justify-content-center");
      firstServiceContainer.innerHTML = '<h2>1st Service: Web Design</h2> <img src="./Assets/webdesign.jpg" style="width:500px;weight:400px">';
      firstServiceText.innerText = "We create the design and layout for websites and webpages.";

      firstServiceContainer.appendChild(firstServiceText);
      container.appendChild(firstServiceContainer);

      // Our second service
      secondServiceContainer.classList.add("justify-content-center");
      secondServiceContainer.innerHTML = '<h2>2nd Service: Business Analysis & Organizational Management</h2> <img src="./Assets/business.jpg" style="width:400px;weight:300px">';
      secondServiceText.innerText = "We help guide businesses in improving processes, products, services and software through data analysis and requirement gathering";

      secondServiceContainer.appendChild(secondServiceText);
	  container.appendChild(secondServiceContainer);

      // Our third service
      thirdServiceContainer.classList.add("justify-content-center");
      thirdServiceContainer.innerHTML = '<h2>3rd Service: Database Management</h2> <img src="./Assets/database.jpeg" style="width:400px;weight:300px">';
      thirdServiceText.innerText = "We develop and maintain an organizations' databases.";

      thirdServiceContainer.appendChild(thirdServiceText);
	  container.appendChild(thirdServiceContainer);

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

        let saveButton = document.getElementById("saveButton");
        saveButton.addEventListener("click", function(event){
           // event.preventDefault();

            let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value, shortMessage.value);
            
            if(contact.serialize())
            {
              //localStorage.setItem((localStorage.length + 1).toString(), contact.serialize());
              window.location.replace("./index.html");
            
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