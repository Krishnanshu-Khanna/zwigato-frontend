# Zwigato

Zwigato is an intuitive online food ordering application that enables users to browse local restaurants, view menus, and place orders seamlessly. The app integrates secure payment gateways and is designed for enhanced accessibility and user experience across multiple platforms.


## Features

- **Browse Local Restaurants**: View menus and restaurant details.
- **Secure Payments**: Integrated with Stripe for seamless transactions.
- **User-Friendly Navigation**: Intuitive design for easy use.
- **Personalized Recommendations**: Get recommendations based on your preferences.
- **Multi-Platform Compatibility**: Access the app on various devices.

## Tech Stack

- **Frontend**: React.js, Typescript, Tailwind CSS
- **Backend**: Node.js, Express
- **Authentication**: Auth0
- **Payments**: Stripe
- **Database**: MongoDB, Mongoose
- **Validation**: Zod
- **Media Storage**: Cloudinary

## Links

- [Frontend](https://zwigato-frontend.onrender.com/)
- [Backend (Test in Postman)](https://zwigato-backend-qnjs.onrender.com)

## Installation

To get a local copy up and running, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/your-username/zwigato.git
    ```
2. **Install dependencies**:
    ```sh
    cd zwigato
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the root directory and add your variables:
    ```env
    VITE_API_BASE_URL=<your_api_url>
    VITE_AUTH0_DOMAIN=<your_auth0_domain>
    VITE_AUTH0_CLIENT_ID=<your_auth0_client_id>
    VITE_AUTH0_CALLBACK_URL=<your_auth0_callback_url>
    VITE_AUTH0_AUDIENCE=<your_auth0_audience>
    ```

4. **Run the application**:
    ```sh
    npm run dev
    ```

## Usage

- Open your browser and go to `http://localhost:5173`.
- Sign up or log in using Auth0.
- Browse restaurants, view menus, and place orders.
- Complete the payment process using Stripe.

## Screenshots


<div align="center">
  <img src="https://github.com/user-attachments/assets/7e50ad07-2250-429f-bc20-7ae274b861f0" width="300"/>
  <img src="https://github.com/user-attachments/assets/1c50c488-5644-4284-9604-e8f0ebaef4ca" width="300"/>
  <img src="https://github.com/user-attachments/assets/8977b463-d7a7-4cdf-a152-39b0d72468b9" width="300"/>
  <img src="https://github.com/user-attachments/assets/61fcc6b1-176b-4ba3-ae31-6213eb744ba5" width="300"/>
  <img src="https://github.com/user-attachments/assets/8e9bf27c-5d21-4d1d-bf49-c045dbfccc8a" width="300"/>
  <img src="https://github.com/user-attachments/assets/f559b7bf-23ab-4985-aa74-90a7adffdd20" width="300"/>
  <img src="https://github.com/user-attachments/assets/cc8380f1-9dc7-4727-8337-5e7be2e6aae0" width="300"/>
  <img src="https://github.com/user-attachments/assets/4cb28a55-a76a-41c8-9a29-4f48ad4532db" width="300"/>
</div>


## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


