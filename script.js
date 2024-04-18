document.getElementById('button1').addEventListener('click', function() {
    document.getElementById('result1').style.display = 'block';
    document.getElementById('result2').style.display = 'none';
});

document.getElementById('button2').addEventListener('click', function() {
    document.getElementById('result1').style.display = 'none';
    document.getElementById('result2').style.display = 'block';
});
