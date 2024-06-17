document.getElementById('ExKMC').addEventListener('click', function() {
    document.getElementById('ExKMC_result').style.display = 'block';
    document.getElementById('ICOT_result').style.display = 'none';
    document.getElementById('ExShallow_result').style.display = 'none';
    document.getElementById('K-means+CART_result').style.display = 'none';
    document.getElementById('Recall_result').style.display = 'none';
    document.getElementById('F1-score_result').style.display = 'none';
    document.getElementById('Precision_result').style.display = 'none';
    document.getElementById('MPC_analysis_result').style.display = 'none';
    document.getElementById('Exshallow_analysis_result').style.display = 'none';
    document.getElementById('kmeans_analysis_result').style.display = 'none';

});

document.getElementById('ICOT').addEventListener('click', function() {
    document.getElementById('ICOT_resultiframe').src = 'ICOT_result.html';
    document.getElementById('ExKMC_result').style.display = 'none';
    document.getElementById('ICOT_result').style.display = 'block';
    document.getElementById('ExShallow_result').style.display = 'none';
    document.getElementById('K-means+CART_result').style.display = 'none';
    document.getElementById('Recall_result').style.display = 'none';
    document.getElementById('F1-score_result').style.display = 'none';
    document.getElementById('Precision_result').style.display = 'none';
    document.getElementById('MPC_analysis_result').style.display = 'none';
    document.getElementById('Exshallow_analysis_result').style.display = 'none';
    document.getElementById('kmeans_analysis_result').style.display = 'none';
});

document.getElementById('ExShallow').addEventListener('click', function() {
    document.getElementById('ExKMC_result').style.display = 'none';
    document.getElementById('ICOT_result').style.display = 'none';
    document.getElementById('ExShallow_result').style.display = 'block';
    document.getElementById('K-means+CART_result').style.display = 'none';
    document.getElementById('Recall_result').style.display = 'none';
    document.getElementById('F1-score_result').style.display = 'none';
    document.getElementById('Precision_result').style.display = 'none';
    document.getElementById('MPC_analysis_result').style.display = 'none';
    document.getElementById('Exshallow_analysis_result').style.display = 'none';
    document.getElementById('kmeans_analysis_result').style.display = 'none';
});

document.getElementById('K-means+CART').addEventListener('click', function() {
    document.getElementById('ExKMC_result').style.display = 'none';
    document.getElementById('ICOT_result').style.display = 'none';
    document.getElementById('ExShallow_result').style.display = 'none';
    document.getElementById('K-means+CART_result').style.display = 'block';
    document.getElementById('Recall_result').style.display = 'none';
    document.getElementById('F1-score_result').style.display = 'none';
    document.getElementById('Precision_result').style.display = 'none';
    document.getElementById('MPC_analysis_result').style.display = 'none';
    document.getElementById('Exshallow_analysis_result').style.display = 'none';
    document.getElementById('kmeans_analysis_result').style.display = 'none';
});

document.getElementById('Recall').addEventListener('click', function() {
    document.getElementById('ExKMC_result').style.display = 'none';
    document.getElementById('ICOT_result').style.display = 'none';
    document.getElementById('ExShallow_result').style.display = 'none';
    document.getElementById('K-means+CART_result').style.display = 'none';
    document.getElementById('Recall_result').style.display = 'block';
    document.getElementById('F1-score_result').style.display = 'none';
    document.getElementById('Precision_result').style.display = 'none';
    document.getElementById('MPC_analysis_result').style.display = 'none';
    document.getElementById('Exshallow_analysis_result').style.display = 'none';
    document.getElementById('kmeans_analysis_result').style.display = 'none';
});
document.getElementById('F1-score').addEventListener('click', function() {
    document.getElementById('ExKMC_result').style.display = 'none';
    document.getElementById('ICOT_result').style.display = 'none';
    document.getElementById('ExShallow_result').style.display = 'none';
    document.getElementById('K-means+CART_result').style.display = 'none';
    document.getElementById('Recall_result').style.display = 'none';
    document.getElementById('F1-score_result').style.display = 'block';
    document.getElementById('Precision_result').style.display = 'none';
    document.getElementById('MPC_analysis_result').style.display = 'none';
    document.getElementById('Exshallow_analysis_result').style.display = 'none';
    document.getElementById('kmeans_analysis_result').style.display = 'none';
});
document.getElementById('Precision').addEventListener('click', function() {
    document.getElementById('ExKMC_result').style.display = 'none';
    document.getElementById('ICOT_result').style.display = 'none';
    document.getElementById('ExShallow_result').style.display = 'none';
    document.getElementById('K-means+CART_result').style.display = 'none';
    document.getElementById('Recall_result').style.display = 'none';
    document.getElementById('F1-score_result').style.display = 'none';
    document.getElementById('Precision_result').style.display = 'block';
    document.getElementById('MPC_analysis_result').style.display = 'none';
    document.getElementById('Exshallow_analysis_result').style.display = 'none';
    document.getElementById('kmeans_analysis_result').style.display = 'none';
});
document.getElementById('MPC-analysis').addEventListener('click', function() {
    document.getElementById('ExKMC_result').style.display = 'none';
    document.getElementById('ICOT_result').style.display = 'none';
    document.getElementById('ExShallow_result').style.display = 'none';
    document.getElementById('K-means+CART_result').style.display = 'none';
    document.getElementById('Recall_result').style.display = 'none';
    document.getElementById('F1-score_result').style.display = 'none';
    document.getElementById('Precision_result').style.display = 'none';
    document.getElementById('MPC_analysis_result').style.display = 'block';
    document.getElementById('Exshallow_analysis_result').style.display = 'none';
    document.getElementById('kmeans_analysis_result').style.display = 'none';
});
document.getElementById('ExShallow-analysis').addEventListener('click', function() {
    document.getElementById('ExKMC_result').style.display = 'none';
    document.getElementById('ICOT_result').style.display = 'none';
    document.getElementById('ExShallow_result').style.display = 'none';
    document.getElementById('K-means+CART_result').style.display = 'none';
    document.getElementById('Recall_result').style.display = 'none';
    document.getElementById('F1-score_result').style.display = 'none';
    document.getElementById('Precision_result').style.display = 'none';
    document.getElementById('MPC_analysis_result').style.display = 'none';
    document.getElementById('Exshallow_analysis_result').style.display = 'block';
    document.getElementById('kmeans_analysis_result').style.display = 'none';
});
document.getElementById('K-means+CART-analysis').addEventListener('click', function() {
    document.getElementById('ExKMC_result').style.display = 'none';
    document.getElementById('ICOT_result').style.display = 'none';
    document.getElementById('ExShallow_result').style.display = 'none';
    document.getElementById('K-means+CART_result').style.display = 'none';
    document.getElementById('Recall_result').style.display = 'none';
    document.getElementById('F1-score_result').style.display = 'none';
    document.getElementById('Precision_result').style.display = 'none';
    document.getElementById('MPC_analysis_result').style.display = 'none';
    document.getElementById('Exshallow_analysis_result').style.display = 'none';
    document.getElementById('kmeans_analysis_result').style.display = 'block';
});
