

export default function GoogleLoginHead() {
    function decodeJWT(token) {

        let base64Url = token.split(".")[1];
        let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        let jsonPayload = decodeURIComponent(
            atob(base64)
                .split("")
                .map(function (c) {
                    return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
                })
                .join("")
        );
        return JSON.parse(jsonPayload);

        async function handleCredentialResponse(response) {

            console.log("Encoded JWT ID token: " + response.credential);

            const responsePayload = decodeJWT(response.credential);

            // console.log("Decoded JWT ID token fields:");
            // console.log("  Full Name: " + responsePayload.name);
            // console.log("  Given Name: " + responsePayload.given_name);
            // console.log("  Family Name: " + responsePayload.family_name);
            // console.log("  Unique ID: " + responsePayload.sub);
            // console.log("  Profile image URL: " + responsePayload.picture);
            // console.log("  Email: " + responsePayload.email);

            /*fetch api doesn't work with current app since it doesn't reload page*/
            // try {
            //     const response = await fetch("https://umai-site-fc33abfe2d2d.herokuapp.com/home", {
            //         method: "POST",
            //         mode: 'cors',
            //         headers: {
            //             "Content-Type": "application/json"
            //         },
            //         body: JSON.stringify(responsePayload)
            //     });
            //     console.log(response)
            // } catch (e) {
            //     console.error(e);
            // }

            const form = document.createElement('form');
            form.method = 'POST';
            form.action = 'https://umai-site-fc33abfe2d2d.herokuapp.com/home';

            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = 'name';
            input.value = responsePayload['name'];
            form.appendChild(input);

            document.body.appendChild(form);
            form.submit();
        }
    }

    return (
        <head>
            {/* googleLogin */}
            <script src="https://accounts.google.com/gsi/client" async></script>
        </head>
    )
}