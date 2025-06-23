import React from "react";
//import "../styles/About.css"; // Optional: for custom styling

function About() {
  return (
    <div className="container py-4">
      <h1 className="mb-4">About Me</h1>
      <p>
        I am a Part 2 Computer Engineering student with a strong passion for Artificial Intelligence and Machine Learning. I represented Zimbabwe at the 2023 Pan African Mathematics Olympiads and am honored to be a Mutualite Scholar.
      </p>
      <p>
        I specialize in Mobile and Web App development, building smart and efficient digital solutions. My academic journey includes rigorous training across various software and hardware modules listed below.
      </p>

      <h3 className="mt-5">Modules Completed</h3>

      <h5 className="mt-4">Years: 2023-2025</h5>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Semester</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CCLSCE201</td>
            <td>Critical Consciousness and Life Skills</td>
            <td>1</td>
          </tr>
          <tr>
            <td>HCE201</td>
            <td>Object Oriented Programming</td>
            <td>1</td>
          </tr>
          <tr>
            <td>HCE205</td>
            <td>Web & Mobile Technologies</td>
            <td>1</td>
          </tr>
          <tr>
            <td>HCE204</td>
            <td>Mathematics 2 (Calculus)</td>
            <td>1</td>
          </tr>
          <tr>
            <td>HCE203</td>
            <td>Software Project Management</td>
            <td>1</td>
          </tr>
          <tr>
            <td>HCE202</td>
            <td>Digital Signal Processing</td>
            <td>1</td>
          </tr>
          <tr>
            <td>HCE102</td>
            <td>Electrical and Electronic Principles</td>
            <td>1</td>
          </tr>
          <tr>
            <td>HCE103</td>
            <td>Software Engineering</td>
            <td>1</td>
          </tr>
          <tr>
            <td>HCE115</td>
            <td>Operating Systems and Computer Architecture</td>
            <td>2</td>
          </tr>
          <tr>
            <td>SDLSCE101</td>
            <td>Student Development and Life Skills</td>
            <td>2</td>
          </tr>
          <tr>
            <td>HCE104</td>
            <td>Mathematics 1 (Discrete)</td>
            <td>1</td>
          </tr>
          <tr>
            <td>HCE111</td>
            <td>Data Structures and Algorithms</td>
            <td>2</td>
          </tr>
          <tr>
            <td>HCE112</td>
            <td>Digital Electronics and Logic Design</td>
            <td>2</td>
          </tr>
          <tr>
            <td>HCE113</td>
            <td>Visual Programming</td>
            <td>2</td>
          </tr>
          <tr>
            <td>HCE114</td>
            <td>Database Systems</td>
            <td>2</td>
          </tr>
          <tr>
            <td>IDCE101</td>
            <td>Information Digital Skills</td>
            <td>2</td>
          </tr>
          <tr>
            <td>LAICCEIFR100</td>
            <td>French for Computer Engineering & Informatics</td>
            <td>2</td>
          </tr>
          <tr>
            <td>HCE213</td>
            <td> Advanced Database Systems</td>
            <td>2</td>
          </tr>
          <tr>
            <td>HCE214</td>
            <td> Design & Analysis of Algorithms</td>
            <td>2</td>
          </tr>
          <tr>
            <td>HCE211</td>
            <td>Microprocessors and Embedded Systems</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>


    </div>
  );
}

export default About;
