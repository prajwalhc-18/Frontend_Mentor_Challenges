const ContinueElements = document.getElementsByClassName("continue");

for (const element of ContinueElements) {
  element.addEventListener("click", function () {
    window.alert("Sign in successful");
  });
}

document.getElementById("glogin").addEventListener("click", function () {
  // Replace 'YOUR_REDIRECT_URI' with the actual redirect URI of your form or application
  const redirectUri = encodeURIComponent("YOUR_REDIRECT_URI");

  // Construct the URL with the required parameters
  const googleAuthURL =
    "https://accounts.google.com/o/oauth2/auth/oauthchooseaccount" +
    "?client_id=300208123830-vhj94eso4u0uv1nk6mo3o73j3im7pvv1.apps.googleusercontent.com" +
    "&response_type=code" +
    `&redirect_uri=${redirectUri}` +
    "&scope=email%20profile" +
    "&state=ft3yMz12wrhySsWTi3JG" +
    "&service=lso&o2v=1&theme=mn&flowName=GeneralOAuthFlow";

  // Open Google OAuth page in a new tab
  window.open(googleAuthURL, "_blank");
});
