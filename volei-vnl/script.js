// script.js
document.addEventListener('DOMContentLoaded', () => {
    const resultsContainer = document.getElementById('results');
    const radioButtons = document.querySelectorAll('input[name="competition"]');
    let currentCompetition = '5569';

    // Função para buscar dados dos jogos
    async function fetchGameData(competitionId) {
        try {
            const response = await fetch(`https://webws.365scores.com/web/games/?langId=31&competitions=${competitionId}`);
            const data = await response.json();

            if (!data.games) {
                throw new Error('Não foi possível obter dados dos jogos.');
            }

            return data.games;
        } catch (error) {
            return [{ error: error.message }];
        }
    }

    // Função para processar e exibir os dados dos jogos
    async function updateUI() {
        const games = await fetchGameData(currentCompetition);

        games.forEach(async (game) => {
            if (game.homeCompetitor.id !== 0 && game.awayCompetitor.id !== 0) {
                const gameID = game.id;
                const competicao = game.competitionDisplayName;
                const homeTeam = game.homeCompetitor.name.split(" (F)")[0];
                const awayTeam = game.awayCompetitor.name.split(" (F)")[0];

                const response = await fetch(`https://webws.365scores.com/web/game/?langId=31&gameId=${gameID}`);
                const gameData = await response.json();

                let placarSTR = `Jogo: ${homeTeam} x ${awayTeam} | ID: ${gameID}\nResultado:`;
                let show = false;

                gameData.game.stages.forEach(stage => {
                    const setName = stage.name;
                    const homeScore = stage.homeCompetitorScore;
                    const awayScore = stage.awayCompetitorScore;
                    const statsTxt = gameData.game.statusText;
                    const live = stage.isLive || false;
                    const ended = stage.isEnded || false;

                    if (statsTxt === 'Fim' || statsTxt === 'Just Ended' || statsTxt.endsWith('set')) {
                        if (homeScore !== -1 && awayScore !== -1) {
                            if (live && !show) {
                                placarSTR += "\nPlacar ao-vivo:";
                                show = true;
                            }
                            if (setName !== "Atual") {
                                placarSTR += `\n${setName}: ${homeScore} x ${awayScore}`;
                            } else {
                                if (homeScore > awayScore) {
                                    placarSTR += `\nGanhador: ${homeTeam}`;
                                } else if (homeScore < awayScore) {
                                    placarSTR += `\nGanhador: ${awayTeam}`;
                                }
                            }
                        }
                    } else if (statsTxt === 'Scheduled' && !show) {
                        placarSTR += '\nJogo ainda não começou';
                        show = true;
                    }
                });

                // Verifica se o elemento já existe
                let resultItem = document.querySelector(`.result-item[data-game-id="${gameID}"]`);
                if (!resultItem) {
                    resultItem = document.createElement('div');
                    resultItem.classList.add('result-item');
                    resultItem.setAttribute('data-game-id', gameID);
                    resultsContainer.appendChild(resultItem);
                }

                resultItem.innerHTML = `<strong>${competicao}</strong><pre>${placarSTR}</pre>`;
            }
        });

        setTimeout(updateUI, 10000); // Atualiza a cada 10 segundos
    }

    // Event listener para os botões de opção
    radioButtons.forEach(radio => {
        radio.addEventListener('change', (event) => {
            currentCompetition = event.target.value;
            updateUI();
        });
    });

    updateUI(); // Chama a função de atualização pela primeira vez
});
