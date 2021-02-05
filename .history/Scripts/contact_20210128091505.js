
"use strict";
// contact class
class Contact 
{
  // getters and Setters for private variables
  get FullName() 
  {
    return this.m_fullName;
  }
  set FullName(value) 
  {
    this.m_fullName = value;
  }
  get ContactNumber() 
  {
    return this.m_contactNumber;
  }
  set ContactNumber(value) 
  {
    this.m_contactNumber = value;
  }
  get EmailAddress() 
  {
    return this.m_emailAddress;
  }
  set EmailAddress(value) 
  {
    this.m_emailAddress = value;
  }

  // constructor
  /**
   * 
   * @param {string} fullName 
   * @param {string} contactNumber 
   * @param {string} emailAddress 
   */
  constructor(fullName = "", contactNumber = "", emailAddress = "") 
  {
    this.FullName = fullName;
    this.ContactNumber = contactNumber;
    this.EmailAddress = emailAddress;
  }
  /**
   * this method override the built-in toString for the Contact class
   * @returns {string}
   */
  toString() 
  {
    return `Full Name:     ${this.m_fullName}\nContact Number: ${this.m_contactNumber}\nEmail Address: ${this.m_emailAddress}`;
  }

  /**
   * this method returns a json object
   */
  toJSON()
  {
    return{
      "fullName": this.FullName,
      "contactNumber": this.ContactNumber,
      "emailAddress": this.EmailAddress
    }
  }

  /**
   * this method converts the contact into a comma separated value string
   * @params {string}
   */
  serialize()
  {
    
    if (this.fullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== "")
    {
      return `${this.FullName},${this.ContactNumber},${this.EmailAddress}`;
    }
    else
    {
      console.error("Conact is empty!");
      return null;
    }
    
  }
/**
 * this method takes the comma separated data string and assigns the values to the contact class properties
 * @param {string} data 
 * @return {void}
 */
  deserialize(data)
  {
    let propertyArray = data.split(",");
    this.fullName = propertyArray[0];
    this.contactNumber = propertyArray[1];
    this.emailAddress = propertyArray[2];
  }
}