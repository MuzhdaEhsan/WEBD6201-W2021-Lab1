
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
    this.m_fullName = fullName;
    this.m_contactNumber = contactNumber;
    this.m_emailAddress = emailAddress;
  }
  // methods 
  toString() 
  {
    return `Full Name:     ${this.m_fullName}\nContact Number: ${this.m_contactNumber}\nEmail Address: ${this.m_emailAddress}`;
  }

  /**
   * this method returns a json object
   */
  toJSON()
  {
    return 
    {
      "fullName": this.fullName,
      "contactNumber": this.contactNumber,
      "emailAddress": this.emailAddress

    }
  }

  /**
   * this method converts the contact into a comma separated value string
   * @params {string}
   */
  serialize()
  {
    return `${this.m_fullName},${this.m_contactNumber},${this.m_emailAddress}`;
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