
const ctx = document.getElementById('graficoDenuncias').getContext('2d');
const grafico = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Limpeza', 'Financeira', 'Estrutural'],
    datasets: [{
      label: 'Denúncias',
      data: [10, 5, 8],
      backgroundColor: ['#66bb6a', '#81c784', '#388e3c']
    }]
  }
});
