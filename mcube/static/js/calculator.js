/**
 * Created by Matt on 5/20/2016.
 **/
"use strict";
//Gets form fields
var num1 = document.getElementById('num1'), num2 = document.getElementById('num2'), res;
//Each function stores the result in operand 1.
function add()
{
    if(num2.value !== "")
    {
        res = parseFloat(num1.value) + parseFloat(num2.value);
        output();
    }
}
function subtract()
{
    if(num2.value !== "")
    {
        res = parseFloat(num1.value) - parseFloat(num2.value);
        output();
    }
}
function mult()
{
    if(num2.value !== "")
    {
        res = parseFloat(num1.value) * parseFloat(num2.value);
        output();
    }
}
function divide()
{
    if(num2.value !== "")
    {
        res = parseFloat(num1.value) / parseFloat(num2.value);
        output()
    }
}
function output()
{
    num1.value = res;
    num2.value = "";
}