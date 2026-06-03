 
 # ⛅ Dynamic React Weather App

A responsive and dynamic weather application built with React.js and Tailwind CSS. This project focuses on clean UI/UX, robust state management, and real-world edge case handling.

🔗 **Live Demo: https://weathersampleapp.netlify.app/

## 🛠️ Tech Stack
* **Frontend:** React.js, HTML5
* **Styling:** Tailwind CSS
* **API:** Fetch API (wttr.in)

## ✨ Key Features & Technical Highlights
* **Graceful Error Handling:** Implemented custom UI states for API failures and invalid location inputs.
* **Network Connectivity Check:** Uses the native `navigator.onLine` API to detect offline status and prevent unnecessary API calls.
* **Conditional Rendering:** Manages complex states (`isLoading`, `error`) to seamlessly switch between loading spinners, error messages, and the data view.
* **Responsive Design:** Fully optimized for mobile and desktop screens using Tailwind's utility classes.

## 🚀 How to Run Locally
1. Clone the repository: `git clone https://github.com/sanjay-ghadigaonkar/weatherapp.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
