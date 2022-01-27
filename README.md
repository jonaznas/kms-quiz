<img src="https://i.imgur.com/kdp1rux.gif" align="right" width="30%" />

# Kms-Quiz ![GitHub](https://img.shields.io/github/license/jonaznas/kms-quiz)
> A simple quiz web app made for mobile devices.

This app was created for a school project.
The idea is visitors can scan a QR code in certain rooms and take a quiz about it.
The progress is saved in the browser and can be viewed on the overview page.

### Getting Started

1. Add the environment variables below.
2. Set up a small backend from which you can load the quiz data.
    - I have created a Cloudflare worker that returns a js object as json.
    - `NG_APP_API_URL` needs to return a json array containing an object of the type found here `src/app/quiz/quiz-dto.ts`.

| Environment variable | Type   | Description                |
|----------------------|--------|----------------------------|
| NG_APP_API_URL       | string | Backend url with quiz data |
| NG_APP_LOGO_URL      | string | Direct logo url            |
| NG_APP_PROJECT_NAME  | string | Project or company name    |


