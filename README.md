<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>wheather map</title>
    <!-- <link rel="stylesheet" href="wheather.css"> -->
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/4.1.13/lib.min.js"></script> -->
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <!-- <style>

        .main{
            width: 40%;
            height: 60vh;
            border-radius: 20px;
            background: linear-gradient(to bottom,lightblue,rgb(97, 95, 68));
            /* align-content: center; */
            margin: 400px;
            margin-top: 100px;
            
            /* align-content: space-between; */
        }
        #lon{
            width: 50%;
            height: 40px;
            border-radius: 40px;
            text-align: center;
            font-size: large;
        }
        #btn{
            width: 15%;
            height: 40px;
            border-radius: 20px;
            background: yellow;
            /* position: relative; */
            /* margin: 200px; */
        }
        .lab{
            font-size: x-large;
            /* position: relative; */
        }
        h1{
            text-align: center;
            color: blanchedalmond;

            font-family: Verdana, Geneva, Tahoma, sans-serif;     
        }

        h2{
            text-align: center;
        }
    </style> -->
</head>
<body>
    <div class="container  ">
    <div class="max-w-md mx-auto  rounded-xl shadow-xl bg-gradient-to-r
                        from-indigo-500 to-purple-600 text-white 
                overflow-hidden sm:max-w-lg lg:max-w-2xl text-center  transition-transform transform hover:scale-105 mt-7 py-5">
    <h1  class="text-2xl mt-2">WEATHER FORECAST</h1>
    <label   class="text-2xl mt-10 min[400px]:text-bg-green-500">  City name</label>
    <input type="text" class="border-2 border-black-400 rounded-lg text-2xl max-w-md mt-10 py-3 px-6" id="lon" placeholder="enter the city name">
    <br>
    <button type="button" id="btn" class="border-2 rounded-lg  text-2xl mt-4 ml-30 bg-green-600 py-3 px-6   text-white transition-transform transform hover:scale-105 "> Submit</button>     
    <div id="din"> <h2 id="h2"  class="text-2xl mt-2 pt-4">temperature : 0 °C</h2></div>
    <div id="wind"> <h2 id="h0" class="text-2xl mt-2">feels like : 0 °C</h2></div>
    <div id="cloud"> <h2 id="h1" class="text-2xl mt-2">city name : </h2></div>
    <div id="des"> <h2 id="h3" class="text-2xl mt-2">weather description : </h2></div>
    <div id=""><h2 id="date" class="text-2xl mt-2">date: 00/00/00 ,00:00:00</h2></div>
    </div>
</div>
<script src="index.js"></script>
 <!-- <script src="newjs.js"></script> -->
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/4.1.13/lib.min.js"  crossorigin="anonymous"></script> -->



