# Project 'bgsAndSnailR' and 'nest-transactions' README
This README file explains how to set up and run the 'bgsAndSnailR' and 'nest-transactions' applications using Docker Compose.

## Prerequisites
You need to have Docker and Docker Compose installed on your machine. Confirm that you have them installed by running the following commands in your terminal:
```bash
docker --version
docker-compose --version
```

## Setup
The project uses two services, bgsAndSnailR (a Python application) and nest (a NestJS application).
Firstly, clone this repository to your local machine and navigate to the root directory of the project.

```bash
git clone <repository-url>
cd <repository-directory>
```

## Environment Variables
The NestJS application requires an environment file for configuration. Please send me an email to erikwasmosy98@gmail.com to request the .env file. Once you've obtained the file, place it in the ./nest-transactions directory.

## Building and Running the Services
To build and run the bgsAndSnailR service, use the following Docker Compose commands:

```bash
docker-compose build bgsandsnailr
docker-compose up bgsandsnailr
```

Similarly, to build and run the nest service, use the following Docker Compose commands:

```bash
docker-compose build nest
docker-compose up nest
```

After running these commands, your bgsAndSnailR and nest applications should execute as expected. The bgsAndSnailR service is set up to run a test and then complete its execution. On the other hand, the nest service will continue running and will be accessible at http://localhost:3000.


## Insomnia Setup
The repository includes an insomnia.json file which contains a pre-configured set of requests for the CRUD operations of the NestJS application. To use these pre-configured requests, you will need to import the insomnia.json file into Insomnia, a popular REST client.
Follow the steps below to import the insomnia.json file into Insomnia:
1. Install Insomnia REST client if you haven't done so already. You can download it from the official website.
2. Open Insomnia, click on the "Application" menu (three horizontal lines on the top left of the window), and then choose "Preferences".
In the Preferences window, switch to the "Data" tab.
3. Click on the "Import Data" button, then select "From File".
Navigate to your project directory and select the insomnia.json file.
4. After importing, you should see a new set of requests in your Insomnia workspace, all set up to interact with the NestJS application.

Remember, your NestJS application needs to be running (with docker-compose up nest) for these requests to work. The application will be accessible at http://localhost:3000.
With this setup, you can easily test the CRUD operations of your NestJS application without manually entering the request URLs and parameters.