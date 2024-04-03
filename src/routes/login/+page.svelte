<script>
    import loginDesign from '../../assets/login_design.svg'
    import { initializeApp } from "firebase/app";
    import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
    import { getFirestore } from 'firebase/firestore';
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

    onAuthStateChanged(auth, user => {
        if(user != null)
        {
            console.log('logged in!');
        } else
        {
            console.log('No user');
        }
    })

    function login()
    {
        signInWithEmailAndPassword(auth, userData.mail, userData.password)
    }

    let userData = {
        mail: '',
        password: ''
    }

</script>

<div class="container">
    <div class="left"></div>
    <div class="right"></div>
    <div class="main">
        <div class="inputs">
            <div class="asdf">
                <p>E-Mail</p>
                <input type="text" bind:value={userData.mail}>
                <p>Password</p>
                <input type="password" bind:value={userData.password}>
                <div class="buttons">
                    <input type="button" value="Login" class="active" on:click={login}>
                    <a href="/register"><input type="button" value="Register" ></a>

                </div>
            </div>
        </div>
        <div class="design">
            <img src="{loginDesign}" alt="SVG art">
        </div>
    </div>
</div>

<style>
    .container
    {
        width: 100vw;
        height: 100vh;
        display: grid;

        grid-template-columns: 1fr 1fr;

    }

    .left
    {
        background-color: #ECECEC;
    }

    .right
    {
        background-color: #DBDBDB;
    }

    .main
    {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        display: grid;
        grid-template-columns: 1fr 1fr;
        border-radius: 20px;
        padding: 50px;
        width: 50vw;
        height: 50vh;
    }

    .inputs
    {
        height: 100%;
        display: grid;
        align-items: center;

        padding: 10%;
    }

    .asdf
    {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }

    .buttons
    {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5px;
    }

    .active
    {
        background-color: black !important;
        color: white !important ;
    }

    input
    {
        width: 100%;
        border: none;
        border-bottom: 1px solid black;
    }

    input[type=text], input[type=password]
    {
        font-size: 1em;
    }

    input[type=button]
    {
        border: none;
        background-color: white;
        color: black;
        border: 1px solid black;
        border-radius: 4px;
        height: 3vh;
        margin-top: 10%;

    }

    input:focus
    {
        outline: none;
    }

    .design
    {
        background-color: #2D53A4;
        width: 100%;
        height: 50vh;
        display: grid;
        align-items: center;
        justify-content: center;
        border-left: 1px solid black;
        border-radius: 0px 20px 20px 0px;
    }
</style>