ExKMC_result" class="result">
                <!-- Content for result 1 -->
                <img src="ExKMC_result.jpg" alt="Result 1 Image 1">
            </div>
            <div id="ICOT_result" class="result" style="display: none;">
                <!-- Content for result 2 -->
                <img src="ICOT_result.jpg" alt="Result 2 Image 1">  
            </div>
            <div id="MPC_result" class="result" style="display: none;">
                <!-- Content for result 2 -->
                <img src="MPC_result.jpg" alt="Result 3 Image 1">  
            </div>
            <div id="ExShallow_result" class="result" style="display: none;">
                <!-- Content for result 2 -->
                <img src="ExShallow_result.jpg" alt="Result 4 Image 1">  
            </div>
            <div id="K-means+CART_result" class="result" style="display: none;">
                <!-- Content for result 2 -->
                <img src="K-means+CART.jpg" alt="Result 5 Image 1">  


document.getElementById('ExKMC').addEventListener('click', function() {
    document.getElementById('ExKMC_result').style.display = 'block';
    document.getElementById('ICOT_result').style.display = 'none';
    document.getElementById('MPC_result').style.display = 'none';
    document.getElementById('ExShallow_result').style.display = 'none';
    document.getElementById('K-means+CART_result').style.display = 'none';
});

document.getElementById('ICOT').addEventListener('click', function() {
    document.getElementById('ExKMC_result').style.display = 'none';
    document.getElementById('ICOT_result').style.display = 'block';
    document.getElementById('MPC_result').style.display = 'none';
    document.getElementById('ExShallow_result').style.display = 'none';
    document.getElementById('K-means+CART_result').style.display = 'none';
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
