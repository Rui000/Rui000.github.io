document.getElementById('ExKMC').addEventListener('click', function() {
    document.getElementById('ExKMC_result').style.display = 'block';
    document.getElementById('ICOT_result').style.display = 'none';
    document.getElementById('MPC_result').style.display = 'none';
    document.getElementById('ExShallow_result').style.display = 'none';
    document.getElementById('K-means+CART_result').style.display = 'none';
    document.getElementById('recall').style.display = 'none';
    document.getElementById('f1').style.display = 'none';
    document.getElementById('precision').style.display = 'none';
});

document.getElementById('ICOT').addEventListener('click', function() {
    document.getElementById('ICOT_resultiframe').src = 'ICOT_result.html';
    document.getElementById('ExKMC_result').style.display = 'none';
    document.getElementById('ICOT_result').style.display = 'block';
    document.getElementById('MPC_result').style.display = 'none';
    document.getElementById('ExShallow_result').style.display = 'none';
    document.getElementById('K-means+CART_result').style.display = 'none';
    document.getElementById('recall').style.display = 'none';
    document.getElementById('f1').style.display = 'none';
    document.getElementById('precision').style.display = 'none';
});

document.getElementById('MPC').addEventListener('click', function() {
    document.getElementById('ExKMC_result').style.display = 'none';
    document.getElementById('ICOT_result').style.display = 'none';
    document.getElementById('MPC_result').style.display = 'block';
    document.getElementById('ExShallow_result').style.display = 'none';
    document.getElementById('K-means+CART_result').style.display = 'none';
    document.getElementById('recall').style.display = 'none';
    document.getElementById('f1').style.display = 'none';
    document.getElementById('precision').style.display = 'none';
});

document.getElementById('ExShallow').addEventListener('click', function() {
    document.getElementById('ExKMC_result').style.display = 'none';
    document.getElementById('ICOT_result').style.display = 'none';
    document.getElementById('MPC_result').style.display = 'none';
    document.getElementById('ExShallow_result').style.display = 'block';
    document.getElementById('K-means+CART_result').style.display = 'none';
    document.getElementById('recall').style.display = 'none';
    document.getElementById('f1').style.display = 'none';
    document.getElementById('precision').style.display = 'none';
});

document.getElementById('K-means+CART').addEventListener('click', function() {
    document.getElementById('ExKMC_result').style.display = 'none';
    document.getElementById('ICOT_result').style.display = 'none';
    document.getElementById('MPC_result').style.display = 'none';
    document.getElementById('ExShallow_result').style.display = 'none';
    document.getElementById('K-means+CART_result').style.display = 'block';
    document.getElementById('recall').style.display = 'none';
    document.getElementById('f1').style.display = 'none';
    document.getElementById('precision').style.display = 'none';
});

document.getElementById('recall').addEventListener('click', function() {
    document.getElementById('ExKMC_result').style.display = 'none';
    document.getElementById('ICOT_result').style.display = 'none';
    document.getElementById('MPC_result').style.display = 'none';
    document.getElementById('ExShallow_result').style.display = 'none';
    document.getElementById('K-means+CART_result').style.display = 'none';
    document.getElementById('recall').style.display = 'none';
    document.getElementById('f1').style.display = 'none';
    document.getElementById('recall').style.display = 'block';
});
document.getElementById('f1').addEventListener('click', function() {
    document.getElementById('ExKMC_result').style.display = 'none';
    document.getElementById('ICOT_result').style.display = 'none';
    document.getElementById('MPC_result').style.display = 'none';
    document.getElementById('ExShallow_result').style.display = 'none';
    document.getElementById('K-means+CART_result').style.display = 'none';
    document.getElementById('recall').style.display = 'none';
    document.getElementById('f1').style.display = 'block';
    document.getElementById('precision').style.display = 'none';
});
document.getElementById('precision').addEventListener('click', function() {
    document.getElementById('ExKMC_result').style.display = 'none';
    document.getElementById('ICOT_result').style.display = 'none';
    document.getElementById('MPC_result').style.display = 'none';
    document.getElementById('ExShallow_result').style.display = 'none';
    document.getElementById('K-means+CART_result').style.display = 'none';
    document.getElementById('recall').style.display = 'none';
    document.getElementById('f1').style.display = 'none';
    document.getElementById('precision').style.display = 'block';
});
