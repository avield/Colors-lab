# Colors-lab
A working example of building a simple web application with a LAMP stack. Users can log in to a site and add or search for colors on a MySQL database.

# Technologies Used
- This project uses a LAMP stack: **L**inux server running **A**pache, **M**ySQL, and **P**HP. 
- DBeaver was used to create the ERD
- HTML, CSS, and Javascript for the front end
- MySQL and PHP for the back end

# Set Up Instructions
- Purchase a web domain
- Rent web hosting from a provider such as AWS or Digital Ocean
- Create and deploy a LAMP Droplet
- Set up a MySQL Database according to the ERD (found in Documentations folder)
    - One table for **Users** with *FirstName*, *LastName*, *Login*, and *Password*
    - One table for **Colors** with the *Name* of the color and the *UserID* of the user who added it
- Create Back End:
    - API end points using PHP (in api folder)
        - AddColors.php is used to add new colors to the database
        - SearchColors.php is used to search the database
        - Login.php is used to authenticate users
    - API can be tested with Postman, CURL, or other methods
- Create Front End:
    - HTML files (index.html and color.html in public folder)
    - CSS files for appearance (CSS, images folders)
    - Javascript files to communicate with API points

# How to run
Once the above steps are done, to run the web app simply visit the purchased URL on a web browser.
Be sure to login using one of the users added to the MySQL database. You can then use the Search 
Colors field to search colors already added to the database or the Add Colors field to add new 
colors to the database.

# Limitations
The files in this repository are specific to the web site built for this project. They will need to
be editted to fit another site. For example, the Javascript and PHP files use the dahamancop4331.xyz
purchased for this site. 

# Finished Project
- Site: https://dahamancop4331.xyz/
- Youtube link to demonstration: https://youtu.be/2NQeJTeGYC4
