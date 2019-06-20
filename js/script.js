/******************************************
Treehouse Techdegree:
FSJS Project 2 - List Filter and Pagination
By Elizabeth Hinson
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

/*** 
   Created two global variables to store in the DOM, which will call a list of 10 students and student information on a page.***/
let numberOfItems = 10;
const studentInfo = document.querySelectorAll('.student-item');

console.log(studentInfo);

/*** 
   Created a showPage function to hide all of the items on a page except 10 at a time. ***/
const showPage = (studentInfo, page) => {
   const startIndex = (page * numberOfItems) - numberOfItems;
   const endIndex = page * numberOfItems;
      for (let i = 0; i < studentInfo.length; i++) {
      i >= startIndex && i < endIndex;   
      }
   } 
   showPage();
   
// if(numberOfItems[10].studentInfo) {
 //  showPage = numberOfItems[10];
   //

/***
 Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
// const appendPageLinks = () => {

// }
/***targets an element on a page that set up the callback to fire in resonse to the specified event. */
// eventTarget.addEventListener(

// )
// target.addEventListener(type, listener[,options]);
// window.setTimeout(add.5000,2,2);

// Remember to delete the comments that came with this file, and replace them with your own code comments.