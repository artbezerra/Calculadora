       document.addEventListener('DOMContentLoaded', () => {
            const visorExpressao = document.querySelector('[data-visor-expressao]');
            const visorResultado = document.querySelector('[data-visor-resultado]');
            const historicoLista = document.querySelector('[data-historico-lista]');

            let entrada_atual = '0';
            let operador = null;
            let valor_anterior = '';
            let historico = [];
            let aguardando_proximo_valor = false;

            function atualizarDisplay() {
                visorResultadoEl.textContent = entrada_atual;
                if (operador != null) {
                    visorExpressaoEl.textContent = `${valor_anterior} ${operador}`;
                } else {
                    visorExpressaoEl.textContent = '';
                }
            }
            
            function calcular(primeiro, op, segundo) {
                let p = parseFloat(primeiro);
                let s = parseFloat(segundo);
                if (isNaN(p) || isNaN(s)) return 'Erro'; // Checagem adicional
                if (op === '+') return p + s;
                if (op === '-') return p - s;
                if (op === '×') return p * s;
                if (op === '÷') {
                    if (s === 0) return 'Erro';
                    return p / s;
                }
                if (op === 'xʸ') return Math.pow(p, s);
                return s;
            }
       });