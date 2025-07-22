





<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="calculate.css">
</head>
<body>
    <!-- <form action="" id="form"> -->
    <div class="main-con">
        <h1>Calculator app</h1>
        <div class="divin">
            <input type="text" id="inp">
            <input type="button" name="" class="cl" id="back" onclick="back()" placeholder="button" value="Del">
        </div>
        <table>
            <tr>
                <td>
                    <input type="button" class="cl" name="" id="one" onclick="fun1()" placeholder="button" value="1">
                </td>
                <td>
                    <input type="button" class="cl" name="" id="two" onclick="two1()" placeholder="button" value="2">
                </td>
                <td>
                    <input type="button" class="cl" name="" id="three" onclick="three1()" placeholder="button"
                        value="3">
                </td>
                <td>
                    <input type="button" class="cl" name="" id="four" onclick="four1()" placeholder="button" value="4">
                </td>
            </tr>
            <tr>
                <td>
                    <input type="button" name="" class="cl" id="five" onclick="five1()" placeholder="button" value="5">
                </td>
                <td>
                    <input type="button" name="" class="cl" id="six" onclick="six1()" placeholder="button" value="6">
                </td>
                <td>
                    <input type="button" name="" class="cl" class="cl" id="seven" onclick="seven1()"
                        placeholder="button" value="7">
                </td>
                <td>
                    <input type="button" class="cl" name="" id="button" onclick="fun()" placeholder="button" value="8">
                </td>
            </tr>
            <tr>
                <td>
                    <input type="button" name="" class="cl" id="nine" onclick="nine1()" placeholder="button" value="9">
                </td>
                <td>
                    <input type="button" name="" class="cl" id="zero" onclick="zero1()" placeholder="button" value="0">
                </td>
                <td>
                    <input type="button" name="" class="cl" id="plus" onclick="plus1()" placeholder="button" value="+">
                </td>
                <td>
                    <input type="button" name="" class="cl" id="minus" onclick="minus1()" placeholder="button"
                        value="-">
                </td>
            </tr>
            <tr>
                <td>
                    <input type="button" name="" class="cl" id="mul" onclick="mul1()" placeholder="button" value="*">
                </td>
                <td>
                    <input type="button" name="" class="cl" id="divide" onclick="divide1()" placeholder="button"
                        value="/">
                </td>
                <td>
                    <input type="button" name="" class="cl" id="clear" onclick="clear1()" placeholder="button"
                        value="clear">
                </td>
                <td>
                    <input type="button" name="" class="cl" id="equal" onclick="equal1()" placeholder="button"
                        value="=">
                </td>
            </tr>
    </div>
    <!-- </form> -->
    </table>
    <script src="calculator.js">
    </script>
</body>
</html>
