# weatherApplication

## Overview

This TypeScript project allows users to add desired forecasts using the search bar and the "Add" button. You can type in  Forecasts can be removed by clicking the "Remove" button. The application provides searching capabilities, you can search by name, zip code or coordinates through existing forecasts. Its main purpose is to display added forecasts along with their parameters, including:

City name and country (or initials)
Temperature
Humidity
Wind speed
Pressure
Time of sunrise
Time of sunset
This project was created to provide a convenient weather application that utilizes the Axios library to fetch weather information from the OpenWeatherMap API. It aims to simplify weather forecasting and make it accessible with a user-friendly interface.

## Install and use

Firstly, clone the project: git clone https://github.com/jusivo/weatherApplication.git
Then, navigate to the project directory: cd weatherApplication
1. Run: "npm install" to install the necessary dependencies to run the project
2. If run with http-server, you will need to "npm install http-server"
3. Run "npm run build"
4. Run command "http-server ./dist"
5. Now you can access with this address: http://localhost:8080

# Gaining API_Key and using it in code:
To use the weather application, you need to set up your API key from OpenWeatherMap. Follow these steps to get started:
1. Visit OpenWeatherMap and sign up for a free account.
2. Once logged in, navigate to your account dashboard or API keys section to generate a new API key.
3. Copy the API key and replace the "YOUR_API_KEY" placeholder in the "Api.ts in this code in the beggining: "const API_KEY = "YOUR_API_KEY";
This key will be used to fetch weather data in the application.
4. You can also paste your key in ".env.example" file replace "yourkey_goes_here" and then in Api.ts code just insert these code lines:
"const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;"
### Technologies Used

1.  Vite: Used for fast development and building of the project.
2.  npm: Package manager for installing dependencies and managing project scripts.
3.  Axios: HTTP client for making requests to the OpenWeatherMap API.

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

Fork the repository on GitHub.
Clone your forked repository (git clone https://github.com/your-username/weatherApplication.git).
Create a new branch for your feature or bug fix (git checkout -b feature/my-feature).
Make your changes and commit them (git commit -am 'Add new feature').
Push your changes to your fork on GitHub (git push origin feature/my-feature).
Submit a pull request on the main repository.
Please follow the Contributor Covenant Code of Conduct in all interactions.






