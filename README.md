<a name="readme-top"></a>

[![MIT License][license-shield]][license-url]

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
This project was created under the supervision of [Dr. Fateme Rajabiyazdi](https://fatemerajabiyazdi.github.io//).

See all information about the project [here](https://kael558.github.io/EDIProjectPage/).


### Built With
* [D3](https://d3js.org/)
* [Tableau](https://www.tableau.com/)

## Getting Started

Visualization is accessible [here](https://kael558.github.io/symmetrical-dollop/)

<!-- USAGE EXAMPLES -->
## Usage
![Attribute Selection Sunburst](https://github.com/kael558/EDIProjectPage/blob/master/img1.PNG)
- Select attribute to expand attribute and see all values
- Select attribute values that you want to visualize
- Click `select all` to select all values inside an attribute
- Click visualize to see the visualization

![Ring Diagram Conjoined](https://github.com/kael558/EDIProjectPage/blob/master/img2.PNG)
- Hover over arcs to view the population according to the select attributes
- Click arc to view the population within that demographic
- Click `Back` to revert
- Click `Compare` to see the demographics in Compare Mode

![Ring Diagram Compared](https://github.com/kael558/EDIProjectPage/blob/master/img3.PNG)
- Hovering over arcs displays population over all selected academic attributes
- Click `Conjoin` to see the demographics in Conjoined Mode

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap
- [ ] Put category within arc to allow the user to identify the category more easily
- [ ] Make text go from inward to outward, so more text is displayed
- [ ] Have title update on arc click
- [ ] Have ring size update on arc click

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Design Rationale
### Sunburst diagram design
- Diagram choice - Captures hierarchical nature of data. Displays proportions of uncollected vs collected. 
- STEM vs non-STEM option - Aggregated other faculty data to provide this option. 
- Uncollected category choices - Indigineity, Ethnicity, Race etc... Suggested by Prof Gananatha as data categories relevant to current times.
- Uncollected category values - Students upto age 85 displayed as uncollected (because average age of student is rising)
- Descriptions in center - Provides data description and context if necessary. Must know how and where data is gathered for data context (e.g. sex vs gender).
- On category click zoom - Displays the categories to allow the user to clearly see all attributes
- Information icon - Provides metadata of visualization (intro, sources, choices & credits). 
- Select all - Ease of use for users to click one button to select all attributes
- Selected Categories on right - Additional interface to let users know (in a list format) what categories they have selected to visualize
- Legend - Identifies the meaning behind each color
- Black text in slices - Contrasts with  color blind colors
- White text otherwise - Contrasts with background color
- Gray for uncollected - Gray is symbolic for missing
- Text in slices was written clockwise - To make it easier to read without rotating ones head to read
- Text in slices switches direction (becomes counterclockwise) at the 90 & 270 (assuming 0 degrees at top) - The text is not upside down
- Back button functionality - Lets users navigate back from zoomed in view
- Visualize button in top right - Right is usually associated with moving forward



#### Ring diagram design
- Diagram choice - Able to encapsulate all available diversity data, show visual comparison within demographics and allow comparisions between demographics.
- Circular format with slices - Doesn't indicate any demographic is first or last and thus more important
- Center circle is white - To draw the users attention to hover and observe numbers
- Fixed size slices - The purpose is to compare diversity populations within academic demographic (slices), so fixed size slices are used because comparison of total population between academic demographics is not the priority. 
- Compare mode - Allows comparison of diversity populations between academic demographics.
- Arc length dependent on diversity % within slice - Allows users to easily know how much of the student population is of a particular diversity within a demographic (slice)
- On arc hover - Lets the user see the values associated with that demographic
- \# of students provided - So users may see a numerical value because the visualization does not demonstrate a numerical value
- '<5' is displayed if less than 5 students - To prevent identifiability
- If no students are in demographic slice, a grey arc is displayed - grey indicates no students and displays 'No students' in center if hovered
- If no students are in diversity population, the arc length is 0 - corresponds to the arc size dependent on diversity %
- % of students - So users see the percent value associated with the size of the arc within the demographic slice
- Legend - Identifies each category with the color
- Year & Age are sorted - To allow users to easily observe time or age progression trends
- On arc click zoom - Lets the user see the other diversity attributes associated with that demographic.
- On compare click - Puts all slices in their own ring diagram. Allows users to switch between views.
- On arc hover (in compare mode) - Displays values associated with that demographic in all diagrams. Legend category also highlights to let user know which category is being hoverred.
- On arc click (in compare mode) zoom - Same as before but for all diagrams.
- Back button functionality - Lets users navigate back from zoomed in view
- Title displays unselected demographics - Lets users know what each demographic (each arc) is including 
- Color assignments are set in a randomized order - To prevent association of any color with any demographic
- Age is the only sequential colored set - To allow users to observe age progression trends

#### General (applies to all)
- Colorblind accessility
- Ordering of data should be randomized (or ordered by popoulation size)
- Dark background - Easier on the eyes
- Back button in top left - Left is usually associated with going back
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Rahel Gunaratne:
 - Email: rahel.gunaratne@gmail.com
 - [Twitter](https://twitter.com/gunaratne_rahel)
 - [LinkedIn](https://www.linkedin.com/in/rahelgunaratne/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments
* [GitHub Pages](https://pages.github.com) for hosting the webpage
* [Font Awesome](https://fontawesome.com) for providing awesome icons

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/kael558/EDIProjectPage.svg?style=for-the-badge
[license-url]: https://github.com/kael558/EDIProjectPage/blob/main/LICENSE.txt
