<script>
    import logo  from '../assets/logo.png'
    import UI from '../assets/UI.png'
    import IOS from '../assets/IOS.jpeg'
    import Android from '../assets/Medien1.mp4'
    import { initializeApp } from "firebase/app";
    import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
    import * as camera from "$lib/scripts/Camera.js"
    import {onMount} from "svelte";

    onMount(() => {
        camera.stopCamera()
    })


    const firebaseConfig = {
        apiKey: "AIzaSyCqkWJ209qBx1ApNTDzbxYGLZoHqAt-1ls",
        authDomain: "handson-ai.firebaseapp.com",
        projectId: "handson-ai",
        storageBucket: "handson-ai.appspot.com",
        messagingSenderId: "583075617194",
        appId: "1:583075617194:web:f1664df90a774cf12133d3",
        measurementId: "G-CSTD6X1JPM"
    };


    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app)

    let userData = {
        fName: "",
        lName: "",
        mail: ""
    }

    onAuthStateChanged(auth, user => {
        if(user != null)
        {
            console.log('logged in!');
            userData.mail = user.email || ""
        } else
        {
            console.log('No user');
        }
    })

    function logout()
    {
        signOut(auth)
    }
</script>
<div>
    <div class="container">
        <!--
        <div class="nav">
            <img src="{logo}" alt="logo" >
            <div></div>
            <a href="/login" class="nav-block">

                <p>Login</p>

            </a>
            <input type="button" on:click={logout} value="Logout" class="nav-block">
        </div>
        -->
        <div class="sec1">
            <div class="text">
                {#if userData.mail != ""}
                    <h1>Welcome {userData.mail}</h1>
                {:else}
                    <h1>What is HandsOn - AI?</h1>
                {/if}
                <p>Introducing HandsOn - AI, a groundbreaking tool developed by our company to empower individuals with deafness or speech impediments to communicate effortlessly. Harnessing cutting-edge artificial intelligence technology, HandsOn - AI revolutionizes communication by integrating the ASL alphabet into an intuitive interface.

                    <br><br>
                    At HandsOn, we believe in breaking barriers and fostering connection for everyone. <a href="/login">Join us</a>  in embracing the power of communication, one sign at a time. Experience HandsOn - AI today and redefine the way you communicate.</p>
            </div>
            <div class="multilayer-wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path id="w1" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                    <path id="w1" d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                    <path id="w1" d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                    <path id="w2" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                    <path id="w2" d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                    <path id="w2" d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                </svg>
            </div>
        </div>

        <div class="sec2">
            <div class="text">
                <h1>Userinterface</h1>
                <p> Designed with simplicity in mind, our platform ensures seamless communication for users of all ages and varying abilities. Whether you're navigating daily conversations or expressing intricate thoughts, HandsOn - AI offers a fluid and inclusive communication experience like never before.</p>
            </div>
            <img src="{UI}" alt="User Interface - Website">

        </div>

        <div class="sec3 layer1 spacer">

            <div class="top-right-text">
                <h1>Availability - IOS</h1>
                <p>

                    Experience the freedom to express yourself fully, without limitations. From basic conversations to intricate expressions, the HandsOn - AI app supports you every step of the way.

                    <br><br>

                    Download the HandsOn - AI app today and embark on a journey of limitless expression and connection.
                </p>
            </div>
            <div class="placeholder"></div>
            <div class="placeholder"></div>
            <div class="bottom-left-img">
                <img src="{IOS}" alt="IOS - App">
            </div>
        </div>

        <div class="sec4 layer2 spacer">
            <div class="sec4-text">
                <div><h3>Practice or communicate on the go - Android</h3>
                    <p> Unlock the power of sign language anytime, anywhere. Seamlessly designed for Android devices, our app offers a user-friendly experience tailored to your needs.

                        From mastering the ASL alphabet to engaging in meaningful conversations, HandsOn - AI empowers you to connect and express yourself with confidence. </p></div>

            </div>
            <div></div>
            <div class="video-container">
                <!-- svelte-ignore a11y-media-has-caption
                <video controls>
                <source src="{Android}">

                </video> -->
            </div>


        </div>

    </div>
</div>


<style>
    .container
    {
        width: 100vw;
        height: 100vh;
        font-family: 'Concert One', sans-serif;
    }

    video
    {
        height: 900px;
        width: auto;
    }

    .container p
    {
        font-size: 2em;
    }

    .nav
    {
        width: 100vw;
        height: 150px;
        background-color: #3f8a77;
        color: white;
        display: grid;
        grid-template-areas: "a b c d e f g h i j k l m n o p q r s";
    }

    input[type="button"]
    {
        border-radius: none;
        border: none;
        font-size: 2em;
        font-family: inherit;
        background-color: white;
        align-self: right;
        border-right: 1px solid black;
        grid-area: r !important;
    }


    input[type="button"]:hover
    {
        background-color: white;
    }



    .nav .nav-block
    {
        text-decoration: none;
        color: black;
        background-color: white;
        grid-area: s;
        display: grid;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
    }

    .nav img
    {
        height: 150px;
        width: calc(auto - 10px);
    }

    h1
    {
        margin: 0;
        font-size: 6em;
    }

    h3
    {
        font-size: 4em;
        margin: 0;
    }

    .sec1
    {
        width: 100vw;
        height: auto;
        background-color: #c98702;
        color: white;


        display: grid;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .sec1 .text
    {
        width: 100%;
    }

    .text
    {
        width: 50vw;
        text-align: center;
    }

    .top-right-text
    {
        width: 35vw;

        grid-area: b;
        margin: 50px;
        padding-left: 50px;
    }

    /* .top-right-text h1
    {
    } */

    .bottom-left-img
    {
        grid-area: c;
        padding-top: 15%;
        padding-left: 10%;
    }

    .bottom-left-img img
    {
        height: 60vh;
        width: auto;
    }

    .sec2
    {
        padding-top: 50px;
        width: 100vw;
        height: 50vh;
        background-color: #001220;
        color: white;

        display: grid;
        align-items: center;
        justify-content: left;
        grid-template-columns: 1fr 1fr;
    }

    .sec2 .text p
    {
        margin: 10%;
        text-align: center;
    }

    .sec2 img
    {
        height: 75%;
        width: auto;
    }

    .sec3
    {
        width: 100vw;
        height: 100vh;
        background-color: #fca;
        color: white;
        overflow: hidden;

        display: grid;
        align-items: start;
        justify-content: center;

        grid-template-areas:
        "a a a a a a b b b b"
        "a a a a a a b b b b"
        "c c c c c d d d d d"
        "c c c c c d d d d d";
        gap: 10px;
        grid-template-columns: repeat(10, 1fr);
        grid-auto-rows: 100px;

    }

    .sec4
    {
        width: 100vw;
        height: 75vh;
        display: grid;
        align-items: center;
        grid-template-columns: 1fr 1fr 1fr;

    }

    .sec4 .video-container
    {
        padding-left: 40%;
    }

    .sec4-text
    {
        position: relative;
        left: 20%;

        text-align: center;

        background-color: #140021;

        color: white;

        padding: 20px;

        display: grid;
        align-items: center;
        justify-content: center;

        width: 800px;
        height: 500px;
    }

    .spacer {
        aspect-ratio: 960/300;
        width: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    .layer1 {
        background-image: url('../blobs.svg');
    }

    .layer2
    {
        background-image: url('../layers.svg')
    }

    .multilayer-wave {
        position: relative;
        bottom: -19%;
        left: 0;
        width: 100vw;
        overflow: hidden;
        line-height: 0;
        transform: rotate(180deg);
    }

    .multilayer-wave svg {
        position: relative;
        display: block;
        width: calc(152% + 1.3px);
        height: 167px;
        transform: rotateY(180deg);
    }

    .multilayer-wave .shape-fill {
        fill: #001220;
    }

    @media (max-width: 1950px) {
        .sec2
        {
            display: grid;
            align-items: center;
            justify-content: left;
            grid-template-rows: 1fr 1fr;
        }
    }

</style>