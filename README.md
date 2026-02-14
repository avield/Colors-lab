# Colors-lab
A working example of building a simple web application with a LAMP stack. Users can log in to a site and add or search for colors on a MySQL database.

# Steps
- Purchase web domain: dahamancop4331.xyz
- Rent web hosting from Digital Ocean
- Create and deploy LAMP Droplet on Digital Ocean
- Synchronize github account with LAMP server so all updates to github are deployed to the server automatically
    - This means html files are left in the root directory as the root mirrors /var/www/html on the server
    - Create a workflows directory with a yml file
- Set up MySQL Database according to ERD (found in Documentations folder)
- Create Back End:
    - API end points using PHP (LAMPAPI folder)
- Create Front End:
    - HTML files (index.html and color.html in root directory)
    - CSS files for appearance (CSS, images folders)
    - Javascript files to communicate with API points

# Finished Project
- Site: https://dahamancop4331.xyz/
- Youtube link to demonstration: https://youtu.be/2NQeJTeGYC4

# AI Use
- **Tool(s)**: ChatGPT 5.2
- **Date(s)**: 1/25/26
- **Scope**: Automating any change to the main branch of the GitHub repo to be pushed to the server too
- **Nature of use**: ChatGPT was used to generate the code for GitHub's Actions workflow file (deploy.yml). It created a YML file with the appropriate fields filled out.
