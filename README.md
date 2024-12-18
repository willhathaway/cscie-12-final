### **Will Hathaway**

CSCI E-12  
Final Project Report

### **Strategy**

**Purpose and Goals**  
The purpose of this website will be to educate users on the development of color theory over time. There will be different pages with straightforward, simple-to-understand articles on the different theories and the people who proposed them. This educational content will be supplemented with some dynamic CSS animations and JavaScript interactive elements. The ultimate goal is that visitors to the site will leave with a greater understanding of the history of color theory, and the “colorful” cast of characters who contributed to its development.

**Primary Audience**  
The primary audience will be designers with an interest in the cultural and scientific history behind the principles they work with. It will hopefully be engaging enough to hold their attention, using interactive elements to help cement the understanding of these ideas. Personally, as a designer with red/green colorblindness, I have always been interested in learning more about this subject. I also appreciate a “hands-on”, practical approach to learning. If the site delivers this information in a way that I can understand, I’d consider it a success.

**Secondary Audience**  
The secondary audience will be young students of art or science. My goal is to deliver this information as simply as possible, while striking a balance between the underlying math and physics of interacting wavelengths of light, the biology of the human eye, and the artistic possibilities these ideas offer.

### **Scope and Structure**

**Critical Features**

1. **Introductory Page**: Overview of the purpose and content of the site.  
2. **Interactive Elements**: Features JavaScript and CSS-based animations to demonstrate color theory concepts dynamically.  
3. **Resources Page**: A collection of links and citations for further exploration.  
4. **Accessible Design**: Ensures usability through the WAVE accessibility checker.  
5. **Responsive Design**: Tailors the experience for both large and small screens.

**Organizational Sketch**  
A rough flowchart representing the site's structure:

* **Homepage**  
  * Overview and introduction to color theory and the purpose of the site.  
* **“Lightroom” Page**  
  * Interactive elements for mixing colors and understanding theories.  
* **“Color Wheel” Page**  
  * This page displays some of the different color divisions various scientists and artists have put forward.  
* **Resources Page**  
  * Curated list of citations and further reading links.  
* **Contributors Page (UNFINISHED)**  
  * This page will provide more background and historical context for the people and ideas featured on the site.  
* **Applications Page (UNFINISHED)**  
  * This page will explain some of the artistic and scientific advances that have come from these ideas.

### **Skeleton**

The wireframe for my basic pages emphasize simplicity and clarity, with a standard layout and universal styles.

* **Header**: Persistent with navigation links and a notebook mode toggle.  
* **Main Content**: Each page delivers focused content, supplemented with interactive and visual elements where applicable.  
* **Footer**: Simple footer with copyright information.

### **Surface**

The surface design uses a theme inspired by an artist's sketchbook, featuring:

* A clean design and navigation system, with an optional “Notebook Mode” for a more engaging visual experience, like flipping through an ancient manuscript. This is disabled by default for accessibility.  
* A visually intuitive navigation system.  
* Dynamic JavaScript interactions that enhance the user experience and understanding of the content

### **Implementation**

**HTML**

* I have six HTML files which follow a similar layout, one for each page on the site.

**CSS**

* I did my best to use reusable universal styles where possible.  
* I used comments to organize my CSS into sections, starting with more universal styles with more specific styles towards the bottom of the stylesheet.  
* CSS animations were used for interactive elements like the "light button" and the dropdown menu.

**JavaScript**

* JavaScript was used to create interactive features:  
  * **Prism Demo:** The prism demo is a simple depiction of Newton’s prism experiment, showing the separation of white light into the colors of the rainbow. This also required some knowledge of CSS gradients and positioning.  
  * **Painting Demo:** The painting demo is an attempt at showing the connection between color and mood. I used similar image-switching as in the previous homework assignment, and added HTML/CSS overlays of translucent color on top of the paintings.  
  * **Notebook Mode**: The notebook mode updates the background and font of the page.  
  * **Responsive Hamburger Menu**: Handles menu opening/closing behavior for smaller screens.

**Organization**

* Images were organized into subdirectories for clarity.

### **Reflection**

**Future Directions**

1. Add more interactive features, like  
   1. Movable light sources and shadow elements  
   2. Demos for each of the other people mentioned on the site.  
   3. A demo depicting the difference between pigment mixing and light mixing, allowing users to attempt to mix colors to get close to a particular hex code.  
   4. Some games or challenges.  
   5. A demo to explain or depict different forms of color-blindness.  
2. Expand the content to cover additional theories and cultural perspectives on color.

**Lessons Learned**

* **What Worked Well**:  
  * I think the interactive elements are engaging.  
  * The responsive design adapts to various device sizes.  
* **What Needs Improvement**:  
  * The implementation of advanced animations proved challenging and could be refined.  
  * The "notebook mode" feature could be better, with additional visual features and a better font for legibility.  
* **Reflection**:  
  * If I were to start again, I would dedicate more time to refining interactive animations. I would also try to create a foundation for future demos, like standard HTML/CSS elements that I could implement across different demos. I tried to add a few more, but the intricacies of CSS/JS animations made that difficult to achieve. The modular structure of the code made universal style adjustments easier, which helped a lot.

