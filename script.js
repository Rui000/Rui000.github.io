document.getElementById('ExKMC').addEventListener('click', function() {
    document.getElementById('ExKMC_result').style.display = 'block';
    document.getElementById('ICOT_result').style.display = 'none';
    document.getElementById('MPC_result').style.display = 'none';
    document.getElementById('ExShallow_result').style.display = 'none';
    document.getElementById('K-means+CART_result').style.display = 'none';
});

document.getElementById('ICOT').addEventListener('click', function() {
    fetch('ICOT.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('ExKMC_result').style.display = 'none';
            document.getElementById('ICOT').style.display = 'block';
            document.getElementById('ICOT').innerHTML = html;
            document.getElementById('MPC_result').style.display = 'none';
            document.getElementById('ExShallow_result').style.display = 'none';
            document.getElementById('K-means+CART_result').style.display = 'none';
        })
        .catch(error => console.error('Error fetching result2.html:', error));
});

document.getElementById('MPC').addEventListener('click', function() {
    document.getElementById('ExKMC_result').style.display = 'none';
    document.getElementById('ICOT_result').style.display = 'none';
    document.getElementById('MPC_result').style.display = 'block';
    document.getElementById('ExShallow_result').style.display = 'none';
    document.getElementById('K-means+CART_result').style.display = 'none';
});

document.getElementById('ExShallow').addEventListener('click', function() {
    document.getElementById('ExKMC_result').style.display = 'none';
    document.getElementById('ICOT_result').style.display = 'none';
    document.getElementById('MPC_result').style.display = 'none';
    document.getElementById('ExShallow_result').style.display = 'block';
    document.getElementById('K-means+CART_result').style.display = 'none';
});

document.getElementById('K-means+CART').addEventListener('click', function() {
    document.getElementById('ExKMC_result').style.display = 'none';
    document.getElementById('ICOT_result').style.display = 'none';
    document.getElementById('MPC_result').style.display = 'none';
    document.getElementById('ExShallow_result').style.display = 'none';
    document.getElementById('K-means+CART_result').style.display = 'block';
});
